import { Box, Typography } from '@mui/material'
import React from 'react'
import { priceValueFormat } from '../../../../util/Functions'
import OrderInformationSection from './OrderInformationSection'

export default function ProductInforCart({ ProductName, price, description_one, qty, size }) {
    return (
        <div>
            <Typography sx={{
                fontFamily: 'Ubuntu',
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#1D1D1D',

            }}>
                {ProductName}
                <Box component={'span'} sx={{ color: 'black', fontWeight: '400', ml: '20px' }}>
                    {priceValueFormat(price)}
                </Box>
            </Typography>
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
            <Box sx={{ ml: '-20px', mt: '20px' }}>
                <OrderInformationSection qty={qty} price={price} size={size} />
            </Box>
        </div>
    )
}
