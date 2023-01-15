/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `website`,
        siteUrl: `http://localhost:8000/`,
        copyright: '2023',
        description: 'docs website',
        email: 'me@email.com'
    },
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/icon.png"
            }
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        }, {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `notes`,
                path: `./src/notes/`,
            },
            __key: "notes"
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-highlight-code`,
                        options: {
                            terminal: "carbon",
                            theme: "one-dark",
                            editable: false,
                            lineNumbers: true
                        }
                    },
                ],
            },
        }
    ]
};