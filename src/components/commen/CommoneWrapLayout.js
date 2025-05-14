import { Box } from '@mui/material'
import React from 'react'
import TopNavigation from '../../layouts/commen/TopNavigation'
import Footer from '../../layouts/commen/Footer'
import { useSelector } from 'react-redux'

export default function CommoneWrapLayout({children}) {

  const cartState=useSelector((state)=>state.cartReducer.cart)
  return (<Box>

    <Box sx={{position:'sticky',top:0,zIndex:5000}}>
        <TopNavigation ItemCount={cartState.length}/>
  </Box>
    <Box sx={{maxWidth:'xl', mx:'auto', minHeight:'60vh', p:'0 6%', mt:'20px'}}>
        {children}
    </Box>
    <Footer/>
    </Box>
  )
}
