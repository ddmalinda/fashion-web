import React from 'react'
import Button from '@mui/material/Button';
import { Grid2, Typography } from '@mui/material';

export default function CheckoutButton({isLoding,hadleACheckout}) {
  return (
    <Grid2>
      <Button onClick={hadleACheckout} 
      variant="contained" 
      loading={isLoding}
      sx={{ '&:hover':{color:'white',bgcolor:'black'} ,
      color:'black',
      bgcolor:'#FFD801',
      borderRadius:'10px',
      textTransform:'capitalize',
      boxShadow:'none',
      
    }}
      >
       
        <Typography sx={{
          fontFamily:"Ubuntu",
          fontSize:"20px",
          fontWeight:800,
          m:{xs:'0px',md:'0px 30px 0px 30px'}
        }}>
         Checkout
          </Typography>
        </Button>
    </Grid2>
  )
}
