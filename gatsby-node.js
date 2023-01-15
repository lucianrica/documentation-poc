const path = require(`path`)

// Create markdown-html pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        query Markdowns {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `)

    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: `/docs/${node.frontmatter.slug}`,
            component: path.resolve(`./src/templates/MarkdownToHtml.js`),
            context: {
                slug: node.frontmatter.slug
            }
        })
    })
}
