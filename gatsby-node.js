const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")

// https://www.gatsbyjs.org/tutorial/part-seven/
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
      const { categories } = node.frontmatter

      const filename = createFilePath({ node, getNode, basePath: `pages` })
      // get the date and title from the file name
      const [, date, title] = filename.match(
          /^\/([\d]{4}-[\d]{2}-[\d]{2})-{1}(.+)\/$/
      )

      // create a new slug concatenating everything
      const categorySlug = 'cat';//categories.join('/')
      const dateSlug = date.replace(/-/g, '/')

      const slug = `/${categorySlug}/${dateSlug}/${title}`

      createNodeField({ node, name: `slug`, value: filename })
      // save the date for later use
      //const d = `2019-12-02`;//node.formatter.getValueFromName('date');
      //createNodeField({ node, name: `date`, value: d })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags,
              date,
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {

        const posts = result.data.allMarkdownRemark.edges
        posts.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
              // Data passed to context is available
              // in page queries as GraphQL variables.
              slug: node.fields.slug,
            },
          })
        })

        // Tag pages:
        let tags = []
        // Iterate through each post, putting all found tags into `tags`
        _.each(posts, edge => {
          if (_.get(edge, "node.frontmatter.tags")) {
            tags = tags.concat(edge.node.frontmatter.tags)
          }
        })

        // Eliminate duplicate tags
        tags = _.uniq(tags)

        // Make tag pages
        tags.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: path.resolve("src/templates/tag.js"),
            context: {
              tag,
            },
          })
        })

        const postsPerPage = 3
        const numPages = Math.ceil(posts.length / postsPerPage)

        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/` : `/${i+1}`,
            component: path.resolve("./src/templates/post-list.js"),
            context: {
              limit: postsPerPage,
              skip: i*postsPerPage, 
              numPages,
              currentPage: i+1
            }
          })
        })
    })
}
