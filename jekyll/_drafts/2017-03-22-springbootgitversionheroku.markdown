---
title: "spring-boot-git-version-heroku"
date: "2017-03-22 11:12:50 +0000"
category:
  - dev
tags:
  - spring-boot
  - heroku
header:
  overlay_image: https://unsplash.it/792/269/?random
  ocerlay_filter: 0.75
  teaser: https://unsplash.it/300/400/?image=8
---

# spring-boot

http://www.baeldung.com/spring-git-information

https://www.petrikainulainen.net/programming/spring-framework/spring-from-the-trenches-returning-git-commit-information-as-json/

## old way

https://blog.codecentric.de/en/2016/01/how-to-add-a-github-commit-link-to-a-web-application/
http://www.mojohaus.org/buildnumber-maven-plugin/usage.html

## GitProperties

```
management.info.git.mode=full
```

http://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-endpoints.html

### maven plugins to create git.properties

1 git-commit-id-plugin
2 https://plugins.gradle.org/plugin/com.gorylenko.gradle-git-properties

use
# Heroku

http://stackoverflow.com/questions/14583282/heroku-display-hash-of-current-commit

http://stackoverflow.com/questions/2281772/how-to-view-remote-git-revision-on-heroku

http://stackoverflow.com/questions/18406721/heroku-does-not-appear-to-be-a-git-repository

## dyno-metadata

https://devcenter.heroku.com/articles/dyno-metadata

```
HEROKU_APP_ID:                   9daa2797-e49b-4624-932f-ec3f9688e3da
HEROKU_APP_NAME:                 example-app
HEROKU_DYNO_ID:                  1vac4117-c29f-4312-521e-ba4d8638c1ac
HEROKU_RELEASE_CREATED_AT:       2015-04-02T18:00:42Z
HEROKU_RELEASE_VERSION:          v42
HEROKU_SLUG_COMMIT:              2c3a0b24069af49b3de35b8e8c26765c1dba9ff0
HEROKU_SLUG_DESCRIPTION:         Deploy 2c3a0b2
```

## SOURCE_VERSION - https://devcenter.heroku.com/changelog-items/630

- https://github.com/sreid/heroku-buildpack-sourceversion

maven plugin to Deploy
https://github.com/heroku/heroku-maven-plugin
