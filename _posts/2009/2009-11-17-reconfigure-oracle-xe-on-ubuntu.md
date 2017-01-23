---
title: reconfigure oracle-xe on ubuntu

category: blogger
# Pulled from Blogger. Last updated there on: Tue Nov 17 12:11:00 GMT 2009
---
To reconfigure an instance of oracle-xe on ubuntu, first edit this file<br /><br /><span style="font-style:italic;">/etc/default$ more oracle-xe </span><br /><br />change the <span style="font-weight:bold;">CONFIGURE_RUN</span> value to <span style="font-weight:bold;">false</span><br /><br /># ORACLE_DBENABLED:'true' means to load the Database at system boot.<br />ORACLE_DBENABLED=true<br /><br /># LISTENER_PORT: Database listener<br />LISTENER_PORT=1521<br /><br /># HTTP_PORT : HTTP port for Oracle Application Express<br />HTTP_PORT=8080<br /><br /># Configuration : Check whether configure has been done or not<br />CONFIGURE_RUN=true<br /><br />and then execute<br /><br /><span style="font-style:italic;">/etc/initi.d/oracle-xe configure </span>
