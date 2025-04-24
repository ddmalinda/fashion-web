import { Button, Grid2 } from '@mui/material'
import React from 'react'
import CallMadeIcon from '@mui/icons-material/CallMade';
export default function ViewStoreButoon() {
  return (
    <Grid2 container display="flex" justifyContent="center" alignItems="center">
    <Button  color='black' variant="outlined" size={'large'} sx={{
      fontFamily:'Ubuntu',
      bgcolor:'white',
      color:'black',
      '&:hover':{bgcolor:'black',color:'white',bolder:'1px solid black'}, 
      fontSize:{sx:'20px',md:'30px'},
      borderRadius:'30px',
    }}>
        <CallMadeIcon sx={{mr:'10px'}}/>
        View Store
    </Button>
      </Grid2>
  )
}
