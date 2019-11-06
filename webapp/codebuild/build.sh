#!/bin/bash
#
# Build Script for the Tools for Teachers webapp
#
# This script is called during the build phase of CodeBuild projects using the
# build-and-deploy.yaml configuration. It's job is to correctly call the
# Angular CLI to build the project for the target environment. 


# Exit on all errors. Keep track of the last command and print an error message
# when exiting on errors.
set -e
trap 'last_command=$current_command; current_command=$BASH_COMMAND' DEBUG
trap 'if [ $? -ne 0 ]; then echo "\"${last_command}\" command failed with exit code $?."; fi' EXIT

cat << BANNER
Build script for Tools for Teachers webapp
------------------------------------------

Inspecting the build environment for deploy target:
  CODEBUILD_WEBHOOK_EVENT = ${CODEBUILD_WEBHOOK_EVENT}
  CODEBUILD_WEBHOOK_BASE_REF = ${CODEBUILD_WEBHOOK_BASE_REF}
  DL_TARGET_ENV = ${DL_TARGET_ENV}
BANNER

# This build script is triggered in 3 scenarios:
#
# 1. A pull request is merged. In this case CodeBuild is triggered by the
#    GitHub webhook. We need to inspect the base ref to find the target
#    environment
if [[ -n $CODEBUILD_WEBHOOK_EVENT && \
      -n $CODEBUILD_WEBHOOK_BASE_REF && \
      $CODEBUILD_WEBHOOK_EVENT == 'PULL_REQUEST_MERGED' ]]; then

  # Currently there are only two "main" branches that represent target
  # environments: develop (-> DEV) and master (-> PROD)
  if [[ $CODEBUILD_WEBHOOK_BASE_REF == '*develop' ]]; then
    echo "Merging into develop, build targeting DEV"
    npm run pre-build-ci
    ng run build --c dev

  elif [[ $CODEBUILD_WEBHOOK_BASE_REF == '*master' ]]; then
    echo "Merging into master, build targeting PROD"
    npm run build-ci

  else
    echo "Merging into neither develop or master, building for DEV"
    npm run pre-build-ci
    ng run build --c dev
  fi

# 2. A pull request has been created, updated, or re-opened.
elif [[ -n $CODEBUILD_WEBHOOK_EVENT && \
        ( $CODEBUILD_WEBHOOK_EVENT == 'PULL_REQUEST_CREATED' || \
          $CODEBUILD_WEBHOOK_EVENT == 'PULL_REQUEST_UPDATED' || \
          $CODEBUILD_WEBHOOK_EVENT == 'PULL_REQUEST_REOPENED' ) ]]; then

  echo "This is a PR build, running full PROD build."
  npm run build-ci

# 3. A build has been manually triggered (deploy to qa, uat, stage, or prod).
elif [[ -n $DL_TARGET_ENV ]]; then

  echo "Deploying to $DL_TARGET_ENV, build for the same."
  npm run pre-build-ci
  ng build --aot --vendor-chunk --c "${DL_TARGET_ENV}"

else

  >&2 cat << ERRMSG
Unrecognized build invocation. This script expects either the
CODEBUILD_WEBHOOK_EVENT or DL_TARGET_ENV environment variable to be set.
ERRMSG

  exit 1
fi
