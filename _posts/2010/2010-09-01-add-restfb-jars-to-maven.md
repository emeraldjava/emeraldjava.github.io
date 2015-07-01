---
title: Add RestFB jars to maven
layout: post
category: blogger
# Pulled from Blogger. Last updated there on: Wed Sep 01 10:09:00 IST 2010
---
First download the <a href="http://code.google.com/p/restfb/downloads/list">restfb api</a> and run the following maven command from the extracted dir. <br /><br /><pre class="brush: bash">mvn install:install-file -Dfile=restfb-1.5.3.jar <br />-DgroupId=com.restfb -DartifactId=restfb -Dversion=1.5.3 -Dpackaging=jar -DgeneratePom=true<br /></pre><br />this installs the jar in your local mvn repo, and then add the following dependency to your pom<br /><br /><pre class="brush: xml"><dependency><br />  <groupid>com.restfb</groupid><br />  <artifactid>restfb</artifactid><br />  <version>1.5.3</version><br /></dependency><br /></pre>
