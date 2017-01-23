---
title: Dom4j DocumentHelper.createDocument()

category: blogger
---

Pulled from Blogger. Last updated there on: Tue Aug 12 17:37:00 IST 2008

Got this error from a xml file created using the Dom4j API.

{% highlight java %}
javax.xml.transform.TransformerException: com.sun.org.apache.xml.internal.utils.WrappedRuntimeException: 
The markup in the document preceding the root element must be well-formed.{% endhighlight %}

We were missing the xml header in the file because we didn't call the DocumentHelper.createDocument() method!

{% highlight java %}
import org.dom4j.Document; 
import org.dom4j.DocumentHelper;
...
Document document = DocumentHelper.createDocument();
{% endhighlight %}
