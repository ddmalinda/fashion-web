import { Button } from '@mui/material'
import React from 'react'

export default function ViewProductBotton({text}) {
  return (
    <Button sx={{
      fontFamily:'Ubuntu',
      textTransform:'capitalize',
      color:'black',
      bgcolor:'#FBD103',
      borderRadius:'10px',
      fontSize:'14px',
      '&:hover':{
        bgcolor:'black',
        color:'white',
      
      }
    }}>{text}  </Button>
  )
}
