import { Box } from '@mui/material'
import React from 'react'
import SingleProduct from '../../../components/commen/product/SingleProduct'
import SectionTitle from '../../../components/commen/titles/SectionTitle'



export default function NewArrivalSection() {
  return (
   <Box>
    <SectionTitle title={'new Arrivals'}/>
    <SingleProduct/>
   </Box>
  )
}
