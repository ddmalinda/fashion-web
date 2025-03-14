import { Typography } from '@mui/material'
import React from 'react'

export default function NoBdTitle({title}) {
  return (
    <Typography sx={{

        fontSize:{xs:'25px',sm:'40px',md:'50px',lg:'80px'},
        fontWeight:'900',
        color:'black',
        textTransform:'uppercase',
        fontFamily:'Poppins',
       }}>{title}</Typography>
  )
}
