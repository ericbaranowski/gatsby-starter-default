import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header/header'
import Footer from '../components/footer/Footer'
import Pager from '../components/navigation/Pager';
// import './index.css'
import "../styles/main.scss";

const Layout = ({ children, data }) => {
    const { allMarkdownRemark: { edges } } = data;

    return (
      <div>

        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <div className="lines-bg">
            <div className="v-lines">
                <div className="v-lines__outer"></div>
                <div className="v-lines__inner_xxxxxxx"></div>
            </div>
        </div>
        <Header siteTitle={data.site.siteMetadata.title} categories={edges} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1140,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children()}
        </div>
        <Footer />


        <Pager />
      </div>
    );
};

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              path
              linkText
          	}
          }
        }
      }
  }
`
