---
title: 'Updating CV to use Kiss My Resume'
tags: []
published: true
date: '2020-08-18'
---

I've have hosted my CV for the past two years via github hosted repo using the [hackmyresume](https://github.com/hacksalot/HackMyResume) tool to generate a HTML and PDF version from a json
file following the FRESH schema.

With recent version updates the hackmyresume system seems to have stopped creating output!.

A quick search directed me to [KissMyResume](https://github.com/karlitos/KissMyResume) which does simular tasks. I had to manually convert my existing resume content
 to the [jsonresume.org](https://jsonresume.org/) schema which has wider support [themes](https://jsonresume.org/themes/) and I
 decided to the use the [rocketspacer](https://www.npmjs.com/package/jsonresume-theme-rocketspacer) theme.

A quick update the build command and a tweak to the Github Action and i have a new version of my CV is now published @ http://emeraldjava.github.io/emeraldjava.




