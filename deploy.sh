#!/bin/bash

# Build image with local dockerfile and push to our docker repo
VERSION=`grep '"version"' package.json | grep -o "[0-9]\.[0-9]\.[0-9]"`

git tag $VERSION
git push --tags

docker build -t $DOCKER_REPO:$VERSION .
docker login -e $DOCKER_EMAIL -u $DOCKER_USER -p $DOCKER_PASS
docker push $DOCKER_REPO:$VERSION


# Tell ansible to fire off a job
tower-cli config host $ANSIBLE_TOWER_SERVER
tower-cli config username $ANSIBLE_TOWER_USER
tower-cli config password $ANSIBLE_TOWER_PASS

tower-cli job launch --job-template=$ANSIBLE_TOWER_JOB_TEMPLATE_ID