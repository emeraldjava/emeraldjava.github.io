---
title: 'Supabase Starter'
tags: [supabase dev]
published: true
date: '2021-04-30'
---

Started looking [supabase.io](https://supabase.io) to get access to a Postgres DB as a service and play with their javascript UI client.

| ![supabase](./content/blog/2021-04-30.supabase.png) |
| ------ |

See https://github.com/AlanLyttonJones/Age-Grade-Tables

## Carbon

See carbon.now.sh

blob:https://carbon.now.sh/72027f28-1ae5-48c5-ba73-cb130ceca298

## Upgrading Gatsby

https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/
https://github.com/gatsbyjs/gatsby-starter-default

    npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem gatsby-transformer-sharp

From https://letscodepare.com/blog/npm-resolving-eacces-permissions-denied run commands

    sudo chown -R $(whoami) ~/.npm
    sudo chown -R $(whoami) /usr/local/lib/node_modules/

https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog/