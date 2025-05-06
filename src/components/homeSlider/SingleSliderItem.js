import { Box, Typography } from '@mui/material'
import React from 'react'
import BdTitle from '../commen/titles/BdTitle'
import NoBdTitle from '../commen/titles/NoBdTitle'
import ShopNowButton from '../commen/buttons/ShopNowButton'
import { linkPath } from '../../util/MetaData'

export default function SingleSliderItem({ image }) {
    return (
        <Box
            sx={{
                backgroundImage: `url(${image})`,
                height: {xs:'300px',sm:'400px',md:'500px',lg:'700px'},
                backgroundSize: 'cover',
                width: {xs:'600px',sm:'800px',md:'1000px',lg:'1600px'},
                margin: 'auto',
            }} >
                <Box  sx={{
                    p:'60px',
                    maxWidth:'lg',
                    mx:'auto',
                    px:{xs:'30px',lg:'0px'}
                    }}>
            <BdTitle title={"let's"} bdcolor={'white'} />
            <NoBdTitle title={"explore"}/>
            <BdTitle title={"Unique"} bdcolor={'yellow'}/>
            <NoBdTitle title={"Clothes"}/>
            
            <Typography sx={{
                     fontSize:{xs:'12px',sm:'25px',md:'30px',lg:'45'},
                     color:'black',
                     fontFamily:'Ubuntu',
                }}>
                    Live for Influenttial and innovative fashion!
                </Typography>
                <Box sx={{pt:'10px'}}>
                <ShopNowButton path={linkPath.allItems} />
                </Box>
                </Box>
               
        </Box>


    )
}
