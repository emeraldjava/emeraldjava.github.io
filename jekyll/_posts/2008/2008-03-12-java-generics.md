---

title: Java Generics

category: blogger
# Pulled from Blogger. Last updated there on: Wed Mar 12 12:57:00 GMT 2008
---
I think the <a href="http://objectmentor.com/resources/articles/The_Craftsman_44__Brown_Bag_I.pdf">The Craftsman 44: Java Generics 2</a> gives the best exaplaination on when to use extends or super when defining Generics.<br /><br />Basically use <br /><br />you can widen the type of a list by using ? extends X, only if you <br />plan on reading from that list<br /><br />and<br /><br />If you plan on writing to that list, use <? super X>
