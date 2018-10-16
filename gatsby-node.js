const path = require('path')
const fetch = require('apollo-fetch')

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
                                data {
                                  body {
                                    ... on PrismicPageBodyTeam {
                                      slice_type
                                      prismicId
                                      primary {
                                        team_section {
                                          text
                                        }
                                      }
                                      items {
                                        first_and_lastname {
                                          text
                                        }
                                        position {
                                          text
                                        }
                                        portrait {
                                          url
                                        }
                                      }
                                    }
                                    ... on PrismicPageBodyImageGallery {
                                      slice_type
                                      prismicId
                                      primary {
                                        name_of_the_gallery {
                                          text
                                        }
                                      }
                                      items {
                                        gallery_image {
                                          url
                                        }
                                      }
                                    }
                                    ... on PrismicPageBodyBannerWithCaption {
                                      slice_type
                                      prismicId
                                      primary {
                                        description {
                                          text
                                        }
                                        title_of_banner {
                                          text
                                        }
                                        image_banner {
                                          url
                                        }
                                        button_link {
                                          url
                                        }
                                        button_label {
                                          text
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
            let third_level_slice_data =
              thirdLevelItem.third_level_link.document[0].data.body

            createPage({
              path: `/${first_level_uid}/${second_level_uid}/${third_level_uid}`,
              component:
                pageTemplates[thirdLevelItem.third_level_link.document[0].type],
              context: {
                uid: thirdLevelItem.third_level_link.document[0].uid,
                sliceData: third_level_slice_data,
              },
            })
          })
        }
      )
    }
  )
}
