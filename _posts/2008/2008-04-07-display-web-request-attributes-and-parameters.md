---
title: Display web request attributes and parameters

category: blogger
# Pulled from Blogger. Last updated there on: Mon Apr 07 12:02:00 IST 2008
---
To display the list of attributes and parameters that are linked to a http request in a jsp page.<br /><br /><pre name="code" class="java"><br />Enumeration attrEnum = request.getAttributeNames(); <br />while(attrEnum.hasMoreElements()) <br />{       <br />        Object attr = attrEnum.nextElement(); <br />        System.out.println("Attr "+(String)attr+" : "+request.getAttribute((String)attr)); <br />}<br /><br />Enumeration paramEnum = request.getParameterNames(); <br />while(paramEnum.hasMoreElements()) <br />{       <br />        Object attr = paramEnum.nextElement(); <br />        System.out.println("Param "+(String)attr+" : "+request.getParameter((String)attr)); <br />}<br /></pre>
