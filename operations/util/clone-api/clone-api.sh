#!/bin/bash

if [ $# -eq 0 ]; then
  first=0
  last=200
elif [ $# -eq 1 ]; then
  first=1
  last=$1
elif [ $# -eq 2 ]; then
  first=$1
  last=$2
fi

rootDir="cloned-api-$(date +'%Y-%m-%d')"
mkdir -p "./$rootDir/resource"

printf "Cloning resources from ID $first to $last\n"
for i in $(seq $first $last); do
  targetFile="$rootDir/resource/$i.json"
  ./cdl-api /resource/$i > "$targetFile" 2>/dev/null
  if [ $? -ne 0 ]; then
    rm "$targetFile"
  else
    # <"$targetFile" jq . > temp.json && mv temp.json "$targetFile"
    resType=$(<$targetFile jq -r .type)
    title=$(<$targetFile jq -r .properties.title)
    printf "$i \t $resType ($title)\n"
  fi
done

printf "\nCreating json-server config file... "
cat \
  <(printf '{"resource":') \
  <(jq -s . $rootDir/resource/*.json) \
  <(printf '}') \
  > "$rootDir/json-server-config.json"

<"$rootDir/json-server-config.json" jq . > temp.json && \
  mv temp.json "$rootDir/json-server-config.json"

printf "Done.\n"

printf "Start the mock server with:\n\n\tjson-server \"$rootDir/json-server-config.json\"\n\n"
