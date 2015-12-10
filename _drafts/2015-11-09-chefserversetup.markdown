---
layout: post
title: "chef-server-setup"
date: "2015-11-09"
---

Todays experiment is to setup a Chef Server on my local machine.
From the [docs](https://docs.chef.io/release/server_12-2/install_server.html)

The first config step failed but [chef-installation-error-error-executing-action-run-on-resource](http://serverfault.com/questions/653889/chef-installation-error-error-executing-action-run-on-resource).

sudo /etc/init.d/rabbitmq-server stop


sudo chef-server-ctl reconfigure

sudo chef-server-ctl user-create paul.oconnell Paul OConnell paul.oconnell@bearingpoint.com chef2015 --filename paul.oconnell.pem

sudo chef-server-ctl org-create short_name "Bearingpoint" --association_user paul.oconnell --filename bearingpoint.pem

--filename ORGANIZATION-validator.pem

[https://www.sbarjatiya.com/notes_wiki/index.php/Chef_infrastructure_setup](https://www.sbarjatiya.com/notes_wiki/index.php/Chef_infrastructure_setup)

## use vagrant to setup new VM
```javascript
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # All Vagrant configuration is done here. The most common configuration
  # options are documented and commented below. For a complete reference,
  # please see the online documentation at vagrantup.com.

  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box = "Ubuntu14docker"

  # The url from where the 'config.vm.box' box will be fetched if it
  # doesn't already exist on the user's system.
  config.vm.box_url = "https://github.com/jose-lpa/packer-ubuntu_14.04/releases/download/v2.0/ubuntu-14.04.box"
```

### reset the root password on the vagrant box

sudo passwd -u root

add node1,2,3 to /etc/hosts

http://serverfault.com/questions/266910/bootstrap-add-node-localhost-in-chef

knife bootstrap 127.0.0.1 -x ubuntu -P noentry --sudo

knife ssh name:node1 -x ubuntu -P noentry "sudo chef-client"



knife bootstrap 127.0.0.1 --ssh-user vagrant --ssh-password 'vagrant' --sudo --use-sudo-password --node-name node1 --run-list 'recipe[learn_chef_apache2]'

knife bootstrap ADDRESS --ssh-user USER --ssh-password 'PASSWORD' --sudo --use-sudo-password --node-name node1 --run-list 'recipe[learn_chef_apache2]'

### ecitest01

alias ecitest01.app='ssh app@10.139.30.231'

knife bootstrap 10.139.30.231 --ssh-user app --ssh-password 'app' --sudo --use-sudo-password --node-name ecitest01 --run-list 'recipe[learn_chef_apache2]'
