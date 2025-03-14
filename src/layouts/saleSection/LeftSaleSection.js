import { Box } from '@mui/material'
import React from 'react'

export default function LeftSaleSection() {
  return (
    <Box sx={{backgroundImage:'url("https://images.unsplash.com/flagged/photo-1593005510329-8a4035a7238f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      height:{md:'620px',lg:'700px'},
        borderBottomLeftRadius:'25px',
        borderTopLeftRadius:'25px'
    }}>
        <Box component={'img'} src='/assets/yellow girl.png'
  sx={{

    width:'100%',
    height:'100%', 
    objectFit:'cover',
    objectPosition:'top'
  }}
/>
        

    </Box>
  )
}
