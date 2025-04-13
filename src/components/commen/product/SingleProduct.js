import { Grid2 } from '@mui/material'
import React from 'react'
import ProductImage from './singleProduct/ProductImage'
import ProductName from './singleProduct/ProductName'
import ProductPrice from './singleProduct/ProductPrice'
import ProductSize from './singleProduct/ProductSize'
import ProductRating from './singleProduct/ProductRating'
import ViewProductBotton from '../buttons/ViewProductBotton'

export default function SingleProduct({ product_name,price,size,rating,images}) {
  return (
    <Grid2 sx={{transition:'1s','&:hover':{transform:'scale(1.10)',boxShadow:'0px 3px 0px 0px #fbd105'}}}>
      <ProductImage images={images}/>
      <ProductName product_name={product_name} />
      <ProductPrice price={price}/>
      <ProductSize size={size}/>
      <ProductRating rating={rating} />
      <ViewProductBotton/>
    </Grid2>
  )
}
