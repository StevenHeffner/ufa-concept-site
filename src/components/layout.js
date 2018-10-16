import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header/index'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div style = {{padding: '0px 60px', overflowY: 'scroll', display: 'flex', flexDirection: 'column'}}>
          <Header />
          <div id = 'content' style={{marginTop: '83px', zIndex: 0 }}>{children}</div>
        </div>
      </>
    )}
  />
)

export default Layout
