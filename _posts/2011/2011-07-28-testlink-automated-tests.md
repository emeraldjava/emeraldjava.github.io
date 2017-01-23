---
title: Testlink Automated Tests

category: blogger
# Pulled from Blogger. Last updated there on: Thu Jul 28 12:40:00 IST 2011
---
Looking at how to define automated test cases within the <a href="http://www.teamst.org/">TestLink</a> tool this morning so I installed v1.9.3 painlessly. As per chapter 4 of the&nbsp;<a href="http://www.kinoshita.eti.br/public_files/jenkins_testlink_book/en/">Jenkins TestLink Plug-in: The Definitive Guide</a>&nbsp;the trick is to define and assign a 'Custom Field' to record the java class name or testng suite. Since we're not using jenkins I'll probally follow the basic steps and use&nbsp;<a href="http://code.google.com/p/testlink-api-java-client/">http://code.google.com/p/testlink-api-java-client/</a>&nbsp;to pull the details from Testlink within my bamboo build.<br /><br />In the testlink/config.inc.php update the following settings to enable the API and enable test automation<br /><br /><br />/** XML-RPC API availability (disabled by default) */<br />$tlCfg-&gt;api-&gt;enabled = TRUE;<br /><br />/* [Test Executions] */<br />// ENABLED -&gt; enable XML-RPC calls to external test automation server new buttons will be displayed on execution pages<br />// DISABLED -&gt; disable<br />$tlCfg-&gt;exec_cfg-&gt;enable_test_automation = ENABLED;<br /><div><br /></div><br /><div><br /></div>
