import { Box } from '@mui/system'
import React from 'react'
import TopNavigation from './commen/TopNavigation'
import Footer from './commen/Footer'
import CustomerSlider from './homeLayout/CustomerSlider'
import ContactSection from './homeLayout/ContactSection'
import SaleSection from './homeLayout/SaleSection'

var items = [
  {
    image: 'https://images.pexels.com/photos/3761157/pexels-photo-3761157.jpeg'
  },
  {
    image: 'https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg'
  },
  {
    image: 'https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg'
  },
  {
    image: 'https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
]

var socailData = [
  {
    title: "Facebook",
    image: "https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png",
    link: "https://web.facebook.com/profile.php?id=100072050881155"
  },
  {
    title: "Instagram",
    image: "https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-512.png",
    link: "https://www.instagram.com/_dasith_dm_/?igsh=MTFmb3Boczd6aHp2bQ%3D%3D#"
  },
  {
    title: "WhatsApp",
    image: "https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Whatsapp_svg-512.png",
    link: "https://wa.me/message/TKCQY25ELRBSK1"
  }
]

export default function HomeLayout() {
  return (
    <Box>
      <TopNavigation />
      <Box sx={{ maxWidth: 'xl', mx: 'auto' }}>
        <CustomerSlider items={items} />
      </Box>
      new arrivals selection<br />
      visite store button<br />
      comming soon selection<br />


      <Box sx={{ maxWidth: 'xl', mx: 'auto' }}>
        <SaleSection />
        <ContactSection data={socailData} />
      </Box>
      <Footer />


    </Box>
  )
}