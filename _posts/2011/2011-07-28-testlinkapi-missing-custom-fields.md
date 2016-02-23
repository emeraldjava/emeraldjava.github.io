---
title: TestLinkAPI missing custom fields
layout: post
category: blogger
# Pulled from Blogger. Last updated there on: Thu Jul 28 14:56:00 IST 2011
---
I have this sample program using the TestLinkAPI v1.9.2-2. I want to return the list of custom fields for a TestLink projects test cases.<br /><br /><pre class="brush: java; ruler: true;">package testlink;<br /><br />import br.eti.kinoshita.testlinkjavaapi.TestLinkAPI;<br />import br.eti.kinoshita.testlinkjavaapi.TestLinkAPIException;<br />import br.eti.kinoshita.testlinkjavaapi.model.TestCase;<br />import br.eti.kinoshita.testlinkjavaapi.model.TestSuite;<br />import br.eti.kinoshita.testlinkjavaapi.util.Util;<br /><br />import java.net.MalformedURLException;<br />import java.net.URL;<br /><br />/**<br /> * Hello world!<br /> *        http://testlinkjavaapi.sourceforge.net/sample1.html<br /> */<br />public class App <br />{<br />    public static void main( String[] args )<br />    {<br />        System.out.println( "Hello World!" );<br /><br />        String url = "http://xx/testlink/lib/api/xmlrpc.php";<br />        String devKey = "xx";<br />        TestLinkAPI api = null;<br /><br />        URL testlinkURL = null;<br /><br />        try<br />        {<br />                testlinkURL = new URL(url);<br />        }<br />        catch ( MalformedURLException mue )<br />        {<br />                mue.printStackTrace( System.err );<br />                System.exit(-1);<br />        }<br /><br />        try<br />        {<br />                api = new TestLinkAPI(testlinkURL, devKey);<br />        }<br />        catch( TestLinkAPIException te)<br />        {<br />                te.printStackTrace( System.err );<br />                System.exit(-1);<br />        }<br /><br />        System.out.println(api.sayHello());<br />        System.out.println(api.getTestProjectByName("xx"));<br />        TestSuite suite = api.getFirstLevelTestSuitesForTestProject(new Integer(1))[0];<br />        TestCase[] testcases = api.getTestCasesForTestSuite(suite.getId(), true, null);<br />        for(int c = 0;c<testcases.length;c++) pre="" system.out.println(testcase);="" testcase="" {="" }<="" }=""><br /></pre><br />The exported xml output from TestLink for the suite is<br /><br /><pre class="brush: xml"><testcases><br /><testcase internalid="3" name="Import Indexes"><br />	<node_order></node_order><br />	<externalid></externalid><br />	<version></version><br />	<summary></summary><br />	<preconditions></preconditions><br />	<execution_type></execution_type><br />	<importance></importance><br /><br /><custom_fields><br />	<custom_field><br />		<name></name><br />		<value></value><br />	</custom_field>	<custom_field><br />		<name></name><br />		<value></value><br />	</custom_field><br /></custom_fields></testcase><br /><br /><testcase internalid="5" name="Import Models"><br />	<node_order></node_order><br />	<externalid></externalid><br />	<version></version><br />	<summary></summary><br />	<preconditions></preconditions><br />	<execution_type></execution_type><br />	<importance></importance><br /><br /><custom_fields><br />	<custom_field><br />		<name></name><br />		<value></value><br />	</custom_field>	<custom_field><br />		<name></name><br />		<value></value><br />	</custom_field><br /></custom_fields></testcase><br /></testcases><br /></pre>But the program output is<br /><br /><pre class="brush: bash">Hello!<br />TestProject [id=1, name=Touchpoint, prefix=TP, notes=, enableRequirements=true, enableTestPriority=true, enableAutomation=true, enableInventory=true, isActive=true, isPublic=true]<br />Install<br />TestCase [id=3, name=Import Indexes, testSuiteId=null, testProjectId=null, authorLogin=null, summary=null, steps=[], preconditions=null, testImportance=null, executionType=null, order=100, internalId=null, checkDuplicatedName=null, actionOnDuplicatedName=null, versionId=2, version=null, parentId=2, customFields=[], executionStatus=n]<br />n<br />[]<br />TestCase [id=5, name=Import Models, testSuiteId=null, testProjectId=null, authorLogin=null, summary=null, steps=[], preconditions=null, testImportance=null, executionType=null, order=101, internalId=null, checkDuplicatedName=null, actionOnDuplicatedName=null, versionId=2, version=null, parentId=2, customFields=[], executionStatus=n]<br />n<br /></pre>There are no Custom Fields listed.  </testcases.length;c++)></pre>