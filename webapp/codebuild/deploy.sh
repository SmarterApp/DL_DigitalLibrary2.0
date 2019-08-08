#!/bin/bash
#
# Deploy Script for Digital Library WebApp 2.0
#
# This script is called during the poast_build phase of CodeBuild projects
# using the build-and-deploy.yaml configuration. It's job is to inspect the
# build environment to determine whether this build should be deployed to one
# of the DL environments, and to perform that deploy if so.
target_env=""

echo "Inspecting the build environment for deploy target:"
echo "  CODEBUILD_WEBHOOK_EVENT = ${CODEBUILD_WEBHOOK_EVENT}"
echo "  CODEBUILD_WEBHOOK_BASE_REF = ${CODEBUILD_WEBHOOK_BASE_REF}"
echo "  DL_TARGET_ENV = ${DL_TARGET_ENV}"

# There are 3 scenarios:
#
# 1. A pull-request is merged into develop. In this case CodeBuild is triggered
#    by the GitHub webhook. If it is a PR merge into develop, we know we're
#    deploying to dev.
if [ $CODEBUILD_WEBHOOK_EVENT == 'PULL_REQUEST_MERGED' -a
     $CODEBUILD_WEBHOOK_BASE_REF == 'develop' ]; then
  target_env="dev"

# 2. A pull request is create, updated, or re-opened. In this case we only want
#    CodeBuild to build the project based on the PR. We don't want to deploy.
elif [ $CODEBUILD_WEBHOOK_EVENT == 'PULL_REQUEST_CREATED' -o
       $CODEBUILD_WEBHOOK_EVENT == 'PULL_REQUEST_UPDATED' -o
       $CODEBUILD_WEBHOOK_EVENT == 'PULL_REQUEST_REOPENED' ]; then

  echo "This is a PR build, no deployment required."
  exit 0

# 3. A build has been manually triggered (deploy to QA, UAT, Staging, or PROD).
#    In this case there won't be any information about the webhook, but we do
#    expect to see the DL_TARGET_ENV variable set
elif [ -z $CODEBUILD_WEBHOOK_EVENT -a
       -n $DL_TARGET_ENV ]; then
  target_env="$DL_TARGET_ENV"

# All build invocations should fit one of the categories above.
else

  >&2 cat << ERRMSG
"Unrecognized build invocation. This script expects either the
CODEBUILD_WEBHOOK_EVENT or DL_TARGET_ENV environment variable to be set."
ERRMSG

  exit 1
fi

# Now we can perform the actual deploy.
target_domain="${target_env}.webapp.dl.smarterbalanced.org"
echo "Deploy target is ${target_env}. Deploying to ${target_domain}."
aws s3 sync webapp/dist/sb-digital-library "${target_domain}"

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
echo "Found distribution ID ${cloudfront_distribution_id}."

echo "Invalidating the CloudFront cache for ${target_env}."
invalidation_id=aws cloudfront create-invalidation \
  --distribution-id "${cloudfront_distribution_id} \
  --paths '/index.html' \\
  --query 'Invalidation.id'

echo "Successfully created invalidation ${invalidation_id}."
echo "Done."
