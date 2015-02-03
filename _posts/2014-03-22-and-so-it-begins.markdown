---
layout: post
title:  "And-so-the-github-jekyll-blog-begins"
date:   2014-03-22 13:24:30
category: general
---

It's taken a while to get ruby and jekyll installed but hopefully we're up and running now.

For running jekyll locally i'm executing

{% highlight console %}
jekyll serve --watch --baseurl ''
{% endhighlight %}

If you don't shutdown the jekyll process correct you'll have to identify and kill the process with the commands below.

{% highlight console %}
[13:46:44@emeraldjava.github.io]$ lsof -wni tcp:4000
{% endhighlight %}

Displays

{% highlight console linenos %}
COMMAND  PID         USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
ruby    1058 pauloconnell   14u  IPv4 0x9167574b623a7c87      0t0  TCP *:terabase (LISTEN)
ruby    1058 pauloconnell   16u  IPv4 0x9167574b5c8c3c87      0t0  TCP 127.0.0.1:terabase->127
{% endhighlight %}

https://github.com/erjjones/erjjones.github.com
http://24ways.org/2013/get-started-with-github-pages/
