#!/bin/bash

echo -n "Are you on branch master or main? [y/n]: "
read branch

if [ "$branch" = "y" ] || [ "$branch" = "Y" ]; then
    echo -n "Is main up to date with origin/main? [y/n]: "
    read uptodate

    if [ "$uptodate" = "y" ] || [ "$uptodate" = "Y" ]; then
        # build the current project:
        npm run build
        # change to deploy branch of project if not already there:
        git checkout deploy
        # copy files from the build folder into the root dir (on deploy branch)
        cp -a /build/. .
    else
        echo "Make sure main us up to date with the remote before you deploy."
    fi
else
    echo "Make sure you are on your master or main branch before you deploy."
fi
