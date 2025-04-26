import React from 'react'
import SingleImageThumnail from './SingleImageThumnail'
import { Grid2 } from '@mui/material';

export default function SmallThumnailList({images,slideTo}) {
  return (
    <Grid2 container justifyContent={'center'} spacing={1}>
        {images.map((val,key)=>{
            return(
                <Grid2 key={key} size={2} >
                    <SingleImageThumnail image={val} isActive={true} slideTo={()=>slideTo(key)} />
                </Grid2>
            );
        })}

    </Grid2>
  )
}
