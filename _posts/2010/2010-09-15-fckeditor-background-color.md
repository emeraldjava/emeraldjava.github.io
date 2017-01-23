---
title: FCKEditor background color

category: blogger
# Pulled from Blogger. Last updated there on: Wed Sep 15 17:08:00 IST 2010
---
An issue with the FCKeditor is that if you chance the background color for your main site, the editor background also changes, which makes editing a pain.<br /><br />http://www.glfusion.org/forum/viewtopic.php?showtopic=30761<br /><br />First find and edit<br /><br /><root>/public_html/fckeditor/fckconfig.js<br /><br />Originally<br /><br />FCKConfig.EditorAreaStyles = 'body { color:#000;margin-bottom:30px;} h1 {background:transparent;color:#000;font-size:1.4em;font-weight:700;margin:0 5px 0 0;} ul { list-style-position:outside;margin-left:5px;padding-left:15px;list-style:disc;vertical-align:middle;}' ;<br /><br />Change to ( background:#FFFFFF ) is the main item<br /><br />FCKConfig.EditorAreaStyles = 'body { background:#ffffff;margin-bottom:30px;} h1 {background:transparent;color:#000;font-size:1.4em;font-weight:700;margin:0 5px 0 0;} ul { list-style-position:outside;margin-left:5px;padding-left:15px;list-style:disc;vertical-align:middle;}' ;<br /><br />The drupal boys also have some notes<br /><br />http://drupal.org/node/204242
