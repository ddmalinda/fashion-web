import { Grid2 } from '@mui/material'
import React from 'react'

export default function SingleImageThumnail({image,isActive,slideTo}) {
  return (
   <Grid2 
   onClick={slideTo}
   component={'img'} src={image} width={'100%'} 
   sx={{
    borderRadius:'10px',
    cursor:'pointer',
        borderBottom: isActive ?'3px solid #ffc107':'',


   }}>

   </Grid2>
  )
}
