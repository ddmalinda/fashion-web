import { Box, Typography } from '@mui/material'
import React from 'react'
import BdTitle from '../../components/commen/titles/BdTitle'
import NoBdTitle from '../../components/commen/titles/NoBdTitle'
import ShopNowButton from '../../components/commen/buttons/ShopNowButton'

export default function RightSaleSection() {
  return (
    <Box sx={{backgroundImage:'url("https://images.unsplash.com/flagged/photo-1593005510329-8a4035a7238f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        height:{xs:'400px',md:'620px',lg:'700px'}, 
        pt:'1px ',
        borderBottomRightRadius:'25px',
        borderTopRightRadius:'25px',
        borderTopLeftRadius:{xs:'25px',sm:'25px',md:'0px'},
        borderBottomLeftRadius:{xs:'25px',sm:'25px',md:'0px'},
        ml:{s:'200px',xs:'px',md:'0px'}
         
    }}
    >
        <Box sx={{pl:{xs:'90px',sm:'60px'},mt:{xs:'60px',sm:'40px',md:'80px'},}}>
            <BdTitle title={'payday'} bdcolor={'white'} />
            <NoBdTitle title={'sale now'}/>
            <Typography sx={{mt:'10px',
                            fontFamily:"Poppins",
                            fontSize:{md:"25px",sx:'20px'}, 
                            fontWeight:'500',
                            width:'65%'

                            }}>
              Spend minimal $100 gwt 30% off voucher code for your next purchase
            </Typography>
            <Typography sx={{mt:'20px',
                            fontFamily:"Poppins",
                            fontSize:"25px",
                            fontWeight:'700'
                            }}>
              June 1 - 10 june 2025
            </Typography>
            <Typography sx={{mb:'20px',fontFamily:"Poppins",fontSize:"15px"}}>
              *Terms & Conditions apply
            </Typography>
            
            <ShopNowButton/>
        </Box>
    </Box>
  )
}
