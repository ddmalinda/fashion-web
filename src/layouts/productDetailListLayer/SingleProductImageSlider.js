import React from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';


export default function SingleProductImageSlider({image}) {
  return (
    <InnerImageZoom src={image} zoomSrc={image} zoomScale={2} width={1000} />
  )
}
