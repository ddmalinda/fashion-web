import { Box } from '@mui/material'
import React from 'react'
import NoBdTitle from './NoBdTitle'

export default function BdTitle({title,bdcolor}) {
  return (
    <Box sx={{
        backgroundColor:`${bdcolor}`,
        width:'fit-content',
        pl:'20px',
        pr:{xs:'30px',md:'120px'},
        transform:'rotate(-2deg)','&>*':{transform:'rotate(2deg)'},
        ml:"-20px"
        
        }}>
         <NoBdTitle title={title}  />
    </Box>
  )
}
