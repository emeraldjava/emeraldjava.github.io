---
title: "Spring Boot -  Web Security"
modified: 2017-01-25
category:
  - dev
tags:
  - java
header:
  overlay_image: https://unsplash.it/792/269/?random
  ocerlay_filter: 0.75
  teaser: https://unsplash.it/300/400/?image=2
---

Spring Boot -  Web Security

```
public class HttpComponentsClientHttpRequestFactoryBasicAuth extends HttpComponentsClientHttpRequestFactory {

    private HttpHost host;

    public HttpComponentsClientHttpRequestFactoryBasicAuth(HttpHost host) {
        super();
        this.host = host;
    }

    protected HttpContext createHttpContext(HttpMethod httpMethod, URI uri) {
        return createHttpContext();
    }
    private HttpContext createHttpContext() {
        // Create AuthCache instance
        AuthCache authCache = new BasicAuthCache();
        // Generate BASIC scheme object and add it to the local auth cache
        BasicScheme basicAuth = new BasicScheme();
        authCache.put(host, basicAuth);

        // Add AuthCache to the execution context
        BasicHttpContext localcontext = new BasicHttpContext();
        localcontext.setAttribute(ClientContext.AUTH_CACHE, authCache);
        return localcontext;
    }
}
```

```
public class RestTemplateFactory implements FactoryBean<RestTemplate>, InitializingBean {

    private RestTemplate restTemplate;

    public RestTemplate getObject() {
        return restTemplate;
    }

    public Class<RestTemplate> getObjectType() {
        return RestTemplate.class;
    }

    public boolean isSingleton() {
        return true;
    }

    public void afterPropertiesSet() {
        HttpHost host = new HttpHost("bhaa.ie", 80, "https");
        restTemplate = new RestTemplate(
                new HttpComponentsClientHttpRequestFactoryBasicAuth(host));
    }
}
```
