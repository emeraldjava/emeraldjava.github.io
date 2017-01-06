---
layout: post
title: "angularjs 2 tutorial - Can't bind to 'hero' since it isn't a known property of 'hero-detail'"
date: "2016-08-28 12:10:02"
---

Playing with the angular js tutorial here

    https://angular.io/docs/ts/latest/guide/architecture.html

Hit this error, which I know is something to do with passing input / output parameters between the different components.

```
zone.js:461 Unhandled Promise rejection: Template parse errors:
Can't bind to 'hero' since it isn't a known property of 'hero-detail'.
1. If 'hero-detail' is an Angular component and it has 'hero' input, then verify that it is part of this module.
2. If 'hero-detail' is a Web Component then add "CUSTOM_ELEMENTS_SCHEMA" to the '@NgModule.schema' of this component to suppress this message.
 ("
</ul>
	<hero-detail *ngIf="selectedHero" [ERROR ->][hero]="selectedHero"></hero-detail>
	"): AppComponent@19:35 ; Zone: <root> ; Task: Promise.then ; Value: BaseException {message: "Template parse errors:↵Can't bind to 'hero' since …ectedHero"></hero-detail>↵	"): AppComponent@19:35", stack: "Error: Template parse errors:↵Can't bind to 'hero'…st:3000/node_modules/zone.js/dist/zone.js:356:38)"}message: "Template parse errors:↵Can't bind to 'hero' since it isn't a known property of 'hero-detail'.↵1. If 'hero-detail' is an Angular component and it has 'hero' input, then verify that it is part of this module.↵2. If 'hero-detail' is a Web Component then add "CUSTOM_ELEMENTS_SCHEMA" to the '@NgModule.schema' of this component to suppress this message.↵ ("↵</ul>↵↵	<hero-detail *ngIf="selectedHero" [ERROR ->][hero]="selectedHero"></hero-detail>↵	"): AppComponent@19:35"stack: "Error: Template parse errors:↵Can't bind to 'hero' since it isn't a known property of 'hero-detail'.↵1. If 'hero-detail' is an Angular component and it has 'hero' input, then verify that it is part of this module.↵2. If 'hero-detail' is a Web Component then add "CUSTOM_ELEMENTS_SCHEMA" to the '@NgModule.schema' of this component to suppress this message.↵ ("↵</ul>↵↵	<hero-detail *ngIf="selectedHero" [ERROR ->][hero]="selectedHero"></hero-detail>↵	"): AppComponent@19:35↵    at new BaseException (http://localhost:3000/node_modules/@angular/compiler/bundles/compiler.umd.js:5116:27)↵    at TemplateParser.parse (http://localhost:3000/node_modules/@angular/compiler/bundles/compiler.umd.js:8318:23)↵    at RuntimeCompiler._compileTemplate (http://localhost:3000/node_modules/@angular/compiler/bundles/compiler.umd.js:15941:55)↵    at eval (http://localhost:3000/node_modules/@angular/compiler/bundles/compiler.umd.js:15869:87)↵    at Set.forEach (native)↵    at compile (http://localhost:3000/node_modules/@angular/compiler/bundles/compiler.umd.js:15869:51)↵    at ZoneDelegate.invoke (http://localhost:3000/node_modules/zone.js/dist/zone.js:323:29)↵    at Zone.run (http://localhost:3000/node_modules/zone.js/dist/zone.js:216:44)↵    at http://localhost:3000/node_modules/zone.js/dist/zone.js:571:58↵    at ZoneDelegate.invokeTask (http://localhost:3000/node_modules/zone.js/dist/zone.js:356:38)"__proto__: Errorconstructor: BaseException(message)toString: ()__proto__: Objectconstructor: Error()message: ""name: "Error"toString: toString()__proto__: ObjectconsoleError @ zone.js:461_loop_1 @ zone.js:490drainMicroTaskQueue @ zone.js:494ZoneTask.invoke @ zone.js:426
```
