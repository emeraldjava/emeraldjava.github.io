---
title: Adding Flickrj 1.2 to maven
layout: post
category: blogger
# Pulled from Blogger. Last updated there on: Wed Jul 28 11:56:00 IST 2010
---
First download <a href="http://flickrj.sourceforge.net/">Flickrj</a> and install locacally.<br /><br />run this command from the install dir<br /><br /><pre class="brush:html">mvn install:install-file <br />-Dfile=flickrapi-1.2.jar <br />-DgroupId=com.aetrion.flickr <br />-DartifactId=flickrapi <br />-Dversion=1.2 <br />-Dpackaging=jar<br /></pre><br />to reference the artifact in your pom add <br /><br /><pre class="brush:xml"><dependency><br /><groupid>com.aetrion.flickr</groupId><br /><artifactid>flickrapi</artifactId><br /><version>1.2</version><br /></dependency><br /></pre>
