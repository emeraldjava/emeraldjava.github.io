---
title: 'emeraldjava api setup'
tags: [spring, heroku]
published: true
date: '2021-04-18'
---

My setup for a java 11 spring-boot API service deployed on heroku.

# Gatsby

I'd to update this repo first since the deploy action failed with this error

    Failed to resolve action download info. Error: Unable to resolve action `JamesIves/github-pages-deploy-action@master`, unable to find version `master`
    Retrying in 20.243 seconds
    Error: Unable to resolve action `JamesIves/github-pages-deploy-action@master`, unable to find version `master`

See
- https://github.com/emeraldjava/emeraldjava.github.io/runs/2374008241?check_suite_focus=true
- https://github.com/JamesIves/github-pages-deploy-action


# sdkman

First install sdkman for managing java installs

    curl -s "https://get.sdkman.io" | bash
    source "$HOME/.sdkman/bin/sdkman-init.sh"

see https://sdkman.io/install

then install java 11

    sdk install java 11.0.10-zulu 

then install maven

    sdk install maven 3.8.1

setup springboot cli

    sdk install springboot

We have a dev env now!.
# emeraldjava-api

Use the springboot cli to create the app template

    spring init --dependencies=web emeraldjava-api
