import { Typography,Box } from '@mui/material'
import React from 'react'

export default function BrandTypography() {
  return (
    <Typography  sx={{color:'#FBD103', fontSize:'32px', fontWeight:'700', fontFamily:'Ubuntu'}}>
        Dd
        <Box component={'span'} sx={{color:'#004743'}}>
        Fashion
        </Box>
    </Typography>
  )
}
