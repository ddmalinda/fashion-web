import { Grid2 } from '@mui/material'
import React from 'react'
import { priceValueFormat } from '../../../../util/Functions'

export default function ProductPrice({price}) {
  return (
    <Grid2 sx={{
      fontFamily:'Ubuntu',
      fontWeight:'500',
      fontSize:{xs:'10px',md:'20px'},
      color:'#FF7D1E'
      }}>
      {priceValueFormat(price)}
    </Grid2>
  )
}
