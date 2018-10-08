const path = require('path')

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const pageTemplates = {
    'page': path.resolve('./src/templates/customPage.jsx')
  }

  const pages = await graphql(`
  {
    allPrismicPage {
      edges {
        node {
          uid
          prismicId
          type
        }
      }
    }
  }
  `)


  pages.data.allPrismicPage.edges.forEach((edge) => {
    let url = edge.node.uid.split('_').join('/')
    createPage({
      path: url,
      component: pageTemplates[edge.node.type],
      context: {
        uid: edge.node.uid
      }
    })
  })

}