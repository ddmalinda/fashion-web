import { Box } from '@mui/system'
import React from 'react'
import TopNavigation from './commen/TopNavigation'
import Footer from './commen/Footer'
import CustomerSlider from './commen/CustomerSlider'

export default function HomeLayout(){
  return (
    <Box>
       <TopNavigation/>
       <CustomerSlider/>
       <br/> 
        new arrivals selection<br/>
        visite store button<br/>
        comming soon selection<br/>
        sale section<br/>
        socail section<br/>
        <Footer/>


    </Box>
  )
}
