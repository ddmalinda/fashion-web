import { Grid2 } from '@mui/material'
import React from 'react'
import SingleProduct from '../../components/commen/product/SingleProduct'
import { getProductImageUrl } from '../../util/Functions';
import { Link } from 'react-router-dom';
import { linkPath } from '../../util/MetaData';
import { Animated } from 'react-animated-css';

export default function ProductList({data}){
    return(
       <Grid2 container sx={{justifyItems:'space-around'}} spacing={2}>
        {data.map((val,key)=>{
      
            return (
            <Grid2 container key={key} size={{xs:12,md:6,lg:4}} display="flex" justifyContent="center">
              <Animated animationIn="zoomIn"  isVisible={true}>
              <Link to={linkPath.details} style={{textDecoration:'none'}} state={{product:val}}>
                <SingleProduct
                 product_name={val.productName}
                 price={val.price}
                 size={val.size}
                 rating={val.rating}
                 images={getProductImageUrl(val.imageBaseUrl,val.images)}
                 />
                 </Link>
                 </Animated>
            </Grid2>
            );
        })}
       </Grid2>
    )
}

