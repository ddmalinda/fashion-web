import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import CustomerSlider from './homeLayout/CustomerSlider'
import ContactSection from './homeLayout/ContactSection'
import SaleSection from './homeLayout/SaleSection'
import NewArrivalSection from './homeLayout/NewArrivalSection'
import ServiceSection from './homeLayout/ServiceSection'
import ViewStoreButoon from '../components/commen/buttons/ViewStoreButoon'
import CoomigSoonSection from './homeLayout/CoomigSoonSection'
import CommoneWrapLayout from '../components/commen/CommoneWrapLayout'
import { Animated } from 'react-animated-css'


var items = [
  {
    image: '/assets/slidImages/1.jpg'
  },
  {
    image: '/assets/slidImages/2.jpg'
  },
  {
    image: '/assets/slidImages/3.jpg'
  },
  {
    image: '/assets/slidImages/4.jpg'
  },
  {
    image: '/assets/slidImages/5.jpg'
  },
  {
    image: '/assets/slidImages/6.jpg'
  },
  {
    image: '/assets/slidImages/7.jpg'
  },
  {
    image: '/assets/slidImages/8.jpg'
  },
  
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
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (

      <CommoneWrapLayout>
          
      <Box sx={{ maxWidth: 'xl', mx: 'auto' }}>
        <Animated animationIn="fadeInDown"  isVisible={true}>
        <CustomerSlider items={items} />
        </Animated>
        <Box sx={{mt:'60px'}}>
          <NewArrivalSection/>
        </Box>
      <ServiceSection/>
      <Box sx={{m:'20px 0px 20px 0px'}}>
      <ViewStoreButoon />
      </Box>
      <CoomigSoonSection/>
        <SaleSection />
        <ContactSection data={socailData} />
      </Box>
      </CommoneWrapLayout>

  )
}