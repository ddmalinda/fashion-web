import { Box } from '@mui/material'
import React from 'react'

export default function SocialIcons({title,image,link}) {
  return (
  <Box component={'a'} href={link}>
    <img src={image} alt={title} title={title} style={{ width: "20px", height: "20px" }}/>
  </Box>
  )
}
