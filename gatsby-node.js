const path = require('path')

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const pageTemplates = {
    page: path.resolve('./src/templates/Page.js'),

  }

  const navData = await graphql(`
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
  `)
  navData.data.allPrismicMenu.edges[0].node.data.body[0].items.forEach(
    firstLevelItem => {
      let first_level_uid =
        firstLevelItem.link_to_menu_item.document[0].data.first_level_uid.text

      firstLevelItem.link_to_menu_item.document[0].data.body.forEach(
        secondLevelItem => {
          let second_level_uid = secondLevelItem.primary.second_level_uid

          secondLevelItem.items.forEach(thirdLevelItem => {
            let third_level_uid = thirdLevelItem.third_level_uid

            createPage({
              path: `/${first_level_uid}/${second_level_uid}/${third_level_uid}`,
              component:
                pageTemplates[thirdLevelItem.third_level_link.document[0].type],
              context: {
                uid: thirdLevelItem.third_level_link.document[0].uid,
              }
            })
          })
        }
      )
    }
  )
}
