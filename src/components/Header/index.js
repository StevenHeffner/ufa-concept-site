import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Header from './Header'

const Index = () => (
  <StaticQuery
    query={graphql`
      query PrismicQuery {
        allPrismicNavigation {
          edges {
            node {
              id
              data {
                body {
                  id
                  slice_type
                  primary {
                    top_level_link_label
                  }
                  items {
                    second_level_link1 {
                      url
                    }
                    second_level_link_label
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
      <div>
        <Header data={data.allPrismicNavigation.edges[0].node.data.body} />
      </div>
    )}}
  />
)

export default Index
