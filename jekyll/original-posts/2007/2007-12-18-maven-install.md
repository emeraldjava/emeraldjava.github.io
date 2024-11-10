---
title: Maven Install

category: blogger
# Pulled from Blogger. Last updated there on: Tue Dec 18 11:05:00 GMT 2007
---
mvn install:install-file<br />  -Dfile=<path-to-file><br />  -DgroupId=<group-id><br />  -DartifactId=<artifact-id><br />  -Dversion=<version><br />  -Dpackaging=<packaging><br />  -DgeneratePom=true<br /><br />Where: <path-to-file>  the path to the file to load<br />       <group-id>      the group that the file should be registered under<br />       <artifact-id>   the artifact name for the file<br />       <version>       the version of the file<br />       <packaging>     the packaging of the file e.g. jar<br /><br /><br /><br /><dependency><br />  <groupId>group-a</groupId><br />  <artifactId>artifact-b</artifactId><br />  <version>1.0</version><br />  <type>bar</type><br />  <scope>runtime</scope><br /></dependency><br /><br /><br /><repo>/<groupid>/<artifactId>/<version>/<artifactId>-<version>.jar<br /><br />mvn install:install-file -Dfile=C:\dev\Libs\yfiles\2.2.1\y.jar -DgroupId=norkom -DartifactId=yfiles -Dversion=2.2.1 -Dpackaging=jar -DgeneratePom=true<br /><br />C:\dev\Libs\yfiles\2.2.1\y.jar --> C:\tools\m2\repo\norkom\yfiles\2.2.1\yfiles-2.2.1.jar
