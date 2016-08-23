---
layout: post
title: "ansible galaxy oracle java role"
date: "2016-04-04 11:30:06 +0100"
---

```
ansible-galaxy install williamyeh.oracle-java
```


/eircom/branches/eircom-master-6.6.bxx/eircom/components-eircom/om-eircom/om-workflow-eircom/src/main/config/eircomAppointmentOrderRAP
/eircom/branches/eircom-master-6.6.bxx/eircom/components-eircom/om-eircom/om-workflow-eircom/src/main/config/eircomAppointmentOrderUnregulatedNew /eircom/branches/eircom-master-6.6.bxx/eircom/components-eircom/om-eircom/om-workflow-eircom/src/main/config/eircomAppointmentOrderNew

/eircom/branches/eircom-master-6.6.bxx/eircom/components-eircom/om-eircom/om-workflow-eircom/src/main/java/com/infonova/eircom/om/workflow/EircomOrderContext.java
/eircom/branches/eircom-master-6.6.bxx/eircom/components-eircom/om-eircom/om-workflow-eircom/src/main/java/com/infonova/eircom/om/workflow/actions/appointment/SetSuppressEmailSmsContextFlagActionHandler.java
/eircom/branches/eircom-master-6.6.bxx/eircom/components-eircom/om-eircom/om-workflow-eircom/src/main/java/com/infonova/eircom/om/workflow/actions/appointment/CalculateTimerForAppointmentDateActionHandler.java
/eircom/branches/eircom-master-6.6.bxx/eircom/components-eircom/om-eircom/om-workflow-eircom/src/main/java/com/infonova/eircom/om/workflow/actions/appointment/AbstractCalculateTimeForAppointmentActionHandler.java


http://javanut.net/2016/2016/02/12/testing-gitlab-ci/
https://support.tutum.co/support/solutions/articles/5000618501-ci-cd-with-docker-containers-gitlab-runabove-tutum

VMOEZF7ELVCS

Domain Name :  mickdowlingsportsworld.com
Transfer Key: r8ahMhyXNJ

I have the following .gitlab-ci.yml file for my project

    image: maven:3-jdk-7

    build:
      script: "mvn install -B"

Which starts with the following output

    gitlab-ci-multi-runner 1.0.4 (014aa8c)
    WARNING: image is not supported by selected executor and shell
    Using Shell executor...
    Running on pauloconnell-HP-ZBook-15...
    Fetching changes...
    ....
    HEAD is now at 95ddd4f maven settings
    ....
       c8a639e..d881b78  master     -> origin/master
    Checking out 95ddd4fc as master...
    HEAD is now at 95ddd4f... maven settings
    $ mvn install -B

but then fails with error where java 8 is being used for the build

    [INFO] BUILD FAILURE
    [INFO] ------------------------------------------------------------------------
    [INFO] Total time: 10.260s
    [INFO] Finished at: Mon Apr 04 18:55:47 IST 2016
    [INFO] Final Memory: 77M/967M
    [INFO] ------------------------------------------------------------------------
    [ERROR] Failed to execute goal org.codehaus.mojo:apt-maven-plugin:1.0-alpha-5:process (default) on project om-interface-eircom: Unable to locate the apt compiler in:
    [ERROR] /usr/lib/jvm/java-8-oracle/jre/../lib/tools.jar
    [ERROR] Please ensure you are using JDK 1.5 or above and
    [ERROR] not a JRE (the com.sun.tools.apt.Main class is required).
    [ERROR] In most cases you can change the location of your Java
    [ERROR] installation by setting the JAVA_HOME environment variable.

I do have java 8 installed locally but I expected the docker image definition to control this.

Can anybody suggest how i can work around this?


pauloconnell@pauloconnell-HP-ZBook-15:/home$ sudo gitlab-runner status
gitlab-runner: Service is running!
pauloconnell@pauloconnell-HP-ZBook-15:/home$ sudo gitlab-runner list
Listing configured runners                          ConfigFile=/etc/gitlab-runner/config.toml
runner                                              Executor=shell Token=4ba3544e008e7e06041b009522d876 URL=http://10.139.11.103:8987/ci
pauloconnell@pauloconnell-HP-ZBook-15:/home$ sudo more /etc/gitlab-runner/config.toml
  concurrent = 1

  [[runners]]
    name = "runner"
    url = "http://10.139.11.103:8987/ci"
    token = "4ba3544e008e7e06041b009522d876"
    tls-ca-file = ""
    executor = "shell"
    [runners.ssh]
    [runners.docker]
      image = ""
      privileged = false
    [runners.parallels]
      base_name = ""
    [runners.virtualbox]
      base_name = ""

to

    concurrent = 1

    [[runners]]
      name = "runner"
      url = "http://10.139.11.103:8987/ci"
      token = "4ba3544e008e7e06041b009522d876"
      tls-ca-file = ""
      executor = "shell"
      shell="bash"
      environment= ["JAVA_HOME=/usr/lib/jvm/java-7-oracle/"]

and updated by .gitlab-ci.yml to

    maven-package:
      script: "mvn install -B"      
