import React from 'react'
import { Box } from '@mui/system';
import {NavLink } from 'react-router-dom';

export default function SingaleNavigationItem({title,path}) {
  return (
    <Box component={NavLink}
                    sx={{ 
                        textDecoration:'none',
                        color:'black',
                        fontFamily:'Ubuntu',    
                        fontSize:'20px',
                        fontWeight:'600',
                        '&:hover':{color:'rgb(255,125,29)',}, }}

                        style={({isActive})=> {
                          return isActive?{color:'rgb(255,125,29)',textDecoration:'underline'}:{color:'black'};
                        }}
                        to={path}
                        >
                   {title}
              
  </Box>
        
                 
  )
}
