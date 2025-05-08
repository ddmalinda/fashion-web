import { Button } from '@mui/material'
import React from 'react'

export default function ProductFilterButton({text,hadleSortFilter}) {
  return (
    <Button
    onClick={()=> hadleSortFilter(text)}
    variant="outlined"
    sx={{
        fontFamily:'Ubuntu',
        textTransform:'capitalize',
        color:'#FF7D1D',
        bgcolor:' #FFFFFF',
        borderColor:' #FF7D1D',
        // borderRadius:'10px',
        fontSize:'10px',
        fontWeight:'700',
        p:'5px',
        '&:hover':{
          bgcolor:'black',
          color:'white',
        
        }
      }} >
        {text}
    </Button>
  )
}
