import React from 'react'
import InformativeFooter from '../../components/footer/InformativeFooter'
import BottumLineFooter from '../../components/footer/BottumLineFooter'
import { Box } from '@mui/material'

const footerData=[
    {
        title:'Store',
        links:[
            {link:'/sample',text:'T-Shirts'},
            {link:'/sample',text:'Seasonal'},
            {link:'/sample',text:'Dress'},
            {link:'/sample',text:'New Item'},
        ]
    },{
        title:'Help',
        links:[
            {link:'/sample',text:'Privacy Policy'},
            {link:'/sample',text:'Shipping & Delivery'},
            {link:'/sample',text:'Refund Policy'},
            {link:'/sample',text:'Track your Order'},
        ]
    },{
        title:'Support',
        links:[
            {link:'/sample',text:'Feedback'},
            {link:'/sample',text:'Contact us'},
            {link:'/sample',text:'Download App'},
            {link:'/sample',text:'Terms and Condition'},
        ]
    },
    
]

export default function Footer() {
  return (
   <Box sx={{paddingTop:"150px"}}>
    <InformativeFooter footerData={footerData} />
    <BottumLineFooter/> 
    </Box>
        
    
  )
}
