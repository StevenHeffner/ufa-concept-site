import React from 'react'
// import styled from 'styled-components'
import Layout from '../components/layout'
import ImageGallery from '../components/slices/ImageGallery/ImageGallery'
import Team from '../components/slices/Team/Team'


const customPage = props => {
  let { sliceData } = props.pathContext

  let content = sliceData.map(slice => {
    switch (slice.slice_type) {
      case 'image_gallery':
        return <ImageGallery key={slice.prismicId} data={slice}/>
      case 'team':
        return <Team key={slice.prismicId} data={slice}/>
      default:
        return null
    }
  })
  return <Layout>{content}</Layout>
}

export default customPage
