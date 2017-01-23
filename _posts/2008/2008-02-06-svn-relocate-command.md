---
title: SVN relocate command

category: blogger
# Pulled from Blogger. Last updated there on: Wed Feb 06 09:20:00 GMT 2008
---
set SVN_PATH=%1<br>echo Running SVN switch on project %SVN_PATH% ...<br>svn switch --relocate svn://proddev02/%SVN_PATH% <a href="http://proddev-svn/svn/xxxx/%SVN_PATH%">http://proddev-svn/svn/xxxx/%SVN_PATH%</a> --username xxxx --password xxxx --non-interactive<br> <br> 
