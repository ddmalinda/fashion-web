import { Box, Grid2, Typography } from '@mui/material'
import React from 'react'

export default function BottumLineFooter() {
  return (
    <Box sx={{bgcolor:'black',p:1,fontFamily:'Ubuntu '}}>
        <Grid2 container  justifyContent={'space-around'} alignItems={'center'}>
            <Typography  sx={{color:'white'}} >© Copyright 2025</Typography>
        </Grid2>
    </Box>
  )
}
