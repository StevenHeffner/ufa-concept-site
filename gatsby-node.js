const path = require('path')

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
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

  const pageTemplates = {
    'page': path.resolve('./src/templates/Page.js')
  }

  pages.data.allPrismicPage.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: pageTemplates[edge.node.type],
      context: {
        id: edge.node.prismicId
      }
    })
  })

}