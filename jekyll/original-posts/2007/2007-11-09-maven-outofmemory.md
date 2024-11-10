---
title: Maven OutOfMemory

category: blogger
# Pulled from Blogger. Last updated there on: Fri Nov 09 10:42:00 GMT 2007
---
<P><FONT SIZE=2 FACE="Courier New">&nbsp;&nbsp;&nbsp; [javac] The system is out of resources.</FONT><br /><FONT SIZE=2 FACE="Courier New">&nbsp;&nbsp;&nbsp; [javac] Consult the following stack trace for details.</FONT><br /><FONT SIZE=2 FACE="Courier New">&nbsp;&nbsp;&nbsp; [javac] java.lang.OutOfMemoryError</FONT>  <BR><FONT SIZE=2 FACE="Courier New">[INFO] ------------------------------------------------------------------------</FONT>  <br /><FONT SIZE=2 FACE="Courier New">[ERROR] BUILD ERROR</FONT>  <BR><FONT SIZE=2 FACE="Courier New">[INFO] ------------------------------------------------------------------------</FONT><br /></P>  <br /><br />The solution : <span style="font-weight:bold;">MAVEN_OPTS=-Xmx512m<br /></span>
