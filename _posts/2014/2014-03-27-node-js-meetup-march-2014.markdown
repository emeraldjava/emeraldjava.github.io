---
layout: post
title:  "Node JS Meetup March 2014"
date:   2014-03-27 18:55:30
category: programming
---

Notes from the [www.nodejsdublin.com](http://www.nodejsdublin.com/) meeting in [https://www.engineyard.com/](Engine Yard), Barrow St, Dublin. The 

Talk 1
[Coffeescript](http://coffeescript.org/) is the first talk so lets install

    sudo npm install -g coffee-script

Talk 2
[Richard Rodger](http://www.richardrodger.com) - rkrodger @nearform.com
Micro-services and Docker

[Docker](https://www.docker.io)
Is like source control for machines. It allows you to build images for a machines. The same way github will build software for a release. It's not a virtual machine, shared memory so only one copy of the code on the machine.

redis queueing to handle the flows between processes.
sunday business post  - 8 amazon instances

micro service pattern

in   -> do stuff -> out
json -> function -> json

each process can process all messages, with nodejs you don't have to decide on the architecture in advance. there are options to reconfigure services on the fly. stanford college - were do we put the paths for students over a green area, let them them walk on the grass for a season and see where the natural paths are - build the concrete there!.

Uses [http://senecajs.org/](senecajs.org) for handling the micro-service. Uses a plugin architecture.

[Apache Kafka](http://kafka.apache.org/) is publish-subscribe messaging rethought as a distributed commit log.

See Express Web Framework

http://krakenjs.com/








