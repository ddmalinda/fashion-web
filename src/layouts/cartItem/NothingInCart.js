import { Box, Grid2, Typography } from '@mui/material'
import BasicYellowButton from '../../components/commen/buttons/BasicYellowButton'
import { Animated } from 'react-animated-css'
import { Link } from 'react-router-dom'
import { linkPath } from '../../util/MetaData'

export default function NothingInCart() {
    return (
        <Animated animationIn="pulse" animationOut="fadeOut" isVisible={true}>
            <Grid2 container direction="column" alignItems="center" justifyContent="center">
                <Box component={'img'} src='/assets/cartImage.png'
                    ustifyContent="center" alignItems="center"
                    sx={{
                        display:'flex',
                   width:{xs:'100%',md:'60'},
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                />
                <Typography sx={{
                    fontFamily:'Ubuntu',
                    fontSize:'20px',
                    width:'60%',
                    textAlign:'center',
                    m:'10px 0px 20px 0px',
                    color:'gray'
                }}>
                    A classic t-shirt never goes out of style. This is our most premium collection of shirt. This plain white shirt is made up of pure cotton and has a premium finish.
                </Typography>
                <Grid2>
                    <Link to={linkPath.allItems} >
                        <BasicYellowButton text={'Shop Now'} />
                    </Link>
                </Grid2>
            </Grid2>
        </Animated>
    )
}
