---
title: ANT - List all images with regex pattern
layout: post
category: blogger
# Pulled from Blogger. Last updated there on: Thu Jun 03 15:10:00 IST 2010
---
<pre class="brush: xml"> 
<br /><target name="listimages">
<br /><fileset id="dist.contents" dir="${basedir}">
<br /><exclude name="build/**"/>
<br /><exclude name="etc/automated_tests/**"/>
<br /><exclude name="tools/**"/>
<br /><exclude name="release/**"/>
<br /><exclude name="portal/**"/>
<br /><include name="**/*.gif"/>
<br /><include name="**/*.png"/>
<br /><include name="**/*.jpg"/>
<br /><include name="**/*.jpeg"/>
<br /></fileset>
<br /><pathconvert pathsep="!${line.separator}!" property="prop.dist.contents" refid="dist.contents">
<br /><chainedmapper>
<br /><mapper type="regexp" from="(.*)" to="\1,\1" />
<br /></chainedmapper>
<br /><map from="${basedir}" to="X"/>
<br /></pathconvert>
<br /><echo>${prop.dist.contents}</echo>
<br /></target>
<br /></pre>
