import { Box } from '@mui/system'
import React from 'react'
import TopNavigation from './commen/TopNavigation'
import Footer from './commen/Footer'
import CustomerSlider from './commen/CustomerSlider'

var items=[
  {
    image:'https://images.pexels.com/photos/3761157/pexels-photo-3761157.jpeg'
  },
  {
    image:'https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    image:'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg'
  },
  {
    image:'https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg'
  },
  {
    image:'https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
]
export default function HomeLayout(){
  return (
    <Box>
       <TopNavigation/>
       <CustomerSlider items={items}/>
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
