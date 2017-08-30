#!/bin/bash -x

# Export github credentials
export GIT_SSH_COMMAND='ssh -i ./uptime_github_deploy_key'
chmod 0600 ./uptime_github_deploy_key

# Setup github ID
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"
git remote add origin-ssh git@github.com:krotscheck/uptime.rum.git

# Curl the latest.
curl https://uptime.com/static/rum/compiled/rum.js > ./rum.js

git diff-index --quiet HEAD --

if [ $? -ne 0 ]
then
    git add .
    npm version -f minor
    git push origin-ssh HEAD:master
    git push origin-ssh --tags
else
    echo "No changes required, exiting."
fi
