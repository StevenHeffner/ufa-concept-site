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
          return "/";
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
