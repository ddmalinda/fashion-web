import NewsLetterSubcriptionInput from '../../components/customerSection/NewsLetterSubcriptionInput'
import SocialMediaIcons from './contactSection/SocialMediaIcons'
import { Box, Typography } from '@mui/material'
import React from 'react'

export default function ContactSection({ data }) {
  return (
    <Box sx={{ textAlign: "center", marginTop:'50px' }}>
      <img style={{ width: "150px", height: "150px" }} alt="newsletter icon" src="https://static.vecteezy.com/system/resources/previews/020/700/549/non_2x/e-newsletter-icon-design-free-vector.jpg" />
      <Typography sx={{
        fontFamily: "Ubuntu",
        fontSize: "30px",
        fontWeight: "bold",
        color: "#323232"
      }}
      >Subcribe Newsletter</Typography>
      <Typography sx={{
        fontFamily: "Ubuntu",
        fontSize: "20px",
        color: "#323232",
        rotate: "30 degree",
        paddingBottom: "5px",
      }}> Subcribe to our email and get update right in your inbox </Typography>
      <Box sx={{pb:'10px'}}>
      <NewsLetterSubcriptionInput />
      </Box>
      <Box >
        <SocialMediaIcons data={data} />
      </Box>

    </Box>
  )
}
