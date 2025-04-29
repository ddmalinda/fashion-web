import { Box, Typography } from '@mui/material'
import React from 'react'

export default function SingaleSizeSelecterBox({ size}) {
  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor:'black',
        borderRadius: '5px',
        width: '40px',
        height: '40px',
        justifyItems: 'center',
        alignContent: 'center',
        bgcolor: 'black'
      }}>
      <Typography sx={{
        fontFamily: 'Ubuntu',
        fontWeight: 500,
        textTransform: 'uppercase',
        color:'#FFFFFF' 
      }}>
        {size}
      </Typography>

    </Box>
  )
}
