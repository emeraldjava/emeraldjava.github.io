---

title: "gitlab ci runner"
date: "2016-03-24 14:02:43 +0000"
---

I got gitlab running again on my local dev machine and installed the 'gitlab-ci-multi-runner' so I can investigate the build runner options.

```bash
sudo gitlab-ci-multi-runner register
Running in system-mode.                                                                             
Please enter the gitlab-ci coordinator URL (e.g. https://gitlab.com/ci):
http://x.y.z.w:8987/ci
Please enter the gitlab-ci token for this runner:
xxxxxxxxxx
Please enter the gitlab-ci description for this runner:
runner
Please enter the gitlab-ci tags for this runner (comma separated):
dev
Registering runner... succeeded                     
Please enter the executor: virtualbox, ssh, shell, parallels, docker, docker-ssh:
shell
Runner registered successfully. Feel free to start it, but if it's running already the config should be automatically reloaded
```

One item to note is that '/ci' must be appended to your gitlabs url

> http://x.y.z:port/ci

A nice image

<figure class="third">
	<img src="http://emeraldjava.github.io/assets/images/2016/03/24/gitlab-ci-build-runner.png">
  <figcaption>Caption describing these three images.</figcaption>
</figure>

Some other URL links found today

* https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/blob/master/docs/install/linux-repository.md
* https://gitlab.com/gitlab-org/gitlab-ci-multi-runner/issues/1092
* https://about.gitlab.com/2014/09/29/gitlab-flow/
* http://stackoverflow.com/questions/18188492/what-are-the-pros-and-cons-of-git-flow-vs-github-flow
* http://stackoverflow.com/questions/18188492/what-are-the-pros-and-cons-of-git-flow-vs-github-flow
* http://scottchacon.com/2011/08/31/github-flow.html
