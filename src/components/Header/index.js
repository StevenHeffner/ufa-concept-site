import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Header from './Header'

const Index = () => (
  <StaticQuery
    query={graphql`
      query {
        allPrismicMenu {
          edges {
            node {
              data {
                body {
                  items {
                    link_to_menu_item {
                      document {
                        data {
                          first_level_text
                          first_level_uid {
                            text
                          }
                          body {
                            primary {
                              link_text
                              second_level_uid
                            }
                            items {
                              _3rd_level_link_text
                              third_level_uid
                              third_level_link {
                                document {
                                  type
                                  uid
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      // console.log(data.allPrismicMenu.edges[0].node.data.body[0].items)
      return (
        <div>
          <Header data={data.allPrismicMenu.edges[0].node.data.body[0].items} />
        </div>
      )
    }}
  />
)

export default Index
