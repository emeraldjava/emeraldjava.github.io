---
title: Syntaxhighlighter 1.5.1 Blogger
layout: post
category: blogger
# Pulled from Blogger. Last updated there on: Wed Sep 24 09:58:00 IST 2008
---
I updated my blog template this morning to use the latest google <a href="http://code.google.com/p/syntaxhighlighter/">syntaxhighlighter</a> which has some extra support of xml snippets in blog posts. The only difference with other solutions is that i load the javascript directly from the google svn servers.
<br />
<br /><textarea name="code" class="xml">
<br /><!-- syntaxhighlighter config  -->
<br /><link type="text/css" rel="stylesheet" href="http://syntaxhighlighter.googlecode.com/svn/tags/1.5.1/Styles/SyntaxHighlighter.css"/>
<br /><script src='http://syntaxhighlighter.googlecode.com/svn/tags/1.5.1/Scripts/shCore.js' type='text/javascript'/>
<br /><script src='http://syntaxhighlighter.googlecode.com/svn/tags/1.5.1/Scripts/shBrushJScript.js' type='text/javascript'/>
<br /><script src='http://syntaxhighlighter.googlecode.com/svn/tags/1.5.1/Scripts/shBrushJava.js' type='text/javascript'/>
<br /><script src='http://syntaxhighlighter.googlecode.com/svn/tags/1.5.1/Scripts/shBrushXml.js' type='text/javascript'/>
<br /><script src='http://syntaxhighlighter.googlecode.com/svn/tags/1.5.1/Scripts/shBrushCss.js' type='text/javascript'/>
<br /><script src='http://syntaxhighlighter.googlecode.com/svn/tags/1.5.1/Scripts/shBrushCpp.js' type='text/javascript'/>
<br />
<br /><script type='text/javascript'>
<br />window.onload = function () {
<br />	dp.SyntaxHighlighter.ClipboardSwf = 'http://syntaxhighlighter.googlecode.com/svn/tags/1.5.1/Scripts/clipboard.swf';
<br />	dp.SyntaxHighlighter.BloggerMode();
<br />	dp.SyntaxHighlighter.HighlightAll('code');
<br />};
<br /></script>
<br /></textarea>
<br />
