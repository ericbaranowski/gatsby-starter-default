/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it



const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators;

    const departmentsTemplate = path.resolve(`src/pages/dept-landing.js`);
    const headerTemplate = path.resolve(`src/components/header/header.js`);

    return graphql(`{
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
        ) {
            edges {
            node {
                frontmatter {
                    path
                }
            }
          }
        }
      }`
    )
    .then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        result.data.allMarkdownRemark.edges
            .forEach(({ node }) => {
                console.log(node);
                console.log(node.frontmatter.path);
                createPage({
                    path: node.frontmatter.path,
                    component: departmentsTemplate,
                    context: {} // additional data can be passed via context
                });
            });
    });
};

// exports.createLayouts = ({ graphql, boundActionCreators }) => {
//     const { createLayout } = boundActionCreators;
//
//
//  boundActionCreators.createLayout({
//    component: path.resolve(`src/templates/custom-layout.js`),
//    id: 'custom', // optional - if not provided the filename will be used as id
//   })
//  }
