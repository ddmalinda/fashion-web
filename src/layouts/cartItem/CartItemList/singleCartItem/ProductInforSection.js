import React from 'react'
import { Box, Typography } from '@mui/material'
import ProductTitleAndPriceSection from './productInforSection/ProductTitleAndPriceSection'


export default function ProductInforSection({ProductName,price, description_one,titleVisibility}) {
    return (
        <div>
            <Box sx={titleVisibility}>
                <ProductTitleAndPriceSection   ProductName={ProductName} price={price} />
            </Box>
            <Typography sx={{
                fontSize: '16px',
                fontFamily: 'Ubuntu',
                color: '#555555',
                display: '-webkit-box',
                WebkitLineClamp: {xs:2,lg:4},
                WebkitBoxOrient: 'vertical',
                overflow:'hidden',
                textOverflow:'eclipsis'
            }}>
                {description_one}
            </Typography>
           
        </div>
    )
}
