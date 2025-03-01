// filepath: /D:/Coding/React PROJECT/fashion-web/src/layouts/homeLayout/contactSection/SocialMediaIcons.js
import { Grid2 } from '@mui/material'
import React from 'react'
import SocialIcons from '../../../components/socilsection/SocialIcons'


export default function SocialMediaIcons({ data }) {
  return (
    <Grid2 container spacing={5} justifyContent={"center"} >
     {data.map((val,key)=>{
        return(
            <Grid2 key={key}>
                <SocialIcons title={val.title} image={val.image} link={val.link}/>
            </Grid2>
        )
     })}
    </Grid2>
  )
}