import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function ShopNowButton({path}) {
  return (
   <Button component={Link} to={path} sx={{  
    bgcolor:'black',
    px:'20px',
    py:'4px',
    color:'white',
    borderRadius:'5px',
    fontFamily:'Ubuntu',   
    '&:hover':{bgcolor:'white',color:'rgb(255,125,29)',bolder:'1px solid black'}, 
    fontSize:{sx:'20px',md:'30px'},
    fontWeight:'600',
     }}>SHOP NOW</Button>
  )
}
