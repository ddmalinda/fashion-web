import React from 'react'
import CommoneWrapLayout from '../components/commen/CommoneWrapLayout'
import NewArrivalSection from './homeLayout/NewArrivalSection'
import { Grid2 } from '@mui/material'
import ProductImageSlider from './productDetailListLayer/ProductImageSlider';
import { getProductImageUrl } from '../util/Functions';

var products=
  {
    id: "02",
    product_name: "Boho Floral Maxi Dress",
    price:450000,
    size: ["XS", "S", "M", "L", "XL"],
    available_quantity: 20,
    rating: 4.3,
    imageBaseUrl:'https://enme.style/image/cache/wp/gj',
    images:[
      "/products_2023/047_DSCF0614-Edit-1024x1432.webp",
      "/products_2023/055_DSCF0734-Edit-1024x1432.webp"
    ]
  }

export default function ProductDetailListLayer() {
  return (
    <CommoneWrapLayout>
      <Grid2 container>
      <Grid2 size={4} sx={{justifyContent:'center'}}>
        <ProductImageSlider images={getProductImageUrl(products.imageBaseUrl,products.images)}/>
        </Grid2 >
      <Grid2 size={8}> product details</Grid2 >
      </Grid2>
      <NewArrivalSection/>
    </CommoneWrapLayout>

  )
}
