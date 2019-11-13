---
title: "spring-boot-query"
date: "2017-03-01 11:12:50 +0000"
categories:
  - dev
tags:
  - spring-boot
header:
  overlay_image: https://unsplash.it/792/269/?random
  ocerlay_filter: 0.75
  teaser: https://unsplash.it/300/400/?image=7
---

java.lang.IllegalArgumentException: Parameter with that position [1] did not exist
	at org.hibernate.jpa.spi.BaseQueryImpl.findParameterRegistration(BaseQueryImpl.java:502) ~[hibernate-entitymanager-5.0.11.Final.jar:5.0.11.Final]
	at org.hibernate.jpa.spi.BaseQueryImpl.setParameter(BaseQueryImpl.java:692) ~[hibernate-entitymanager-5.0.11.Final.jar:5.0.11.Final]
	at org.hibernate.jpa.spi.AbstractQueryImpl.setParameter(AbstractQueryImpl.java:181) ~[hibernate-entitymanager-5.0.11.Final.jar:5.0.11.Final]
	at org.hibernate.jpa.spi.AbstractQueryImpl.setParameter(AbstractQueryImpl.java:32) ~[hibernate-entitymanager-5.0.11.Final.jar:5.0.11.Final]
	at org.springframework.data.jpa.repository.query.ParameterBinder.bind(ParameterBinder.java:140) ~[spring-data-jpa-1.11.0.RELEASE.jar:na]
	at org.springframework.data.jpa.repository.query.StringQueryParameterBinder.bind(StringQueryParameterBinder.java:61) ~[spring-data-jpa-1.11.0.RELEASE.jar:na]
	at org.springframework.data.jpa.repository.query.ParameterBinder.bind(ParameterBinder.java:100) ~[spring-data-jpa-1.11.0.RELEASE.jar:na]
	at org.springframework.data.jpa.repository.query.SpelExpressionStringQueryParameterBinder.bind(SpelExpressionStringQueryParameterBinder.java:69) ~[spring-data-jpa-1.11.0.RELEASE.jar:na]
	at org.springframework.data.jpa.repository.query.ParameterBinder.bindAndPrepare(ParameterBinder.java:160) ~[spring-data-jpa-1.11.0.RELEASE.jar:na]
	at org.springframework.data.jpa.repository.query.ParameterBinder.bindAndPrepare(ParameterBinder.java:151) ~[spring-data-jpa-1.11.0.RELEASE.jar:na]
	at org.springframework.data.jpa.repository.query.AbstractStringBasedJpaQuery.doCreateQuery(AbstractStringBasedJpaQuery.java:81) ~[spring-data-jpa-1.11.0.RELEASE.jar:na]
	at org.springframework.data.jpa.repository.query.AbstractJpaQuery.createQuery(AbstractJpaQuery.java:190) ~[spring-data-jpa-1.11.0.RELEASE.jar:na]
	at org.springframework.data.jpa.repository.query.JpaQueryExecution$CollectionExecution.doExecute(JpaQueryExecution.java:121) ~[spring-data-jpa-1.11.0.RELEASE.jar:na]
	at org.springframework.data.jpa.repository.query.JpaQueryExecution.execute(JpaQueryExecution.java:85) ~[spring-data-jpa-1.11.0.RELEASE.jar:na]
	at org.springframework.data.jpa.repository.query.AbstractJpaQuery.doExecute(AbstractJpaQuery.java:116) ~[spring-data-jpa-1.11.0.RELEASE.jar:na]


  @Query(value = "SELECT new com.be.ambassador.service.datastore.model.LeaderScore(" +
          "(SELECT fullname from beuser where id=s.user_id) as name,SUM(s.value) as total) FROM score s " +
          "WHERE date >= '?#{[0]}' GROUP BY user_id ORDER BY total desc",
          nativeQuery = true)
  List<LeaderScore> getLeaderBoard(@Param("from") @Temporal Date from);

  gives
  2017-03-09 09:46:33.941  INFO 13597 --- [nio-8080-exec-3] c.b.a.s.calculator.ScoreCalculator       : load scored between dates 2017/03/01  2017/03/06
Hibernate: SELECT new com.be.ambassador.service.datastore.model.LeaderScore((SELECT fullname from beuser where id=s.user_id) as name,SUM(s.value) as total) FROM score s WHERE date >= '?1' GROUP BY user_id ORDER BY total desc
2017-03-09 09:46:33.954  WARN 13597 --- [nio-8080-exec-3] o.h.engine.jdbc.spi.SqlExceptionHelper   : SQL Error: 0, SQLState: 42601
2017-03-09 09:46:33.954 ERROR 13597 --- [nio-8080-exec-3] o.h.engine.jdbc.spi.SqlExceptionHelper   : ERROR: syntax error at or near "."

@Query(value = "SELECT new com.be.ambassador.service.datastore.model.LeaderScoreBean(" +
        "(SELECT fullname from beuser where id=s.user_id) as name,SUM(s.value) as total) FROM score s " +
        "WHERE date >= ?#{[0]} GROUP BY user_id ORDER BY total desc",
        nativeQuery = true)
List<LeaderScore> getLeaderBoard( @Temporal(TemporalType.DATE) Date from);//@Param("from")

2017-03-09 10:09:27.496  INFO 15921 --- [nio-8080-exec-3] c.b.a.s.calculator.ScoreCalculator       : Wed Mar 01 00:00:00 GMT 2017
Hibernate: SELECT new com.be.ambassador.service.datastore.model.LeaderScoreBean((SELECT fullname from beuser where id=s.user_id) as name,SUM(s.value) as total) FROM score s WHERE date >= ? GROUP BY user_id ORDER BY total desc
2017-03-09 10:09:27.515  WARN 15921 --- [nio-8080-exec-3] o.h.engine.jdbc.spi.SqlExceptionHelper   : SQL Error: 0, SQLState: 42601
2017-03-09 10:09:27.515 ERROR 15921 --- [nio-8080-exec-3] o.h.engine.jdbc.spi.SqlExceptionHelper   : ERROR: syntax error at or near "."

@Query(value = "SELECT new com.be.ambassador.service.datastore.model.LeaderScoreBean(" +
        "(SELECT fullname from beuser where id=s.user_id) as name,SUM(s.value) as total) FROM score s " +
        "WHERE date >= '?#{[0]}' GROUP BY user_id ORDER BY total desc",
        nativeQuery = true)
List<LeaderScore> getLeaderBoard( @Temporal(TemporalType.DATE) Date from);//@Param("from")

2017-03-09 10:10:35.580  INFO 16147 --- [nio-8080-exec-3] c.b.a.s.calculator.ScoreCalculator       : Wed Mar 01 00:00:00 GMT 2017
Hibernate: SELECT new com.be.ambassador.service.datastore.model.LeaderScoreBean((SELECT fullname from beuser where id=s.user_id) as name,SUM(s.value) as total) FROM score s WHERE date >= '?1' GROUP BY user_id ORDER BY total desc
2017-03-09 10:10:35.597  WARN 16147 --- [nio-8080-exec-3] o.h.engine.jdbc.spi.SqlExceptionHelper   : SQL Error: 0, SQLState: 42601
2017-03-09 10:10:35.597 ERROR 16147 --- [nio-8080-exec-3] o.h.engine.jdbc.spi.SqlExceptionHelper   : ERROR: syntax error at or near "."
