---
title: insertClob
layout: post
category: blogger
# Pulled from Blogger. Last updated there on: Thu Oct 21 11:07:00 IST 2010
---
<pre class="brush: java">/**<br />  * http://www.coderanch.com/t/295768/JDBC/java/inserting-large-file-CLOB-Oracle<br />  * @param clob<br />  * @param value<br />  * @throws Exception<br />  */<br /> public void insertClob(oracle.sql.CLOB clob, String value) throws Exception {<br />  try {<br />   OutputStream outstream = clob.getAsciiOutputStream();<br />   outstream.flush();<br />   outstream.write(value.getBytes());<br />   outstream.close();<br />  } catch (Exception e) {<br />   e.printStackTrace();<br />  }<br /> }<br /></pre>
