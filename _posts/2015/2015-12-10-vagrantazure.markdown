---

title: "vagrant-azure"
date: "2015-12-10"
---

vagrant-azure

## [phiche vagrant-azure](https://github.com/phiche/vagrant-azure-example)

### azure.mgmt_certificate
openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout cert.pem -out cert.pem

### Upload to Azure Mgmt Portal
openssl x509 -inform pem -in cert.pem -outform der -out cert.cer

### azure.ssh_certificate_file
openssl req -new -x509 -key ~/.ssh/id_rsa -out ~/.ssh/ssh-cert.pem

### azure.ssh_private_key_file
your private key typically in ~/.ssh/id_rsa

{% gist 4b430df3cd69979be138bd44716c136e789fb8ec %}

## [stapp.space](http://stapp.space/setup-vagrant-with-azure/#blog)

uses

openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ~/.ssh/azurevagrant.key -out ~/.ssh/azurevagrant.key

openssl x509 -inform pem -in ~/.ssh/azurevagrant.key -outform der -out ~/.ssh/azurevagrant.cer

### vagrant file

azure.mgmt_certificate = File.expand_path('~/.ssh/azurevagrant.key')

## [unindented.org](https://unindented.org/articles/provision-azure-boxes-with-vagrant/)

openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ~/.ssh/azurevagrant.key -out ~/.ssh/azurevagrant.key
$ openssl x509 -inform pem -in ~/.ssh/azurevagrant.key -outform der -out ~/.ssh/azurevagrant.cer

### vagrant file

config.ssh.username         = 'vagrant'
config.ssh.private_key_path = File.expand_path('~/.ssh/azurevagrant.pem')

azure.mgmt_certificate = File.expand_path('~/.ssh/azurevagrant.pem')

azure.ssh_private_key_file = File.expand_path('~/.ssh/azurevagrant.pem')
azure.ssh_certificate_file = File.expand_path('~/.ssh/azurevagrant.cer')

### RSA openssl

http://stackoverflow.com/questions/5244129/use-rsa-private-key-to-generate-public-key

https://rietta.com/blog/2012/01/27/openssl-generating-rsa-key-from-command/
