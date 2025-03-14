import { Box } from '@mui/material'
import React from 'react'

export default function SocialIcons({title,image,link}) {
  return (
  <Box component={'a'} href={link}>
    <img src={image} alt={title} title={title} style={{ width: "40px", height: "40px" }}/>
  </Box>
  )
}
