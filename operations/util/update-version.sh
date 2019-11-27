#!/bin/bash
#
# Script to bump the version number, commit the change to the version file, and
# tag the new commit.

# Make sure we're working from the repository root directory
function exitIfErr() {
  if [ $? -ne 0 ]; then
    >&2 printf "$1\n"
    exit 2
  fi
}


origDir=`pwd`
rootDir=`git rev-parse --show-toplevel`
exitIfErr "Unable to find the path to the repository."
cd "$rootDir"

currentBranch=`git rev-parse --abbrev-ref HEAD`
if [ $currentBranch != "develop" ]; then
  printf "You are currently on the '${currentBranch}' branch. Is this intended (yes/no)? "
  read confirmation

  if [ $confirmation != "yes" ]; then exit 1; fi
fi

lastVersion=`jq -r .version webapp/package.json`
printf "Last version: ${lastVersion}\n"
printf "New version: "
read newVersion

printf "New version will be \"${newVersion}\". Is this correct (yes/no)? "
read confirmation

if [ $confirmation != "yes" ]; then
  printf "\n"
  $origDir/$0
  exit
fi

printf ">> Updating /webapp/package.json with \"version\": \"${newVersion}\"\n"
printf "jq \".version = \\\"${newVersion}\\\"\" webapp/package.json > temp.json\n"
jq ".version = \"${newVersion}\"" webapp/package.json > temp.json
exitIfErr "Unable to update version in package.json"
printf "mv temp.json webapp/package.json\n"
mv temp.json webapp/package.json

printf ">> Committing new version.\n"
printf "git add webapp/package.json"
git add webapp/package.json
printf "git commit -m \"Update package version to ${newVersion}\"\n"
git commit -m "Update package version to ${newVersion}"

printf ">> Tagging commit.\n"
printf "git tag -m \"Version ${newVersion}\" \"${newVersion}\"\n"
git tag -m "Version ${newVersion}" "${newVersion}"
