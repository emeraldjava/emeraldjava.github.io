---
title: Maven Plugin Test Frameworks
author: emeraldjava
date: 2024-09-21T07:44:00Z
slug: 2024-09-21-Maven-Plugin-Test-Frameworks.md
tags:
  - astro
summary: 'Maven Plugin Test Frameworks'
---

## 2024-09-21

Via

package org.openapitools.codegen.plugin;

import org.apache.maven.plugin.testing.AbstractMojoTestCase;

import java.nio.file.Path;
import java.nio.file.Paths;

/**
* A base test class where we can add helper methods and whatnot
  */
  public abstract class BaseTestCase extends AbstractMojoTestCase {
  protected Path getUnitTestDir() {
  return Paths.get(getBasedir(), "src", "test", "resources", "unit");
  }
  }

see https://github.com/OpenAPITools/openapi-generator/blob/ee1cbf6f4bacd28aa8c1615e16c25bf29ad6e4e8/modules/openapi-generator-maven-plugin/src/test/java/org/openapitools/codegen/plugin/BaseTestCase.java


then

- get the test pom, use the lookupMojo and then execute.

public class CodeGenMojoTest extends BaseTestCase {
@Override
protected void setUp() throws Exception {
super.setUp();
}

    @SuppressWarnings("unchecked")
    public void testCommonConfiguration() throws Exception {
        File testPom = StubUtility.basedPath(getUnitTestDir().toFile(), "common-maven", "common-maven.xml").toFile();
        final CodeGenMojo mojo = (CodeGenMojo) lookupMojo("generate", testPom);

https://github.com/OpenAPITools/openapi-generator/blob/ee1cbf6f4bacd28aa8c1615e16c25bf29ad6e4e8/modules/openapi-generator-maven-plugin/src/test/java/org/openapitools/codegen/plugin/CodeGenMojoTest.java

the pom

        <dependency>
            <groupId>org.apache.maven.shared</groupId>
            <artifactId>maven-verifier</artifactId>
            <version>1.7.2</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.apache.maven.plugin-testing</groupId>
            <artifactId>maven-plugin-testing-harness</artifactId>
            <version>3.3.0</version>
            <scope>test</scope>
        </dependency>

via https://github.com/OpenAPITools/openapi-generator/blob/ee1cbf6f4bacd28aa8c1615e16c25bf29ad6e4e8/modules/openapi-generator-maven-plugin/pom.xml

## Frameworks

### maven-plugin-testing-harness

        <dependency>
            <groupId>org.apache.maven.plugin-testing</groupId>
            <artifactId>maven-plugin-testing-harness</artifactId>
            <version>3.3.0</version>
            <scope>test</scope>
        </dependency>

Reference
- https://maven.apache.org/plugin-developers/plugin-testing.html

### takari-plugin-testing-project

https://github.com/takari/takari-plugin-testing-project

### maven-it-extension

https://github.com/khmarbaise/maven-it-extension
https://khmarbaise.github.io/maven-it-extension/itf-documentation/usersguide/usersguide.html

References
- https://dzone.com/articles/maven-plugin-testing-in-a-modern-way-part-i