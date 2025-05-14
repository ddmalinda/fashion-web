import React from 'react'
import { priceValueFormat } from '../../util/Functions';
import { Box, Chip, Grid2, Rating, Typography } from '@mui/material'
import ProductSizezSelecter from './productDetails/ProductSizezSelecter';
import AddToCardButton from '../../components/commen/buttons/AddToCardButton';

export default function ProductDetails({product,selectedSize,isError,qty,isLoding,hadleAddToCard,handleQtyChange,handleSelectedSize}) {
    const{
        //id,
        product_name,
        price,
        size,
        rating,
       // imageBaseUrl,
       // images,
       shortDescription,
       description,
       availableQty
    }=product;
   
    return (
    <div>
        <Grid2 container>
            <Grid2 size={{xs:12,sm:3,lg: 9}}>
            <Typography sx={{fontWeight:'700',fontSize:{xs:'25px',md:'30px'},color:'#1D1D1D', fontFamily:'Ubuntu'}}>{product_name}</Typography>
            </Grid2>
            <Grid2 size={3} sx={{textAlign:'end'}}>         
                <Chip label= {availableQty>0 ? "In-Stock": "Out-of-Stock"}
                    sx={{bgcolor:'transparent',
                        border:'1px solid black',
                        fontFamily:'Ubuntu',
                        fontWeight:'bold'
                        }}/>
            </Grid2>

        </Grid2>
       <Rating  defaultValue={rating} precision={0.1} readOnly size='large'/>
      <Typography sx={{
        fontFamily:'Ubuntu',
        fontSize:'32px',
        fontWeight:'700',
        color:'#333333'
      }}>
        {priceValueFormat(price)}
      </Typography>
            {[shortDescription,description].map((val,key)=>{
                return(
                    <Typography key={key} sx={{
                        fontSize:'16px',
                        fontFamily:'Ubuntu',
                        fontWeight:'400',
                        mb:'20px',
                        color:'#555555',
                        textAlign:"justify"
                    }}>
                        {val}

                    </Typography>
                    
                )
            })}
        <Box component={'hr'} />
        <ProductSizezSelecter 
            size={size} 
            isSelectedSize={selectedSize}
            handleSelected={handleSelectedSize}
            isError={isError}
            qty={qty}
            handleQtyChange={handleQtyChange}
            />
           <Typography sx={{
            p:'5px 0px 10px 0px',
            color:'#FF7D1E',
            fontSize:'30px',
            fontWeight:'500',
            fontFamily:'Ubuntu'
            }}>
            {priceValueFormat(price*qty)}
           </Typography>
            <AddToCardButton isLoding={isLoding} hadleAddToCard={hadleAddToCard}/>
    </div>
  )
}
