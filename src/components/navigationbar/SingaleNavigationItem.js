import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Box } from '@mui/system';


export default function SingaleNavigationItem({val,key}) {
  return (
    <Box  key={key} component={Nav.Link} 
                    sx={{  
                        color:'black',
                        fontFamily:'Ubuntu',    
                        fontSize:'20px',
                        fontWeight:'600',
                        '&:hover':{color:'rgb(255,125,29)',}, }}>
                   {val.title}
  </Box>
                    
                 
  )
}
