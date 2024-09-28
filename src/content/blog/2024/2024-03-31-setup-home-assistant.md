---
title: "Home Assistant Setup"
pubDatetime: 2024-03-31T20:03:04Z
author: "emeraldjava"
featured: true
tags:
  - synology
  - homeassistant
cover: ""
description: "The perceived value of my github repo!"
slug: 2024-03-31-home-assistant
---

2024-31-03-setup-home-assistant.md

docker run -d --name=home_assistant \
-e TZ=Europe/Dublin \
-v /var/services/homes/admin/homeassistant:/config \
-v /usr/syno/etc/certificate:/certificate \
--net=host \
--restart always \
homeassistant/home-assistant

emeraldjava.synology.me:8123 

53004ede-358f-4ec1-82ad-52d311c5c321

[12:16:21.353] > [2024-03-31 12:16:21] error 

>   - find /lib/ld-musl-x86_64.so.1, which is required to run the Visual Studio Code Server in musl environments
[12:16:21.357] > 4de21bb3f979: start


## 

sudo docker run --name hass --restart=always --net=host --privileged -itd -v /volume1/homeassistant/config:/config -v /usr/syno/etc/certificate:/certificate --device /dev/ttyACM0 homeassistant/home-assistant

https://community.home-assistant.io/t/ssl-and-home-assistant-running-on-a-synology-docker/32102/4