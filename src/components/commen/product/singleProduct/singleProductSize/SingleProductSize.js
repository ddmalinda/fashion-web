import { Box, Typography } from '@mui/material'
import React from 'react'


export default function SingleProductSize({size,availableSizes}) {
    
    return (
    <Box sx={{
        borderRadius:{xs:'5px',md:'7px'},
        border:'1px solid',
        borderColor:availableSizes?'#FF7D1E':'gray',
        m:'2px 3px',
        }}>
        <Typography sx={{
            textTransform:'uppercase',
            color:availableSizes ? '#FF7D1E':'gray',
            textAlign:'center',
            fontWeight:availableSizes?'700':'100',
            fontSize:{xs:'10px',md:'15px'},
            }} >
            {size}
        </Typography>
    </Box>
  )
}
