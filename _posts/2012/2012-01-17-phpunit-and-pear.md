---
title: phpunit and PEAR
layout: post
category: blogger
# Pulled from Blogger. Last updated there on: Tue Jan 17 15:30:00 GMT 2012
---
Back on the php unit tsting buzz today but when i ran 'phpunit' is got this<br /><br />&nbsp; &nbsp; assure@snapdragonubuntu:~/bhaa/zend/trunk$ phpunit     PHP Warning: &nbsp; require_once(PHP/CodeCoverage/Filter.php): failed to open stream: No such file or directory in /usr/bin/phpunit on line 38     PHP Fatal error:  require_once(): Failed opening required 'PHP/CodeCoverage/Filter.php' (include_path='.:/usr/share/php:/usr/share/pear')    in /usr/bin/phpunit on line 38&nbsp; <br /><br />The first solution is to include the php code coverage tool<br /><br />http://stackoverflow.com/questions/1528717/phpunit-require-once-error&nbsp; <br /><br />Once installed, try again but<br /><br />assure@snapdragonubuntu:~$ phpunit --help     PHP Fatal error:  Call to undefined method PHP_CodeCoverage_Filter::getInstance() in /usr/bin/phpunit on line 39<br /><br />It seems that the version of phpunit was fairly old so i followed<br /><br />http://superuser.com/questions/55055/how-to-install-an-updated-version-of-pear-phpunit-on-ubuntu<br /><br />and updated PEAR and phpunit<br /><br />assure@snapdragonubuntu:~$ pear list -c phpunit<br />Installed packages, channel pear.phpunit.de: ============================================ Package            Version State File_Iterator      1.3.1   stable PHPUnit            3.6.7   stable PHPUnit_MockObject 1.1.0   stable PHP_CodeCoverage   1.1.1   stable PHP_Invoker        1.0.1   stable PHP_Timer          1.0.2   stable PHP_TokenStream    1.1.2   stable<br /><br />I also added the phpunit to the include_php in my php.ini file