import { Box, Container, Grid2 } from '@mui/material'
import React from 'react'
import BrandTypography from '../../commen/BrandTypography'

export default function FooterInforSection() {
  return (
        <Container>
      <Box alignItems="flex" spacing={2}>
        <BrandTypography/>
        <Grid2 component={'p'} sx={{ 
                    display:'block',
                    fontSize:'13px',
                    textDecoration:'none',
                    color:'GrayText',
                    fontFamily:'Ubuntu',
                     
                    }} >
            There are many variations of passanges of Lorem Ipsum available, but the majority have suffered alteration in some. 
        </Grid2>
    </Box>
    </Container>
  )
}
