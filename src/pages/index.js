import React, { Component } from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { graphql } from 'gatsby'

const BannerImg = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  height: 50%;
  width: 100%;
  top: 115px;
  left: 0px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => props.url});
`
const LargeBannerText = styled.div`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`
const SmallBannerText = styled(LargeBannerText)`
  font-size: 16px;
`

const HomePage = ({ data }) => {
  const {
    about_ufa: { text: about_text },
    cover_image: { url },
    large_banner_text: { text: large_banner_text },
    small_banner_text: { text: small_banner_text },
  } = data.allPrismicHomepage.edges[0].node.data

  return (
    <Layout>
        <BannerImg url={url} />
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  query Prismicquery {
    allPrismicHomepage {
      edges {
        node {
          id
          data {
            cover_image {
              url
            }
            large_banner_text {
              text
            }
            small_banner_text {
              text
            }
            about_ufa {
              text
            }
          }
        }
      }
    }
  }
`
