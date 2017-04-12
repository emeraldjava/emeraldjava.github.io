---
title: Spring Boot -  database driver class for database type NONE
excerpt: "Just about everything you'll need to style in the theme: headings, paragraphs, blockquotes, tables, code blocks, and more."
modified: 2017-01-26
categories: [dev]
tags: [intro, beginner, jekyll, tutorial]
header:
  overlay_image: https://unsplash.it/792/269/?random
  ocerlay_filter: 0.75
  teaser: https://unsplash.it/300/400/?image=4
---

 ### database driver class for database type NONE

```
org.springframework.boot.autoconfigure.jdbc.DataSourceProperties$DataSourceBeanCreationException: Cannot determine embedded database driver class for database type NONE. If you want an embedded database please put a supported one on the classpath. If you have database settings to be loaded from a particular profile you may need to active it (no profiles are currently active).
	at org.springframework.boot.autoconfigure.jdbc.DataSourceProperties.determineDriverClassName(DataSourceProperties.java:245) ~[spring-boot-autoconfigure-1.4.2.RELEASE.jar:1.4.2.RELEASE]
	at org.springframework.boot.autoconfigure.jdbc.DataSourceProperties.initializeDataSourceBuilder(DataSourceProperties.java:182) ~[spring-boot-autoconfigure-1.4.2.RELEASE.jar:1.4.2.RELEASE]
	at org.springframework.boot.autoconfigure.jdbc.DataSourceConfiguration.createDataSource(DataSourceConfiguration.java:42) ~[spring-boot-autoconfigure-1.4.2.RELEASE.jar:1.4.2.RELEASE]
	at org.springframework.boot.autoconfigure.jdbc.DataSourceConfiguration$Tomcat.dataSource(DataSourceConfiguration.java:53) ~[spring-boot-autoconfigure-1.4.2.RELEASE.jar:1.4.2.RELEASE]
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[na:1.8.0_101]
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62) ~[na:1.8.0_101]
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) ~[na:1.8.0_101]
	at java.lang.reflect.Method.invoke(Method.java:498) ~[na:1.8.0_101]
	at org.springframework.beans.factory.support.SimpleInstantiationStrategy.instantiate(SimpleInstantiationStrategy.java:162) ~[spring-beans-4.3.4.RELEASE.jar:4.3.4.RELEASE]
	at org.springframework.beans.factory.support.ConstructorResolver.instantiateUsingFactoryMethod(ConstructorResolver.java:588) ~[spring-beans-4.3.4.RELEASE.jar:4.3.4.RELEASE]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.instantiateUsingFactoryMethod(AbstractAutowireCapableBeanFactory.java:1128) ~[spring-beans-4.3.4.RELEASE.jar:4.3.4.RELEASE]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1022) ~[spring-beans-4.3.4.RELEASE.jar:4.3.4.RELEASE]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:512) ~[spring-beans-4.3.4.RELEASE.jar:4.3.4.RELEASE]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:482) ~[spring-beans-4.3.4.RELEASE.jar:4.3.4.RELEASE]
	at org.springframework.beans.factory.support.AbstractBeanFactory$1.getObject(AbstractBeanFactory.java:306) ~[spring-beans-4.3.4.RELEASE.jar:4.3.4.RELEASE]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:230) ~[spring-beans-4.3.4.RELEASE.jar:4.3.4.RELEASE]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:302) ~[spring-beans-4.3.4.RELEASE.jar:4.3.4.RELEASE]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:197) ~[spring-beans-4.3.4.RELEASE.jar:4.3.4.RELEASE]
	at org.springframework.beans.factory.support.DefaultListableBeanFactory.preInstantiateSingletons(DefaultListableBeanFactory.java:754) ~[spring-beans-4.3.4.RELEASE.jar:4.3.4.RELEASE]
	at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:866) ~[spring-context-4.3.4.RELEASE.jar:4.3.4.RELEASE]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:542) ~[spring-context-4.3.4.RELEASE.jar:4.3.4.RELEASE]
	at org.springframework.boot.context.embedded.EmbeddedWebApplicationContext.refresh(EmbeddedWebApplicationContext.java:122) ~[spring-boot-1.4.2.RELEASE.jar:1.4.2.RELEASE]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:761) [spring-boot-1.4.2.RELEASE.jar:1.4.2.RELEASE]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:371) [spring-boot-1.4.2.RELEASE.jar:1.4.2.RELEASE]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:315) [spring-boot-1.4.2.RELEASE.jar:1.4.2.RELEASE]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1186) [spring-boot-1.4.2.RELEASE.jar:1.4.2.RELEASE]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1175) [spring-boot-1.4.2.RELEASE.jar:1.4.2.RELEASE]
	at ie.bhaa.registration.BhaaRegistrationApplication.main(BhaaRegistrationApplication.java:21) [classes/:na]
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[na:1.8.0_101]
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62) ~[na:1.8.0_101]
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) ~[na:1.8.0_101]
	at java.lang.reflect.Method.invoke(Method.java:498) ~[na:1.8.0_101]
	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:49) [spring-boot-devtools-1.4.2.RELEASE.jar:1.4.2.RELEASE]

2017-01-26 11:03:41.225 ERROR 3441 --- [  restartedMain] o.s.b.d.LoggingFailureAnalysisReporter   :

***************************
APPLICATION FAILED TO START
***************************

Description:

Cannot determine embedded database driver class for database type NONE
```

## fix 1

http://stackoverflow.com/questions/33709849/beancreationexception-cannot-determine-embedded-database-driver-class-for-datab

```
@EnableAutoConfiguration(exclude={DataSourceAutoConfigurati‌​on.class})
```

## Fix 2

http://stackoverflow.com/questions/24074749/spring-boot-cannot-determine-embedded-database-driver-class-for-database-type
