import SingleProduct from '../../../components/commen/product/SingleProduct'
import { Grid2 } from '@mui/material'
import React from 'react'
import { getProductImageUrl } from '../../../util/Functions'


export default function ProductGrid({products}) {
  return (
    <Grid2 container spacing={3} justifyContent={'center'}>
        {products.map((val,key)=>{
            const{ product_name, price, size, rating,imageBaseUrl,images}=val;

            const result=getProductImageUrl(imageBaseUrl,images);//get link of images
            console.log(result);
            return (<Grid2 size={{xs:6,sm:3,lg: 3 }} key={key} sx={{pt:{xs:'10px',sm:'20px'},p:{lg:'50px'}}}>
                <SingleProduct product_name={product_name} price={price} size={size} rating={rating} images={result}/>
            </Grid2> 

       ); })}
    </Grid2>
    
  )
}
