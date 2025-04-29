import { Grid2, IconButton } from '@mui/material'
import React from 'react'
import ProductInforCart from './singleCartItem/ProductInforCart'
import CancelIcon from '@mui/icons-material/Cancel';

export default function SingleItem({image,ProductName,price,description_one,qty,size}) {
  return (
    <div>
        <Grid2 container spacing={2} justifyContent={'cente'}>
            <Grid2 size={{xs:12,lg:2}}sx={{
                backgroundImage:`url(${image})`,
                backgroundSize:'contain',
                backgroundRepeat:'no-repeat',
                minHeight:'250px',
                backgroundPosition:'center'}} >
            </Grid2>
            <Grid2 size={9}>
                <ProductInforCart 
                ProductName={ProductName} 
                price={price} 
                description_one={description_one}
                qty={qty}
                size={size} />
            </Grid2>
            <Grid2 size={1}>
               <IconButton>
                <CancelIcon/>
               </IconButton>
            </Grid2>
        </Grid2>
    </div>
  )
}
