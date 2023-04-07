---
title: 'openapi typescript'
tags: [supabase]
published: true
date: '2021-05-01'
---

Use 'openapi-typescript' to generate interface types from the supabase swagger spec.

https://supabase.io/blog/2021/03/31/supabase-cli

npx @manifoldco/swagger-to-ts https://your-project.supabase.co/rest/v1/?apikey=your-anon-key --output types/supabase.ts

    npx openapi-typescript https://dknnvxorlinqzsoxyvhz.supabase.co/rest/v1/?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxOTc4NTU0NiwiZXhwIjoxOTM1MzYxNTQ2fQ.Xz1M8djivXrSH4UG98eu1btGmBzMSa04-9fcDX1rZ3A --output types/supabase.ts

npx openapi-typescript <SUPABASE_URL>/rest/v1/?apikey=<SUPABASE_ANON_KEY> --output types/supabase.ts
