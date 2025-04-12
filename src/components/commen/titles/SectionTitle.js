import { Typography,Box} from '@mui/material'
import React from 'react'
 
export default function SectionTitle({title}) {
  return (
    <Box sx={{
        backgroundImage: 'url("/assets/yellowLogo.png")',
        backgroundRepeat:'no-repeat',
        backgroundSize: {xs:'300px',md:'600px'},
        
        backgroundPosition:'center',
        backgroundPositionX:{xs:'-50px',md:'-100px'},
        padding:'10px',

   }}>
        

     
        <Typography sx={{
            fontFamily:'Poppins',
            fontSize:{xs:'25px',md:'48px'},
            fontWeight:'900',
            textTransform:'uppercase',
        }}>
            {title}
        </Typography>
    </Box>
  )
}
