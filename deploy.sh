#!/bin/bash

echo -n "Are you on branch master or main? [y/n]: "
read branch

if [ "$branch" = "y" ] || [ "$branch" = "Y" ]; then
    echo "Are you in the root directory of your repo? [y/n]: "
    read root

    if [ "$root" = "y" ] || [ "$root" = "Y" ]; then
        echo "Is main up to date with origin/main? [y/n]: "
        read uptodate

        if [ "$uptodate" = "y" ] || [ "$uptodate" = "Y" ]; then
            # build the current project:
            npm run build
            # change to deploy branch of project if not already there:
            git checkout deploy
            # copy files from the build folder into the root dir (on deploy branch)
            cp -R ./build/. .
            # deploy:
            git add .
            echo "Please add a commit message for deployment"
            read commitmessage
            eval "git commit -m '$commitmessage'"
            git push
        else
            echo "Make sure main us up to date with the remote before you deploy."
        fi
    else
        echo "Make sure you are in the root directory of your repo before you deploy."
    fi
else
    echo "Make sure you are on your master or main branch before you deploy."
fi
