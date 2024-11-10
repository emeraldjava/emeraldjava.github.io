---

title:  "Bower Settings"
date:   2014-09-01 13:19:00
category: programming
---
I started reading up on [AngularJS](https://docs.angularjs.org/tutorial) this morning but ran into trouble with the installing. I had to add the following 
'proxy' and 'https-proxy' settings to the '.bowerrc' file in the root folder.

{% highlight ruby %}
{
  "directory": "library",
  "registry": "http://bower.herokuapp.com",
  "proxy":"http://<USERNAME>:<PASSWORD>@<PROXY_IP>:<PROXY_PORT>/",
  "https-proxy":"http://<USERNAME>:<PASSWORD>@<PROXY_IP>:<PROXY_PORT>/",
}
{% endhighlight %}