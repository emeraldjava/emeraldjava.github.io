---
title: Marathon Time Progression
layout: post
category: blogger
# Pulled from Blogger. Last updated there on: Sat Dec 24 21:25:00 GMT 2011
---
<html>  <head>    <script type="text/javascript" src="https://www.google.com/jsapi"></script>    <script type="text/javascript">      google.load("visualization", "1", {packages:["corechart"]});       google.setOnLoadCallback(drawChart);       function drawChart() {         var data = new google.visualization.DataTable();         data.addColumn('string', 'Year');         data.addColumn('number', 'Time');         data.addRows([ ['Stockholm 2007',3.30], ['Zurich 2003',3.01], ['Berlin 2004',3.00], ['Rotterdam 2005',2.44], ['Zurich 2006',3.02], ['Dublin 2006',2.56], ['Cork 2007',3.00], ['Dublin 2008',3.52], ['Dublin 2009',2.57], ['Dublin 2011',2.43]         ]);          var options = {           width: 400, height: 240,           title: 'Marathon Times'         };          var chart = new google.visualization.LineChart(document.getElementById('chart_div'));         chart.draw(data, options);       }     </script>  </head>  <body>    <div id="chart_div"></div>Stockholm 2002 1/7/2002 3:30:00</br>Zurich 2003 1/5/2003 3:01:09</br>Berlin 2004 1/8/2004 3:00:00</br>Rotterdam 2005 1/4/0205 2:44:44</br>Zurich 2006 1/5/2006 3:02:20</br>Dublin 2006 31/10/2006 2:56:38</br>Cork 2007 1/6/2007 3:00:00</br>Dublin 2008 31/10/2008 3:52:53</br>Dublin 2009 31/10/2009 2:57:05</br>Dublin 2011 31/10/2011 2:43:02</br>  </body></html>