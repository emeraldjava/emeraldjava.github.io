---
title: Oracle XE and Ubuntu

category: blogger
# Pulled from Blogger. Last updated there on: Tue Nov 17 09:40:00 GMT 2009
---
Edit /etc/apt/sources.list, and add following:<br /><br />deb http://oss.oracle.com/debian unstable main non-free<br /><br />then execute<br /><br />aptitude install oracle-xe oracle-xe-client<br /><br />to install oracle. finally run<br /><br />/etc/init.d/oracle-xe configure<br /><br />The DB by default will be accessed via port 1521. Administration is performed through localhost:8080/apex.
