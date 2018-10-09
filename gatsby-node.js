const path = require('path')

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const pageTemplates = {
    'page': path.resolve('./src/templates/customPage.jsx')
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
                      body {
                        primary {
                          link_text
                        }
                        items {
                          _3rd_level_link_text
                          third_level_uid
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


  // pages.data.allPrismicPage.edges.forEach((edge) => {
  //   let url = edge.node.uid.split('_').join('/')
  //   createPage({
  //     path: url,
  //     component: pageTemplates[edge.node.type],
  //     context: {
  //       uid: edge.node.uid
  //     }
  //   })
  // })
  
  navData.data.allPrismicMenu.edges[0].node.data.body[0].items.forEach(item => {
    let firstLevelLabel = item.link_to_menu_item.document[0].data.first_level_text
    let secondLevelLabel = item.link_to_menu_item.document[0].data.body[0].primary.link_text
    createPage({
      path: `/${firstLevelLabel}/${secondLevelLabel}/:id`,
      //////THIS WILL NEED TO CHANGE//////////////////////
      component: path.resolve('./src/templates/customPage.jsx')
      })
    item.link_to_menu_item.document[0].data.body[0].items.forEach(item => {
    //   let thirdLevelLabel = item.third_level_uid
    //   createPage({
    //     path: `/${firstLevelLabel}/${secondLevelLabel}/${thirdLevelLabel}`,
    //     component: 
    //   })
    })
    
  })


}