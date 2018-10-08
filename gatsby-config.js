module.exports = {
  siteMetadata: {
    title: 'Ufa concept',
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "ufa-test-2",
        linkResolver: ({ node, key, value }) => doc => {
          // const docCopy = Object.assign({}, doc)

          // console.log(docCopy.uid)

          if (doc.uid) {
            let url = doc.uid.split('_').join('/')
            return url
          }
        },
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children
          ) => {}
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
  ],
}
