---
title: NTLM with Firefox

category: blogger
# Pulled from Blogger. Last updated there on: Tue Feb 05 14:18:00 GMT 2008
---
Here are the steps to make sure Firefox supports <a href="http://davenport.sourceforge.net/ntlm.html">NTML</a> authentication:<br><br><ul style="margin-top: 0pt; margin-bottom: 0pt;"><li>Type &quot;about:config&quot; in the address bar,</li> <li>In the Filter, type in &quot;ntlm&quot;.&nbsp; This should make the &quot;network.automatic-ntlm-auth.trusted-uris&quot; property appear,</li><li>Add &quot;.you.required.url&quot;</li></ul><br>It should allow you to use Firefox to access the service.
