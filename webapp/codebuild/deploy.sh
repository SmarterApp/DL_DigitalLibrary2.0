#!/bin/bash
#
# Deploy Script for Tools for Teachers Webapp
#
# This script is called during the post_build phase of CodeBuild projects
# using the build-and-deploy.yaml configuration. It's job is to inspect the
# build environment to determine whether this build should be deployed to one
# of the DL environments, and to perform that deploy if so.
target_env=""

cat << BANNER
Deploy script for Tools for Teachers webapp
-------------------------------------------

Inspecting the build environment for deploy target:
  CODEBUILD_WEBHOOK_EVENT = ${CODEBUILD_WEBHOOK_EVENT}
  CODEBUILD_WEBHOOK_BASE_REF = ${CODEBUILD_WEBHOOK_BASE_REF}
  DL_TARGET_ENV = ${DL_TARGET_ENV}
BANNER

# There are 3 scenarios:
#
# 1. A pull-request is merged. In this case CodeBuild is triggered by the
#    GitHub webhook. We need to inspect the base ref to find the target
#    environment.
if [[ -n $CODEBUILD_WEBHOOK_EVENT && \
      -n $CODEBUILD_WEBHOOK_BASE_REF && \
      $CODEBUILD_WEBHOOK_EVENT == 'PULL_REQUEST_MERGED' ]]; then

  # Currently there are only two "main" branches that represent target
  # environments: develop (-> DEV) and master (-> PROD)
  if [[ $CODEBUILD_WEBHOOK_BASE_REF == *'develop' ]]; then
    echo "Merging to dev, deploy to dev."
    target_env="dev"

  else
    echo "Merging to $CODEBUILD_WEBHOOK_BASE_REF, no deployment."
    exit 0
  fi

# 2. A pull request is create, updated, or re-opened. In this case we only want
#    CodeBuild to build the project based on the PR. We don't want to deploy.
elif [[ -n $CODEBUILD_WEBHOOK_EVENT && \
        ( $CODEBUILD_WEBHOOK_EVENT == 'PULL_REQUEST_CREATED' || \
          $CODEBUILD_WEBHOOK_EVENT == 'PULL_REQUEST_UPDATED' || \
          $CODEBUILD_WEBHOOK_EVENT == 'PULL_REQUEST_REOPENED' ) ]]; then

  echo "This is a PR build, no deployment required."
  exit 0

# 3. A build has been manually triggered (deploy to QA, UAT, Staging, or PROD).
#    In this case there won't be any information about the webhook, but we do
#    expect to see the DL_TARGET_ENV variable set
elif [[ -z $CODEBUILD_WEBHOOK_EVENT && \
        -n $DL_TARGET_ENV ]]; then
  target_env="$DL_TARGET_ENV"

# All build invocations should fit one of the categories above.
else

  >&2 cat << ERRMSG
Unrecognized deploy invocation. This script expects either the
CODEBUILD_WEBHOOK_EVENT or DL_TARGET_ENV environment variable to be set.
ERRMSG

  exit 1
fi

# Now we can perform the actual deploy.
target_domain="${target_env}.webapp.dl.smarterbalanced.org"
echo "Deploy target is ${target_env}. Deploying to ${target_domain}."
aws s3 sync ./dist/sb-digital-library/ "s3://${target_domain}"

if [[ $? -ne 0 ]]; then
  >&2 echo "Failed to sync dist contents to target S3 bucket."
  exit 2
fi

# The following uses the --query feature of AWS CLI to directly extract the ID of
# the distribution we're targetting. The value is a JMESPath expression which
# allows us to query the JSON response object. You can run
#
#     aws cloudfront list-distributions
#
# to get an example of the full object model we're querying. This query breaks
# down into:
#
#     # Select the distribution objects
#     DistributionList.Items
#
#     # Look for the distribution whose's domain name for the first origin
#     # configuration (there's only one in our environments) matches the
#     # environment we're targeting.
#     [?starts_with(Origins.Items[0].DomainName, '${target_domain}')]
#
#     # From the matching records, extract the Id only.
#     .Id
#
#     # We get an array but we know there will only be one matching Id, so
#     # let's extract that from the array
#     | [0]
#
#     # Finally, the ID we get out of this query includes quote marks (it's a
#     # JSON string). We need to remove those before passing this into the next
#     # command. Pipe through sed to use regex's to chomp
#     | sed -e 's/^"//' -e 's/"$//'
# For details about the --query option see the following:
# - http://jmespath.org/
# - https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-output.html#cli-usage-output-filter

echo "Looking up the CloudFront Distribution ID for ${target_domain}."
cloudfront_distribution_id=$(\
  aws cloudfront list-distributions \
    --query "DistributionList.Items[?starts_with(Origins.Items[0].DomainName, '${target_domain}')].Id | [0]" \
  | sed -e 's/^"//' -e 's/"$//'
)

if [[ -z "${cloudfront_distribution_id}" ]]; then
  >&2 echo "Unable to find CloudFront distribution for domain ${target_domain}."
  exit 3
fi

echo "Found distribution ID ${cloudfront_distribution_id}."

echo "Invalidating the CloudFront cache for ${target_env}."
invalidation_id=$(aws cloudfront create-invalidation \
  --query 'Invalidation.Id' \
  --distribution-id "${cloudfront_distribution_id}" \
  --paths '/index.html' '/assets/config/config.json' '/assets/config/tenant.config.json')

if [[ $? -ne 0 || -z "${invalidation_id}" ]]; then
  >&2 echo "Unable to create the CloudFront invalidation."
else
  echo "Successfully created invalidation ${invalidation_id}."
fi

echo "Done."
