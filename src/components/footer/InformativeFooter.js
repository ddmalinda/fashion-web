import React from 'react'
import { Box, Grid2 } from '@mui/material'
import FooterInforSection from './informativeFooter/FooterInforSection'
import LinkListSection from './informativeFooter/LinkListSection'

export default function InformativeFooter({footerData}) {
  return (
      <Box sx={{maxWidth:'1320px',m:'auto', paddingBottom:'50px'}}>
     
        <Grid2 container  justifyContent="space-around" >
          <Grid2 size={{ xs:12 , md:3 }}>
            <FooterInforSection/>
          </Grid2>
          {footerData.map((val, key) => {
            return (
              <Grid2 size={{ xs:3, md:3}} container  justifyContent="center" alignItems="flex"  key={key}>
                <LinkListSection title={val.title} links={val.links}/>
              </Grid2>
            )})}
        </Grid2>
      </Box>
      )
  
}