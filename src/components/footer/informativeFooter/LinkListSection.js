import { Box, Grid2 } from '@mui/material'
import React from 'react'

export default function LinkListSection({title,links}) {
  return (
    <Box>
    {title}
    <Box>
    {links.map((val,key)=>{
        return (
            <Grid2 href={val.link} component={'a'}
                sx={{
                    display:'block',
                    fontSize:'17px',
                    textDecoration:'none',
                    color:'black',
                    fontFamily:'Ubuntu',
                    my:'8px'
                }}
                >
                {val.text}
            </Grid2>
        )
    })}
    </Box>
    
</Box>
  )
}
