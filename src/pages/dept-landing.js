import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet';

const IndexPage = ({ data }) => {
    const { markdownRemark: { html, frontmatter: { title } } } = data;

    return (
        <div>
            <Helmet
                title={title}
                meta={[
                    {property: 'og:title', content: 'Home'},
                ]} />
            <h1>{title}</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <Link to="/page-2/">Go to page 2</Link>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
    );
}

export default IndexPage;

export const query = graphql`
    query DepartmentQuery($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path }}) {
            id
            html
            frontmatter {
                title
            }
        }
    }
`;


// export const pageQuery = graphql`
//   query BlogPostByPath($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//       }
//     }
//   }
// `
// ;
// export const query = graphql`
//   query BlogPostQuery($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `;
