---
title: Installing Java JTP into Maven
layout: post
category: blogger
# Pulled from Blogger. Last updated there on: Fri Dec 07 09:31:00 GMT 2007
---
First download the <a href="http://java.sun.com/products/jta/">Java Transaction API</a><br />Classes 1.0.1B zip.<br /><br />And then run this maven command to add the zip to the local repo.<br /><br /><pre class="prettyprint"><br />mvninstall:install-file-DgroupId= javax.transaction<br>-DartifactId=jta<br>-Dversion=1.0.1B-Dpackaging=jar-Dfile=jta-1_0_1B-classes.zip <br /></pre>
