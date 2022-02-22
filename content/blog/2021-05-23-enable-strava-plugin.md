---
title: 'openapi typescript'
tags: [supabase]
published: true
date: '2021-05-01'
---

Enabling strava plugin again 

https://swas.io/blog/using-multiple-queries-on-gatsbyjs-createpages-node-api/


running two gatsby create page functions in gatby-node.js

- https://stackoverflow.com/questions/57748844/how-do-i-use-multiple-createpage-routes-in-gatsby-node-js
- https://stackoverflow.com/questions/64536170/how-to-create-multiple-page-types-dynamically-in-gatsby-node-js
- https://swas.io/blog/using-multiple-queries-on-gatsbyjs-createpages-node-api/
- https://gist.github.com/tanaypratap/c676022402d4fadbe1dad4c1b1a78c21

My .env file looks like

    STRAVA_CLIENT_ID=xxxx
    STRAVA_CLIENT_SECRET=78..78
    STRAVA_TOKEN={"access_token":"8a..b2","refresh_token":"ij..gy","expires_at":1581439030,"expires_in":21600}


## token

https://yizeng.me/2017/01/11/get-a-strava-api-access-token-with-write-permission/

generate token

STRAVA_CLIENT_ID=4945
STRAVA_CLIENT_SECRET=cd72dfedc320fd098fc2d5cf9af51c245fd9b042
STRAVA_TOKEN={"access_token":"503671acabaf6e27d8aa5ed49dbb22cd3f31748b","refresh_token":"2706dca4b78c29353ed03267c0df2f41759a0c68","expires_at":1581439030,"expires_in":21600}


1 - 

http://www.strava.com/oauth/authorize?client_id=4945&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=read_all,profile:read_all,activity:read_all

returns

http://localhost/exchange_token?state=&code=3135adf3d092a54b2c9952978757adc4dee11c07&scope=read,activity:read_all,profile:read_all,read_all

code=3135adf3d092a54b2c9952978757adc4dee11c07


2 Run CURL to

curl -X POST https://www.strava.com/oauth/token -F client_id=4945 -F client_secret=cd72dfedc320fd098fc2d5cf9af51c245fd9b042 -F code=3135adf3d092a54b2c9952978757adc4dee11c07 -F grant_type=authorization_code

{"token_type":"Bearer",
"expires_at":1621798403,"expires_in":21600,
"refresh_token":"f84937f098dc675364aed4b65acb9e66bf30924c",
"access_token":"b898fbd9ea915f5a3b34cc8876dc0c9f3bca049b",


"athlete":{"id":7035778,"username":"emeraldjava","resource_state":2,"firstname":"emerald","lastname":"java","bio":"","city":"Dublin","state":"Dublin","country":"Ireland","sex":"M","premium":true,"summit":true,"created_at":"2014-11-09T16:06:10Z","updated_at":"2021-05-23T13:03:13Z","badge_type_id":1,"weight":73.4,"profile_medium":"https://dgalywyr863hv.cloudfront.net/pictures/athletes/7035778/2122161/2/medium.jpg","profile":"https://dgalywyr863hv.cloudfront.net/pictures/athletes/7035778/2122161/2/large.jpg","friend":null,"follower":null}}%   
