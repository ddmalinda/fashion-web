import { Grid2 } from '@mui/material'
import React from 'react'
import SingleInformation from './serviceSection/SingleInformation'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Replay30Icon from '@mui/icons-material/Replay30';
import VpnLockIcon from '@mui/icons-material/VpnLock';
export default function ServiceSection(){
  return (
    <Grid2 container  justifyContent="center"  sx={{
        bgcolor:'#FBD103',
          height:{md:'150px',xs:'auto'},
        size:{lg:'1'},
        display:'flex',
        justifyContent:'center',
        alignItems:'center'

    }}>

        <SingleInformation IconBox={LocalShippingIcon} title={'Free Shipping'} discription={'Enjoy free shipping on all orders above LKR 1000 '}/>
        <SingleInformation IconBox={SupportAgentIcon} title={'Support 24/7'} discription={'Our support team is there to help you for quries'}/>
        <SingleInformation IconBox={Replay30Icon} title={'30 Days Return'} discription={'Simply return it within 30 days for an exchange'}/>
        <SingleInformation IconBox={VpnLockIcon} title={'100% Payment Secure'} discription={'Our payment are secured with 256 bit encryption'}/>
    </Grid2>
  )
}
