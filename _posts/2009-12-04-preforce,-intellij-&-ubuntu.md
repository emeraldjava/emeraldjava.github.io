---
title: Preforce, Intellij & Ubuntu
layout: post
category: blogger
# Pulled from Blogger. Last updated there on: Fri Dec 04 16:28:00 GMT 2009
---
If your running intellij on ubuntu, you make need to make sure this preforce settings are configured within the root user setup scripts, add them to /etc/profile.d/global.sh<br /><br />user@foundry:~$ more /etc/profile.d/global.sh <br /><br />export P4USER=$USER<br />export P4CHARSET=utf8<br />export P4CLIENT=`hostname`<br />export P4PORT=perforce.newbay.com:1666
