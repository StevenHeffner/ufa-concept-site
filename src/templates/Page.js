import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const Image = styled.div`
  width: 300px;
  height: 300px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.img})
`

const customPage = ({ data }) => {
  const {
    title: { text: title_text },
    image: { url },
  } = data.allPrismicPage.edges[0].node.data

  return (
    <Layout>
      <h1>{title_text}</h1>
      <Image img={url}/>
    </Layout>
  )
}

export default customPage

export const query = graphql`
  query($uid: String) {
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
