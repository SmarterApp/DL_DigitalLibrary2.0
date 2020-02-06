#!/bin/bash
#
# Script to kick off a new build based on a given version and targeting a given
# environment.

function exitIfErr() {
  if [ $? -ne 0 ]; then
    >&2 printf "$1\n"
    exit 2
  fi
}

while getopts "t:v:h" arg; do
  case $arg in
    t)
      targetEnv=${OPTARG}
      ;;
    v)
      sourceRev=${OPTARG}
      ;;
    h|*)
      cat << USAGE
Usage:
  deploy-t4t.sh -h  

      Display this usage invormation.

  deploy-t4t.sh [-t target-env] [-v source-version] 

      Deploy <source-version> to <target-env>

USAGE
      exit 0
      ;;
  esac
done

if [ -z "$targetEnv" ]; then
  printf "No environment given, defaulting to 'dev'.\n"
  targetEnv='dev'
fi

if [ -z "$sourceRev" ]; then
  printf "No source version given, defaulting to 'develop'.\n"
  sourceRev='develop'
fi

runTime=`date +'%Y-%m-%dT%H_%M_%S'`

printf "\n>> Starting a build & deploy of new version.\n"
buildJson=`aws codebuild start-build \
  --project-name "digital-library-webapp" \
  --source-version "$sourceRev" \
  --environment-variables-override "name=DL_TARGET_ENV,value=$targetEnv"`
exitIfErr "Unable to start a new build in CodeBuild."
buildId=`jq -r .build.id[23:] <<< $buildJson`

printf "Build ID: $buildId\n"
printf "Build page:\n\thttps://us-west-2.console.aws.amazon.com/codesuite/codebuild/projects/digital-library-webapp/build/digital-library-webapp%%3A${buildId}/phase?region=us-west-2#\n\n"
