---
layout: post
title:  "Update GitHub Pages Via Travis CI And Maven Site"
date:   2014-10-29 17:00:00
categories: github, travis-ci, maven
---

I've been looking for a way to automatically update my github pages site via a maven build hosted on travis-ci. 

There is a 'com.github.github.site-maven-plugin' which supports publishing the content of the maven site to the gh-pages branch of a project.

	http://blog.akquinet.de/2012/04/12/maven-sites-reloaded/

	http://search.maven.org/#search%7Cga%7C1%7Ccom.github.github

1. Maven Site Setup 

I need to add a site.xml to my project to configurate the generated site. 
I then updated the xslt plugin to write the generated cv.html file within the 'target/site' folder.
I renamed cv.xml to index.xml so that the final html page remains the same.

2 - GitHub Oauth Token

Via the Github > Settings > Authentication admin panel i created a new Oauth token.

	https://developer.github.com/v3/oauth/

	http://blog.simplytestable.com/creating-and-using-a-github-oauth-token-with-travis-and-composer/

3 - Travis CI

I registered the 'github.global.oauth2Token' value via the Settings > Env_Vars panel of my travis-ci account.

	https://travis-ci.org/emeraldjava/emeraldjava/settings/env_vars/new

	https://github.github.com/maven-plugins/site-plugin/site-mojo.html
	
