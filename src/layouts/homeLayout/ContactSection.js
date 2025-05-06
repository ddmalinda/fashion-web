import NewsLetterSubcriptionInput from '../../components/customerSection/NewsLetterSubcriptionInput'
import SocialMediaIcons from './contactSection/SocialMediaIcons'
import { Box, Typography } from '@mui/material'
import React from 'react'

export default function ContactSection({ data }) {
  return (
    <Box sx={{ textAlign: "center", marginTop:'50px' }}>
      <img style={{ width: "150px", height: "150px" }} alt="newsletter icon" src="https://radikadilanka.com/rdfashion/static/media/news_letter.c462b3a3915dd4658db2.png" />
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
