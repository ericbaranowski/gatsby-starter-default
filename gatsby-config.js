module.exports = {
    siteMetadata: {
        title: 'Gatsby Default Starter',
    },
    plugins: [
        `gatsby-plugin-sass`,
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: "departments-md",
                path: `${__dirname}/src/cms`,
            },
        },
        // https://www.gatsbyjs.org/blog/2017-07-19-creating-a-blog-with-gatsby/
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [] // just in case those previously mentioned remark plugins sound cool :)
            }
        },
        `gatsby-plugin-netlify-cms`
    ],
}
