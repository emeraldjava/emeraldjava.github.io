---
title: "Synology SSH Key"
date: "2017-01-28 18:34:18 +0000"
tags: ["synology"]
draft: false
published: true
---

Setting up a SSH key for synology

Router - port forward the SSH port

https://www.chainsawonatireswing.com/2012/01/15/ssh-into-your-synology-diskstation-with-ssh-keys//?from=@

http://superuser.com/questions/736055/ssh-with-no-password-passwordless-on-synology-dsm-5-as-other-non-root-user

https://www.synology.com/en-global/knowledgebase/DSM/tutorial/General/How_to_login_to_DSM_with_root_permission_via_SSH_Telnet

http://www.thegeekstuff.com/2008/11/3-steps-to-perform-ssh-login-without-password-using-ssh-keygen-ssh-copy-id

```
ssh-copy-id -i ~/.ssh/id_dsa.pub "user@host -p 6842"
```

From http://askubuntu.com/questions/224190/how-can-i-make-ssh-copy-id-use-a-port-other-than-22

docker stuff

http://www.jinkit.com/docker-on-synology/
https://www.campalus.com/enable-remote-tcp-connections-to-docker-host-running-ubuntu-15-04/


SSL Certs

https://stefandingemanse.nl/how-to-use-lets-encrypt-ssl-certificate-on-synology-dsm/

https://forums.plex.tv/discussion/200002/add-custom-ssl-certs-now-available-for-everyone-how-to

```
openssl pkcs12 -export -out archive.pfx -inkey privkey.pem -in cert.pem -certfile chain.pem
```

openssl pkcs12 -export -out emeraldjava.noip.me.pfx -inkey privkey.pem -in cert.pem -certfile chain.pem -name "emeraldjava.noip.me"

/volume1/homes/admin/.ssh/archive.pfx
ds1512
https://emeraldjava.noip.me:32400

http://wesleysinstructions.weebly.com/

https://community.letsencrypt.org/t/ssl-not-working-after-updating-letsencrypt-cert/18799/7

```
https://emeraldjava.noip.me:32400/ Unable to communicate securely with peer: requested domain name does not match the server’s certificate. HTTP Strict Transport Security: true HTTP Public Key Pinning: false Certificate chain:
```

http://stackoverflow.com/questions/21138420/openssl-fails-to-produce-a-pfx-with-a-valid-aliase

https://itigloo.com/security/how-to-configure-http-strict-transport-security-hsts-on-apache-nginx/
