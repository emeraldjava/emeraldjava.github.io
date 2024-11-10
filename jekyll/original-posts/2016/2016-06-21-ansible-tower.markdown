---
title: "Ansible Tower"
date: "2016-06-21 11:01:49 +0100"
header:
  overlay_image: https://unsplash.it/792/269/?random
  ocerlay_filter: 0.75
  teaser: https://unsplash.it/300/400/?random
---

https://support.ansible.com/hc/en-us/requests/8840

```
Enter passphrase for /tmp/ansible_tower_o9E8Xx/credential:
Identity added: /tmp/ansible_tower_o9E8Xx/credential (/tmp/ansible_tower_o9E8Xx/credential)
Using /var/lib/awx/projects/_5__r6_ansible/ansible.cfg as config file
ERROR! The file /usr/lib/python2.7/dist-packages/awx/plugins/inventory/awxrest.py is marked as executable, but failed to execute correctly. If this is not supposed to be an executable script, correct this with `chmod -x /usr/lib/python2.7/dist-packages/awx/plugins/inventory/awxrest.py`.
ERROR! Inventory script (/usr/lib/python2.7/dist-packages/awx/plugins/inventory/awxrest.py) had an execution error: 404 Client Error: Not Found
----
ERROR! /usr/lib/python2.7/dist-packages/awx/plugins/inventory/awxrest.py:35: Expected key=value host variable assignment, got: json
```

This is

```
Starting supervisor: 14:47:54@pauloconnell-HP-ZBook-15:~/Tools/ansible-tower-setup-2.4.5$ sudo ansible-tower-service restart
Restarting Tower
 * Stopping PostgreSQL 9.4 database server                                                                                                                                             [ OK ]
Stopping redis-server: redis-server.
 * Stopping web server apache2                                                                                                                                                                 *
Stopping supervisor: supervisord.
Waiting to allow supervisor time to cleanup ... pid 9643
 ... waiting.. * Starting PostgreSQL 9.4 database server                                                                                                                               [ OK ]
Starting redis-server: redis-server.
 * Starting web server apache2                                                                                                                                                                AH00548: NameVirtualHost has no effect and will be removed in the next release /etc/apache2/conf-enabled/awx-httpd-443.conf:1
 AH00548: NameVirtualHost has no effect and will be removed in the next release /etc/apache2/conf-enabled/awx-httpd-443.conf:1
```
