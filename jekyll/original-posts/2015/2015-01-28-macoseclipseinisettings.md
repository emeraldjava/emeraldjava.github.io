---
layout: default
title: mac-os-eclipse-ini-settings
categories: []
tags: [2015]
published: True

---

Finding the eclipse.ini files

http://stackoverflow.com/questions/15454889/eclipse-ini-file-not-present

sts 3.5

/Untitled/Users/pauloconnell/tools/springsource-3.5/sts-3.5.0.RELEASE/STS.app/Contents/MacOS

-startup
../../../plugins/org.eclipse.equinox.launcher_1.3.0.v20130327-1440.jar
--launcher.library
../../../plugins/org.eclipse.equinox.launcher.cocoa.macosx.x86_64_1.1.200.v20140116-2212
-product
org.springsource.sts.ide
--launcher.defaultAction
openFile
-vmargs
-XX:PermSize=256m
-Dgrails.console.enable.interactive=false
-Dgrails.console.enable.terminal=false
-Djline.terminal=jline.UnsupportedTerminal
-Dgrails.console.class=grails.build.logging.GrailsEclipseConsole
-Dosgi.requiredJavaVersion=1.6
-Xms512m
-Xmx4096m
-XX:MaxPermSize=512m
-XstartOnFirstThread
-Dorg.eclipse.swt.internal.carbon.smallFonts
-Xdock:icon=../Resources/sts.icns

STS 3.6.3

-startup
../../../plugins/org.eclipse.equinox.launcher_1.3.0.v20140415-2008.jar
--launcher.library
../../../plugins/org.eclipse.equinox.launcher.cocoa.macosx.x86_64_1.1.200.v20140603-1326
-product
org.springsource.sts.ide
--launcher.defaultAction
openFile
-vmargs
-Dosgi.requiredJavaVersion=1.6
-Xms40m
-Xmx768m
-XX:MaxPermSize=256m
-XstartOnFirstThread
-Dorg.eclipse.swt.internal.carbon.smallFonts
-Xdock:icon=../Resources/sts.icns

Updated to

-startup
../../../plugins/org.eclipse.equinox.launcher_1.3.0.v20140415-2008.jar
--launcher.library
../../../plugins/org.eclipse.equinox.launcher.cocoa.macosx.x86_64_1.1.200.v20140603-1326
-product
org.springsource.sts.ide
--launcher.defaultAction
openFile
-vmargs
-Dosgi.requiredJavaVersion=1.6
-Xss8m
-Xms700m
-Xmx2048m
-XX:MaxPermSize=512m
-XstartOnFirstThread
-Dorg.eclipse.swt.internal.carbon.smallFonts
-Xdock:icon=../Resources/sts.icns

