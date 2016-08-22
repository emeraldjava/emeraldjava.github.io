---
layout: post
title: "atom jekyll error - duplicate mapping key at line"
date: "2016-08-22 22:38:02"
---
Error when attempting to create a new jekyll post with atom 1.9.9

```
Uncaught YAMLException: duplicated mapping key at line 38, column 3: foursquare: #username ^
/Applications/Atom.app/Contents/Resources/app.asar/node_modules/roaster/node_modules/js-yaml/lib/js-yaml/loader.js:168
Hide Stack Trace
YAMLException: duplicated mapping key at line 38, column 3:
foursquare: #username ^
at generateError (/Applications/Atom.app/Contents/Resources/app.asar/node_modules/roaster/node_modules/js-yaml/lib/js-yaml/loader.js:162:10)
at throwError (/Applications/Atom.app/Contents/Resources/app.asar/node_modules/roaster/node_modules/js-yaml/lib/js-yaml/loader.js:168:9)
at storeMappingPair (/Applications/Atom.app/Contents/Resources/app.asar/node_modules/roaster/node_modules/js-yaml/lib/js-yaml/loader.js:305:7)
at readBlockMapping (/Applications/Atom.app/Contents/Resources/app.asar/node_modules/roaster/node_modules/js-yaml/lib/js-yaml/loader.js:1065:9)
at composeNode (/Applications/Atom.app/Contents/Resources/app.asar/node_modules/roaster/node_modules/js-yaml/lib/js-yaml/loader.js:1326:12)
at readBlockMapping (/Applications/Atom.app/Contents/Resources/app.asar/node_modules/roaster/node_modules/js-yaml/lib/js-yaml/loader.js:1056:11)
at composeNode (/Applications/Atom.app/Contents/Resources/app.asar/node_modules/roaster/node_modules/js-yaml/lib/js-yaml/loader.js:1326:12)
at readDocument (/Applications/Atom.app/Contents/Resources/app.asar/node_modules/roaster/node_modules/js-yaml/lib/js-yaml/loader.js:1488:3)
at loadDocuments (/Applications/Atom.app/Contents/Resources/app.asar/node_modules/roaster/node_modules/js-yaml/lib/js-yaml/loader.js:1544:5)
at load (/Applications/Atom.app/Contents/Resources/app.asar/node_modules/roaster/node_modules/js-yaml/lib/js-yaml/loader.js:1561:19)
at Object.safeLoad (/Applications/Atom.app/Contents/Resources/app.asar/node_modules/roaster/node_modules/js-yaml/lib/js-yaml/loader.js:1579:10)
at Object.module.exports.handleConfigFileOpen (/Users/pauloconnell/.atom/packages/jekyll/lib/jekyll/utils.coffee:25:40)
at /Users/pauloconnell/.atom/packages/jekyll/lib/jekyll/utils.coffee:20:21
at FSReqWrap.oncomplete (fs.js:82:15)
```

Screen shot

![atom-jekyll-error]({{ site.url}}/2016/08/22/atom-jekyll-error.png)
