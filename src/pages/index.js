import React from 'react'
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
  top: 85px;
  left: 0px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${props => props.url});
  z-index: -1;
  padding: 116px 60px 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

`
const LargeBannerText = styled.div`
  color: #ffffff;
  font-size: 35px;
  font-weight: bold;
  width: 450px;
  line-height: 44px;
`
const SmallBannerText = styled(LargeBannerText)`
  font-size: 18px;
  width: 500px
`

const HomePage = ({ data }) => {
  const {
    // about_ufa: { text: about_text },
    cover_image: { url },
    large_banner_text: { text: large_banner_text },
    small_banner_text: { text: small_banner_text },
  } = data.allPrismicHomepage.edges[0].node.data

  return (
    <Layout>
        <BannerImg url={url}>
          <div style={{color: '#ffffff'}}>UFA</div>
          <LargeBannerText>
            {large_banner_text}
          </LargeBannerText>
          <SmallBannerText>
            {small_banner_text}
          </SmallBannerText>
        </BannerImg>

    </Layout>
  )
}

export default HomePage

export const query = graphql`
  {
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
