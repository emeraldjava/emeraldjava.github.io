---
title: Cargo Jboss42x ANT

category: blogger
# Pulled from Blogger. Last updated there on: Tue Dec 02 11:25:00 GMT 2008
---
Getting the following error when i attempt to use an ANT target to start a locally installed jboss 4.2.3 via the cargo jboss42x containter.<br /><br /><pre name="code" class="java"><br />C:\projects\5FL_GERMANY\ValidationService>ant -f cargo.xml jboss-start<br />Buildfile: cargo.xml<br /><br />jboss-start:<br />     [echo] ./../../Libs/jboss-4.2.3.GA<br />     [echo] ./../../Libs/cargo/0.9/cargo-core-uberjar-0.9.jar<br /><br />BUILD FAILED<br />C:\projects\5FL_GERMANY\ValidationService\cargo.xml:28: org.codehaus.cargo.conta<br />iner.ContainerException: Cannot create configuration. There's no registered conf<br />iguration for the parameters (container [id = [jboss42x], type = [installed]], c<br />onfiguration type [existing]). Actually there are no valid types registered for<br />this configuration. Maybe you've made a mistake spelling it?<br /></pre>
