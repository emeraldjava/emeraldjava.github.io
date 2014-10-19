---
layout: post
title:  "MAMP PRO Apache Yosemite"
date:   2014-10-19 12:54:00
categories: mamp
---

Upgraded to Yosemite last night and had to appy this fix to enable my MAMP Apache

http://stackoverflow.com/questions/25139599/mamp-pro-3-05-on-mavericks-updated-to-yosemite-apache-does-not-start

Also had to install a java jdk, so am upgrading to v8 atm.

Just making a note of the soft links for my php plugins

{% highlight bash %}
ln -s /Users/pauloconnell/projects/wordpress/enfold /Users/pauloconnell/projects/MAMP/bhaaie/wp-content/themes/enfold

ln -s /Users/pauloconnell/projects/github/bhaawp-enfold-child /Users/pauloconnell/projects/MAMP/bhaaie/wp-content/themes/bhaawp-enfold-child

-- plugins
ln -s /Users/pauloconnell/projects/bhaawp /Users/pauloconnell/projects/MAMP/bhaaie/wp-content/plugins/bhaawp

ln -s /Users/pauloconnell/projects/github/wp-php-flickr /Users/pauloconnell/projects/MAMP/bhaaie/wp-content/plugins/wp-php-flickr
{% endhighlight %}