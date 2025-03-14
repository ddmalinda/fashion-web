import { Grid2 } from '@mui/material'
import React from 'react'
import LeftSaleSection from '../saleSection/LeftSaleSection'
import RightSaleSection from '../saleSection/RightSaleSection'

export default function SaleSection() {
  return (
   <Grid2 container>
      
    <Grid2 size={{ md:6}} sx={{display:{xs:'none',md:'block'}}}>
      <LeftSaleSection/>
    </Grid2>
    <Grid2 size={{xs:12, md:6}}>
      <RightSaleSection/>
    </Grid2>
  </Grid2>
  
  )
}
