import React from 'react'
import Button from '@mui/material/Button';
import { Grid2, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function AddToCardButton({isLoding,hadleAddToCard}) {
  return (
    <Grid2>
      <Button onClick={hadleAddToCard} 
      variant="contained" 
      loading={isLoding}
      startIcon={<AddIcon/>}
      sx={{ '&:hover':{color:'white',bgcolor:'black'} ,
      color:'black',
      bgcolor:'#FFD801',
      borderRadius:'10px',
      textTransform:'capitalize',
      boxShadow:'none'
    }}
      >
        {/* <AddIcon/> */}
        <Typography sx={{
          fontFamily:"Ubuntu",
          fontSize:"20px",
          m:'10px'
        }}>
          ADD TO Card
          </Typography>
        </Button>
    </Grid2>
  )
}
