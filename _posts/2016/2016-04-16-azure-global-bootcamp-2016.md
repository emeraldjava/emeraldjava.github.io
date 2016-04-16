---
layout: post
title: "Azure Global Bootcamp 2016"
date: "2016-04-16 11:01:49 +0100"
---

Notes from the Dublin talks

# [Niall Moran](https://twitter.com/niallermoran)

- Azure batch
- Azure container - docker swarm / apache mesos clusters

New
- VM Scale sets - template with app, IP
- Reserved IP's
- Dev/Test Labs

Azure Service Fabric Cluster
- abstracted from infrastructure

Transparent Data Encryption for SQL Databases
- Row Level Security

```
http://aka.ms/AzureBootcampDublin -> https://blogs.msdn.microsoft.com/niallsblog/bootcamp2016/
```

# Aiden Casey - Building and Deploying App Services

- Web app - customer site
- Login app - order tracking (asych)
- Mobile app - customer / admin app
- API App - rest api for 3rd parties

## Kudu
Kudu is the engine behind git/hg deployments, WebJobs, and various other features in Azure Web Sites
https://github.com/projectkudu/kudu
http://getkudu.io/
kudu secret site with dev utilities - add '.scm.' to the domain name. xxx.scm.azure.net

App API
- Swagger API - http://swagger.io/
- Document REST API and generate 'out of the box' UI interface and sandbox.

Logic Apps
- linking REST APIS
- Request Bin @ requestb.in

Mobile Services App
Application Insights

Best Practice for Web Apps
- autoscale on with sticky sessions off
- back up the DB
- load test pre live
- automatic failover with global traffic manager
- auto deploy slots (4 free slots) test in prod without customers
- test site recovery
- azure resource groups (json templates)
- billing alerts
- use azure CDN for static files
- retry logic

6 month free code magazine subscription : https://www.codemag.com/subscribe/gabc16

# [Bob Duffy](https://twitter.com/bob_duffy) - Migrate SQL to the Azure Cloud

See linux.dell.com/dvdstore as a bad implementation and good example for making scaling improvements.

Non-functional requirements
- availability : green
- recoverability : green
- agility : green
- maintainability : green
- cost : orange
- scalability (scale out vs scale up) : orange
- performance : red
- reliability : red (cloud at a single node is unreliable but as a whole is scalable)

## IaaS

Blob storage is not suitable for SQL Server

SSD based storage is recommended for SQL Server DB's on azure

A lot of SQL Server is single threaded so clock speed and chip should be tuned. Use less chips to achieve greater clock speeds.

Check the Azure package IOPS value (this should be considered the bandwidth) and divide by 64 to determine the real SQL Server IOPS value.

Consider the buy or rental costs for your SQL server license.

There are differences between on-premise and cloud sql servers
- heap table types
- extended stored proc's

Elastic DB
- Uses federation/sharding
- Sharding is done with code with API provided by microsoft

Use Data Caching
- Azure cache
- Redis
- Message queue

No-SQL
- Document DB, json
- Azure Table, xml
- Cheaper for data storage

# [Vikas Sahni](https://twitter.com/search?q=sahnivi)

1 - Automate everything
- Dev/ops Learn, Develop, Deploy, Operate
- Repeatable, Reliable, Fast (4 Week cycle)

2 - Source Control
- parameterize scripts

3 - CI & CD
- Visual Studio Online (free up to 5 developer)
-
4 - Web Dev Best Practices
- Scale automatically or on schedule

5 - Enterprise Identity Integration
- active directory
- oauth

6 - Data Storage Options

7 - Data Partition Strategies

8 - Unstructured Blob Strategy

9 - Design to survive failures

10 - Monitoring and Telemetry

11 - Transient Fault Handing

12 - Distributed Caching

13 - Queues Centric Work Patterns

# Machine Learning Stuff

- https://azure.microsoft.com/en-us/documentation/articles/machine-learning-algorithm-choice/
- http://download.microsoft.com/download/A/6/1/A613E11E-8F9C-424A-B99D-65344785C288/microsoft-machine-learning-algorithm-cheat-sheet-v6.pdf
- https://studio.azureml.net/
- http://machinelearningmastery.com/mistakes-programmers-make-when-starting-in-machine-learning/
- http://machinelearningmastery.com/what-if-im-not-a-good-programmer/
- http://stackoverflow.com/questions/2620343/what-is-machine-learning
- https://blog.intercom.io/machine-learning-way-easier-than-it-looks/

## [Kaggle](https://www.kaggle.com/)

- https://www.kaggle.com/c/sf-crime/data

### Machine Learning Languages
- http://julialang.org/
- http://www.cyclismo.org/tutorial/R/

### Atom Editor Issue

Atom editor issue of the day.

```
Uncaught YAMLException: duplicated mapping key at line 38, column 3: foursquare: #username ^
/Users/pauloconnell/.atom/packages/jekyll/node_modules/js-yaml/lib/js-yaml/loader.js:168
Show Stack Trace
The error was thrown from the jekyll package. You can help by creating an issue. Please explain what actions triggered this error.
```
