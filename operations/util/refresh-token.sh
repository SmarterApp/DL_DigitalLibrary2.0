#!/bin/bash
#
# Script to fetch a new API token from the temporary API auth endpoint, update
# the TFT configuration and kick off a new build.

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
  refresh-token -h  

      Display this usage invormation.

  refresh-token.sh [-t target-env] [-v source-version] 

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

# Make sure we're working from the repository root directory
rootDir=`git rev-parse --show-toplevel`
exitIfErr "Unable to find the path to the repository."
cd "$rootDir"

printf "\n>> Creating a temporary deploy branch from version $sourceRev\n"
branchName="deploy-token/${sourceRev}-to-${targetEnv}-${runTime}"
printf "git checkout -b \"$branchName\" \"$sourceRev\"\n"
git checkout -b "$branchName" "$sourceRev"
exitIfErr "Unable to create a new branch."


printf "\n>> Requesting a new ticket.\n"
printf "curl 'https://api-dev.dl.smarterbalanced.org/oauth/v2/token?client_id=1_sdm598elk2sw4soosgoc44sc8gsc8swkg88o0840gcs0cwk4o&client_secret=1wa315evz5wksok8wscg848kckcwsogocc4k8wc08g8k8w4k84&grant_type=client_credentials' | jq -r .access_token\n"
newToken=`curl 'https://api-dev.dl.smarterbalanced.org/oauth/v2/token?client_id=1_sdm598elk2sw4soosgoc44sc8gsc8swkg88o0840gcs0cwk4o&client_secret=1wa315evz5wksok8wscg848kckcwsogocc4k8wc08g8k8w4k84&grant_type=client_credentials' | jq -r .access_token`
exitIfErr "Unable to retrieve a new token from the CDL API."
printf "New token: ${newToken}\n"

printf "\n>> Modifying config files to use the new token.\n"
for fname in "config.json" "config.$targetEnv.json"; do
  cfgPath="webapp/src/assets/config/$fname"
  jq ".apiServer.authToken = \"${newToken}\"" "$cfgPath" > temp.json && mv temp.json "$cfgPath"
  exitIfErr "Unable to update JSON config file: $cfgPath"
  git add "$cfgPath"
  printf "Updated token in $cfgPath\n"
done

printf "\n>> Committing changes to deploy branch ($branchName).\n"
printf "git commit -m \"Refresh temporary API token for $targetEnv.\"\n"
git commit -m "Refresh temporary API token for $targetEnv."
exitIfErr "Unable to commit changes."
printf "New commit: `git rev-parse HEAD`\n"

printf "\n>> Pushing changes to the central repository.\n"
printf "git push origin \"$branchName\"\n"
git push origin "$branchName"
exitIfErr "Unable to push changes to the central repository."

printf "\n>> Starting a build & deploy of new version.\n"
buildJson=`aws codebuild start-build \
  --project-name "digital-library-webapp" \
  --source-version "$branchName" \
  --environment-variables-override "name=DL_TARGET_ENV,value=$targetEnv"`
exitIfErr "Unable to start a new build in CodeBuild."
buildId=`jq -r .build.id[23:] <<< $buildJson`

printf "Build ID: $buildId\n"
printf "Build page:\n\thttps://us-west-2.console.aws.amazon.com/codesuite/codebuild/projects/digital-library-webapp/build/digital-library-webapp%%3A${buildId}/phase?region=us-west-2#\n\n"
