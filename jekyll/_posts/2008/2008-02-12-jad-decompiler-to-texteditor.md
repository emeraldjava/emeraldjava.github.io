---
title: JAD decompiler to texteditor

category: blogger
# Pulled from Blogger. Last updated there on: Tue Feb 12 08:59:00 GMT 2008
---
<br>@echo off<br>jad -debug -v -o -s java -d D:\jad\tmp %1<br>C:\tools\editplus2\editplus.exe D:\jad\tmp\%~n1.java<br> 
