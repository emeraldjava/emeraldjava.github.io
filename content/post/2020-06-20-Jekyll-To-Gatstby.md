---
title: 'Jekyll To Gatstby'
tags: []
published: true
date: '2020-06-20'
---

# Jekyll

Using a custom folder structure for gatsby

    exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    
    if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    const match = BLOG_POST_FILENAME_REGEX.exec(slug)
    if (match !== null) {
    const year = match[1]
    const month = match[2]
    const day = match[3]
    const filename = match[4]
    const date = new Date(year, month - 1, day)
    
          createNodeField({
            name: `slug`,
            node,
            value: `/blog/${filename}`,
          })
    
          createNodeField({
            name: `date`,
            node,
            value: date.toJSON(),
          })
        } else {
          createNodeField({
            name: `slug`,
            node,
            value: slug,
          })
        }
    }
    }

- https://www.jerriepelser.com/blog/sorting-out-gatsby-folder-structure/
- https://brandonlehr.com/gatsby/jekyll/2018/12/22/from-jekyll-to-gatsby
- https://reactgo.com/gatsby-advanced-blog-tutorial/
- https://medium.com/@cheerazar/change-blog-post-folder-name-structure-in-gatsbyjs-v2-starter-blog-49ed77b3b7d

# NPM Updater

- https://scotch.io/bar-talk/3-tools-to-keep-npm-packages-updated
