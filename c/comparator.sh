#!/bin/sh


GITHUB_URL="https://raw.githubusercontent.com/azhurb/stalker_portal/master/c/"

for file in *.js
do
  echo "${file}:"
  local_sum=$( md5sum $file | cut -d ' ' -f 1 )
  remot_sum=$( curl --silent "${GITHUB_URL}/${file}" | md5sum | cut -d ' ' -f 1 )
  
  
  if [ "$local_sum" != "$remot_sum" ]; then
	echo "diff!!!"
	curl --silent "${GITHUB_URL}/${file}" > $file
  else
	echo "equal"
  fi
  
done
