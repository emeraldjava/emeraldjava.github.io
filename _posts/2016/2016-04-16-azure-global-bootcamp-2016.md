---
layout: post
title: "Azure Global Bootcamp 2016"
date: "2016-04-16 11:01:49 +0100"
---

Notes from the Dublin talks

{% tweet https://twitter.com/emerald007/status/721259834327191552 align='center' %}

{% twitter oembed https://twitter.com/DepressedDarth/status/683671063855759360 %}

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Looking forward to <a href="https://twitter.com/dxirl">@dxirl</a> azure bootcamp <a href="https://t.co/EFiFhO6bSB">pic.twitter.com/EFiFhO6bSB</a></p>&mdash; emerald007 (@emerald007) <a href="https://twitter.com/emerald007/status/721259834327191552">April 16, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

# Niall Moran (10am)

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



https://www.codemag.com/subscribe/gabc16

### Atom Editor Issue

Atom editor issue of the day.

```
Uncaught YAMLException: duplicated mapping key at line 38, column 3: foursquare: #username ^
/Users/pauloconnell/.atom/packages/jekyll/node_modules/js-yaml/lib/js-yaml/loader.js:168
Show Stack Trace
The error was thrown from the jekyll package. You can help by creating an issue. Please explain what actions triggered this error.
```
