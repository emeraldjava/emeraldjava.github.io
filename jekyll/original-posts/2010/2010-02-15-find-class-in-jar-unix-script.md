---
title: Find class in jar unix script

category: blogger
# Pulled from Blogger. Last updated there on: Mon Feb 15 13:44:00 GMT 2010
---
Unix script to search for a class or package name in a set of jars. Handy for debugging ClassNotFoundExceptions<br /><br /><pre name="code" class="shell"><br />#!/bin/sh<br /><br />JARDIR=$1<br />CLASS=$2<br />echo "Looking for class name `$CLASS` in directory $JARDIR"<br /><br />for i in `find $JARDIR -name "*jar"`<br />do<br />  echo "Looking in $i ..."<br />  jar tvf $i | grep $CLASS<br />done<br /></pre><br /><br />Create an alias<br /><br /><pre name="code" class="shell"><br />alias findinjars='~/poconnell/tools/scripts/findinjars.sh'<br /></pre>
