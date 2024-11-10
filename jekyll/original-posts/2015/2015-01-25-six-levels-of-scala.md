---

title: Six Levels of Scala
category: programming
tags: [scala,2015]
published: True
date: 2015-01-25 18:32:56
---

This document describes [6 levels of scala skills](http://www.scala-lang.org/old/node/8610) that developers can be ranked on. I'm going to use this [emeraldjava-scala-six-steps](https://github.com/emeraldjava/emeraldjava-scala-six-steps) github project to track various scripts and implementation examples as i attempt to educate myself about scala.

# Level A1: Beginning application programmer
+ Java-like statements and expressions: standard operators, method calls, conditionals, loops, try/catch
+ Class, object, def, val, var, import, package
+ Infix notation for method calls
+ Simple closures
+ Collections with map, filter, etc
+ for-expressions

# Level A2: Intermediate application programmer
+ Pattern matching
+ Trait composition
+ Recursion, in particular tail recursion
+ XML literals

# Level A3: Expert application programmer
+ Folds, i.e. methods such as foldLeft, foldRight
+ Streams and other lazy data structures
+ Actors
+ Combinator parsers

# Level L1: Junior library designer
+ Type parameters
+ Traits
+ Lazy vals
+ Control abstraction, currying
+ By-name parameters

# Level L2: Senior library designer
+ Variance annotations
+ Existential types (e.g., to interface with Java wildcards)
+ Self type annotations and the cake pattern for dependency injection
+ Structural types (aka static duck typing)
+ Defining map/flatmap/withFilter for new kinds of for-expressions
+ Extractors

# Level L3: Expert library designer
+ Early initializers
+ Abstract types
+ Implicit definitions
+ Higher-kinded types

Some useful resources
[https://twitter.github.io/scala_school](https://twitter.github.io/scala_school/)
[Scala Tutorial Android App](https://play.google.com/store/apps/details?id=com.tb.scala&hl=en)
