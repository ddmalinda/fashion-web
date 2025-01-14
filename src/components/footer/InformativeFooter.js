import React from 'react'
import { Box, Container, Grid2 } from '@mui/material'
import FooterInforSection from './informativeFooter/FooterInforSection'
import LinkListSection from './informativeFooter/LinkListSection'

export default function InformativeFooter({footerData}) {
  return (
    <Container>
      <Box>
     
        <Grid2 container>
          <Grid2 xs={12} dm={4} spacing={2}>
            <FooterInforSection/>
          </Grid2>
          

          
          {footerData.map((val, key) => {
            return (
              <Grid2 xs={4} md={2} key={key} spacing={10}>
                <LinkListSection title={val.title} links={val.links}/>
              </Grid2>
            )
          })}
        </Grid2>
      </Box>
    </Container>
  )
}