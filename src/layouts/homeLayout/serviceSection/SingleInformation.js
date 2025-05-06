import { Box, Grid2, Typography } from '@mui/material'
import { orange } from '@mui/material/colors'
import React from 'react'


export default function SingleInformation({ IconBox, title, discription }) {
  return (

    <Grid2
      container
      justifyContent={'center'}
      direction={{md:'row',xs:'row'}}
      sx={{
        alignItems: "flex-start",
        m:{xs:'10px'}
      }}
    >

      <IconBox  sx={{
        mr: {md:'10px',xs:'10px'}, color: orange[500],fontSize: {md:40,xs:40}
      }} />
      <Box sx={{ width: { md: "260px", sm: '80px' }, justifyContent: "center", }}>
        <Typography sx={{
          textDecoration: 'underline',
          fontWeight: '600',
          fontFamily: 'Ubuntu',
          fontSize: { md: "20px", xs: '15px' },
        
        }}>
          {title}
        </Typography>
        <Typography sx={{
          fontFamily: "Ubuntu",
          fontSize: { md: "15px", xs: '12px' },
          fontWeight: '450',
          width: {md:'70%'}
        }}>
          {discription}
        </Typography>
      </Box>
    </Grid2>


  )
}

