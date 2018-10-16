import React from 'react'
import styled from 'styled-components'
import SlideShow from 'react-image-show'
import { Wrapper } from '../sliceStyles'


const ImageGallery = props => {
  let { items, primary: {name_of_the_gallery: { text: galleryNameText }}}  = props.data
  let images = items.map(image => {
    return image.gallery_image.url
  })
  return (
    <Wrapper>
      <h1>{galleryNameText}</h1>
      <SlideShow images={images} infinite={true} thumbnails={true} />
    </Wrapper>
  )
}

export default ImageGallery
