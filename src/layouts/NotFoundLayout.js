import { Grid2, Typography } from '@mui/material'
import CommoneWrapLayout from '../components/commen/CommoneWrapLayout'
import React from 'react'

export default function TemLayout() {
    return (
        <CommoneWrapLayout>
            <Grid2 justifyItems={'center'} alignItems={'center'} >
                <Typography sx={{fontSize:{xs:'150px',lg:'300px'}, fontWeight:500}}>
                    404
                </Typography>
                <Typography variant='h2' sx={{font:'Ubuntu',textAlign:'center'}} >
                    Page is not found
                </Typography> 
            </Grid2>
        </CommoneWrapLayout>
    )
}
