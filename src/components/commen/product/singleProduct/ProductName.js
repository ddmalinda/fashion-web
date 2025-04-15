import { Grid2 } from '@mui/material'
import React from 'react'

export default function SingleProductName({product_name}) {
  return (
    <Grid2 sx={{
      fontSize:{xs:'12px',md:'17px'},
      color:'GrayText',
      fontFamily:'Ubuntu',
      fontWeight:'500'
      }}>
        {product_name}
    </Grid2>
  )
}
