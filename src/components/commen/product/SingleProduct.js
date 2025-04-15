import { Box, Grid, Grid2 } from '@mui/material'
import React from 'react'
import ProductImage from './singleProduct/ProductImage'
import ProductName from './singleProduct/ProductName'
import ProductPrice from './singleProduct/ProductPrice'
import ProductSize from './singleProduct/ProductSize'
import ProductRating from './singleProduct/ProductRating'
import ViewProductBotton from '../buttons/ViewProductBotton'

export default function SingleProduct({ product_name,price,size,rating,images}) {
  return (
    <Grid2 sx={{pb:"10px",
      transition:'1s',
      '&:hover':{transform:'scale(1.10)',boxShadow:'0px 3px 0px 0px #fbd105'}, 
      mb:'10px',m:{xs:'10px'}}}>
      <ProductImage images={images} />
      <Box sx={{my:'10px'}}>
      <ProductName product_name={product_name} />
      </Box>
      <Box sx={{my:'10px'}}>
      <ProductSize availableSize={size}/>
      </Box>

      <Box>
      <Grid container justifyContent={'space-between'} alignItems={'end'} sx={{my:'10px'}} >
        <Grid>
        <ProductRating rating={rating} />
        <ProductPrice price={price}/>
        </Grid>
      <ViewProductBotton text={'Viwe Product'}/>
      </Grid>
      </Box>
    </Grid2>
  )
}
