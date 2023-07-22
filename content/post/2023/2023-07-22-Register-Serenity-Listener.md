+++
title = "Register Serenity Listener"
date = 2023-07-22T20:03:04+01:00
author = "emeraldjava"
keywords = ["serenity", "java"]
cover = ""
summary = "Remember the META-INF config for Service Locators"
+++

# Step 1 - Create the Listener

Create a new class which will be the custom listener, eg. MyCustomListener this class must implement StepListener (from the package net.thucidydes.core.steps) and implement all necessary methods and adjust to you own needs.

# Step 2 - Regster the Service Locator

1 In the resources folder of the project you are using create a directory META-INF folder
2. Add a file called 'net.thucydides.core.steps.StepListener'
3. Add the Listener class name as the file content.

    /META-INF/net.thucydides.core.steps.StepListener
        - a.b.c.MyCustomListener

This allows the ServiceLocator to find and inject the Listener.