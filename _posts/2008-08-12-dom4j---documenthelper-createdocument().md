---
title: Dom4j : DocumentHelper.createDocument()
layout: post
category: blogger
# Pulled from Blogger. Last updated there on: Tue Aug 12 17:37:00 IST 2008
---
Got this error from a xml file created using the Dom4j API.<br /><br /><pre name="code" class="java"><br />javax.xml.transform.TransformerException: com.sun.org.apache.xml.internal.utils.WrappedRuntimeException: The markup in the document preceding the root element must be well-formed.<br /></pre><br /><br />We were missing the xml header in the file<br /><br /><textarea name="code" class="xml"><br /><?xml version="1.0" encoding="UTF-8"?><br /></textarea><br /><br />because we didn't call the DocumentHelper.createDocument() method!<br /><br /><pre name="code" class="java"><br />import org.dom4j.Document; <br />import org.dom4j.DocumentHelper;<br /><br />Document document = DocumentHelper.createDocument();<br /></pre>
