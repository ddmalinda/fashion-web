import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Box } from '@mui/system';
import { Button } from '@mui/material';


export default function SingaleNavigationItem({val}) {
  return (
    <Box  component={Nav.Link} 
                    sx={{  
                        color:'black',
                        fontFamily:'Ubuntu',    
                        fontSize:'20px',
                        fontWeight:'600',
                        '&:hover':{color:'rgb(255,125,29)',}, }}>
                   {val.title}
                   <Button>
    
  </Button>
              
  </Box>
        
                 
  )
}
