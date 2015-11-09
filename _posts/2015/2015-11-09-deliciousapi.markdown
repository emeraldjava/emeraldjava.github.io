---
layout: post
title: "Daily delicious posts report"
date: "2015-11-09"
---

I wanted to generate a daily report of URLS that I have tagged and recorded via [delicio.us](delicio.us).

I cloned this java API for [https://github.com/danielqo/delicious-api](https://github.com/danielqo/delicious-api) and created a forked version here https://github.com/emeraldjava/delicious-api. I added a maven pom and updated the code to parse the tag details and output my most [recent delicious posts](https://github.com/SciDevs/delicious-api/tree/master/api) in a list format supported by markup.

I then setup on travis CI buid with [encrypted username and a password](http://stackoverflow.com/questions/9338428/using-secret-api-keys-on-travis-ci) details and the final step was to setup a nightly build via [https://nightli.es/](https://nightli.es/).

A unit test generates this markup

- [Docker vs Chef](https://www.scriptrock.com/articles/docker-chef?utm_source=Docker%20News&utm_campaign=778f653f1b-Docker_0_5_0_7_18_2013&utm_medium=email&utm_term=0_c0995b6e8f-778f653f1b-235731721)
- [Docker vs Vagrant? — Medium](https://medium.com/@_marcos_otero/docker-vs-vagrant-582135beb623)
- [Cooking Infrastructure by Chef](http://chef.leopard.in.ua/)
- [Creating development environments with Vagrant and Chef - DragDropSite](http://www.dragdropsite.com/tutorials/creating-development-environments-vagrant-chef/)
- [Setting up a ruby development VM with Vagrant, Chef, and rbenv](http://martinfowler.com/articles/vagrant-chef-rbenv.html)
- [What is difference between docker, puppet, chef and vagrant? - Quora](https://www.quora.com/What-is-difference-between-docker-puppet-chef-and-vagrant)
- [www.serena.com/files/2114/1512/2921/Serena-Software-Forrester_The_Seven_Habits_Of_Highly_Successful_DevOps.pdf](http://www.serena.com/files/2114/1512/2921/Serena-Software-Forrester_The_Seven_Habits_Of_Highly_Successful_DevOps.pdf)
- [networking - Can Multiple Vagrant VMs communicate by VM hostname? - Stack Overflow](http://stackoverflow.com/questions/20681190/can-multiple-vagrant-vms-communicate-by-vm-hostname)
- [oscar-stack/vagrant-hosts](https://github.com/oscar-stack/vagrant-hosts)
- [A list of base boxes for Vagrant - Vagrantbox.es](http://www.vagrantbox.es/)
- [Building a Vagrant Box from Start to Finish](https://blog.engineyard.com/2014/building-a-vagrant-box)
- [Installing Ruby 2.1.1 on Ubuntu 14.04 x86_64 : grits – the blenderbox blog](http://blog.blenderbox.com/2014/04/21/installing-ruby-2-1-1-on-ubuntu-14-04-x86_64/)
- [How to install Ruby 2 on Ubuntu without RVM - Stack Overflow](http://stackoverflow.com/questions/18490591/how-to-install-ruby-2-on-ubuntu-without-rvm)
- [git-plus](https://atom.io/packages/git-plus)
- [Pinboard API (v1) Documentation](http://pinboard.in/api/)
