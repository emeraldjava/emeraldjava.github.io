# emeraldjava.github.io

**[emeraldjava.github.io](https://emeraldjava.github.io)** uses [Minimal Mistakes](http://mmistakes.github.io/minimal-mistakes) as its jekyll theme.

```
bundle exec jekyll build
bundle exec jekyll serve
bundle exec jekyll serve --verbose
bundle exec jekyll build --trace
```

http://localhost:4000/homebrew/2016/08/14/st-peters-ipa.html

https://github.com/jekyll/jekyll/issues/5163
https://github.com/mmistakes/made-mistakes-jekyll/blob/master/src/_includes/paginator.html
https://github.com/sverrirs/jekyll-paginate-v2/blob/master/README-GENERATOR.md


move to the latest version of jekyll

```
 bundle exec jekyll serve -t
Configuration file: /home/pauloconnell/projects/github/emeraldjava.github.io/_config.yml
Configuration file: /home/pauloconnell/projects/github/emeraldjava.github.io/_config.yml
            Source: /home/pauloconnell/projects/github/emeraldjava.github.io
       Destination: /home/pauloconnell/projects/github/emeraldjava.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
         AutoPages: Disabled/Not configured in site.config.
        Pagination: ----------------------------
        Pagination: Page: index.html
        Pagination:  Active configuration
        Pagination:   Enabled:          true
        Pagination:   Items per page:   15
        Pagination:   Permalink:        /page/:num/
        Pagination:   Title:            :title - Page :num of :max
        Pagination:   Limit:            0
        Pagination:   Sort by:          date
        Pagination:   Sort reverse:     true
        Pagination:  Active Filters
        Pagination:   Collection:       posts
        Pagination:   Category:         [Not set]
        Pagination:   Tag:              [Not set]
        Pagination:   Locale:           [Not set]
/var/lib/gems/2.3.0/gems/jekyll-paginate-v2-1.6.0/lib/jekyll-paginate-v2/generator/paginationIndexer.rb:30:in `block (2 levels) in index_posts_by': undefined method `downcase' for 2005:Fixnum (NoMethodError)
        from /var/lib/gems/2.3.0/gems/jekyll-paginate-v2-1.6.0/lib/jekyll-paginate-v2/generator/paginationIndexer.rb:29:in `each'
        from /var/lib/gems/2.3.0/gems/jekyll-paginate-v2-1.6.0/lib/jekyll-paginate-v2/generator/paginationIndexer.rb:29:in `block in index_posts_by'
        from /var/lib/gems/2.3.0/gems/jekyll-paginate-v2-1.6.0/lib/jekyll-paginate-v2/generator/paginationIndexer.rb:15:in `each'
        from /var/lib/gems/2.3.0/gems/jekyll-paginate-v2-1.6.0/lib/jekyll-paginate-v2/generator/paginationIndexer.rb:15:in `index_posts_by'
        from /var/lib/gems/2.3.0/gems/jekyll-paginate-v2-1.6.0/lib/jekyll-paginate-v2/generator/paginationModel.rb:61:in `block in run'
        from /var/lib/gems/2.3.0/gems/jekyll-paginate-v2-1.6.0/lib/jekyll-paginate-v2/generator/paginationModel.rb:34:in `each'
        from /var/lib/gems/2.3.0/gems/jekyll-paginate-v2-1.6.0/lib/jekyll-paginate-v2/generator/paginationModel.rb:34:in `run'
        from /var/lib/gems/2.3.0/gems/jekyll-paginate-v2-1.6.0/lib/jekyll-paginate-v2/generator/paginationGenerator.rb:129:in `generate'
        from /var/lib/gems/2.3.0/gems/jekyll-3.3.1/lib/jekyll/site.rb:174:in `block in generate'
        from /var/lib/gems/2.3.0/gems/jekyll-3.3.1/lib/jekyll/site.rb:172:in `each'
        from /var/lib/gems/2.3.0/gems/jekyll-3.3.1/lib/jekyll/site.rb:172:in `generate'
        from /var/lib/gems/2.3.0/gems/jekyll-3.3.1/lib/jekyll/site.rb:68:in `process'
        from /var/lib/gems/2.3.0/gems/jekyll-3.3.1/lib/jekyll/command.rb:26:in `process_site'
        from /var/lib/gems/2.3.0/gems/jekyll-3.3.1/lib/jekyll/commands/build.rb:63:in `build'
        from /var/lib/gems/2.3.0/gems/jekyll-3.3.1/lib/jekyll/commands/build.rb:34:in `process'
        from /var/lib/gems/2.3.0/gems/jekyll-3.3.1/lib/jekyll/commands/serve.rb:37:in `block (2 levels) in init_with_program'
        from /var/lib/gems/2.3.0/gems/mercenary-0.3.6/lib/mercenary/command.rb:220:in `block in execute'
        from /var/lib/gems/2.3.0/gems/mercenary-0.3.6/lib/mercenary/command.rb:220:in `each'
        from /var/lib/gems/2.3.0/gems/mercenary-0.3.6/lib/mercenary/command.rb:220:in `execute'
        from /var/lib/gems/2.3.0/gems/mercenary-0.3.6/lib/mercenary/program.rb:42:in `go'
        from /var/lib/gems/2.3.0/gems/mercenary-0.3.6/lib/mercenary.rb:19:in `program'
        from /var/lib/gems/2.3.0/gems/jekyll-3.3.1/exe/jekyll:13:in `<top (required)>'
        from /usr/local/bin/jekyll:23:in `load'
        from /usr/local/bin/jekyll:23:in `<main>'
```