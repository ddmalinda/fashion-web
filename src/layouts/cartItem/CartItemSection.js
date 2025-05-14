import { Box } from '@mui/material'
import React from 'react'
import SingleItem from './CartItemList/SingleItem';
import { getProductImageUrl } from '../../util/Functions';

export default function CartItemSection({data,hadleRemoveItem}) {  
  return (
   <Box>
   {data && data.map((val,key)=>{
    const {imageBaseUrl,images,product_name,price,shortDescription,id}=val.product;
    const {qty,size}=val.order;
        return(
            <Box key={key} sx={{mt:'20px'}}> 
                <SingleItem 
                image={getProductImageUrl(imageBaseUrl,images)[0]}
                ProductName={product_name}
                price={price}
                shortDescription={shortDescription} 
                qty={qty}
                size={size}
                hadleRemoveItem={()=>hadleRemoveItem(id)}/>
            <hr/>
            </Box>
        );
    })
   }
   </Box>
  )
}
