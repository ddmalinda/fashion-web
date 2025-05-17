import { Box, Grid2 } from '@mui/material'
import BasicYellowButton from '../../components/commen/buttons/BasicYellowButton'

export default function NothingInCart() {
    return (
        <Grid2 >
            <Grid2 size={12} component={'img'} src='/assets/cartImage.png'
            ustifyContent="center" alignItems="center"
                sx={{
                    width: '60%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                }}
            />
            <Grid2 container justifyContent="center" alignItems="center" style={{ minHeight: '200px' }}>
                <BasicYellowButton text={'Shop Now'} />
            </Grid2>
        </Grid2>
    )
}
