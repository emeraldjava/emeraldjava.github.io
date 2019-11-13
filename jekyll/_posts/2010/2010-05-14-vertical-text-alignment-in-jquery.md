---
title: Vertical Text Alignment in JQuery

category: blogger
# Pulled from Blogger. Last updated there on: Fri May 14 12:35:00 IST 2010
---
http://stackoverflow.com/questions/278940/vertical-text-with-jquery<br /><br /><br />$('#foo label').html($('#foo label').text().replace(/(.)/g,"$1<br />"));<br /><br />Works for a single element but <br /><br /><br />http://www.openstudio.fr/jQuery-flipv.html<br /><br /><br />http://pupunzi.com/#mb.components/mb.flipText/flipText.html<br /><br />renders SVG which causes hassel<br /><br /><br />        ->addOnLoad('$("#eventname").flipv();')<br />        //->addOnLoad('$("#eventname").mbFlipText(true);') // top to bottom<br />        //->addOnLoad('$("#foo label").html($("#foo label").text().replace(/(.)/g,"$1<br/>"));')
