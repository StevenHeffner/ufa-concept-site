import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const customPage = ({ data }) => {
  console.log(data.allPrismicPage.edges[0].node.data)

  const {title: {text: title_text}} = data.allPrismicPage.edges[0].node.data

  return (
    <Layout>
      <h1>{title_text}</h1>
    </Layout>
  )
}

export default customPage

export const query = graphql`
  query Prismicquery ($uid: String) {
    allPrismicPage(filter: { uid: { eq: $uid } }) {
      edges {
        node {
          prismicId
          data {
            title {
              text
            }
            description {
              text
            }
            bullet_points {
              text
            }
            image {
              url
            }
          }
        }
      }
    }
  }
`
