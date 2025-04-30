import { Grid2, Typography } from '@mui/material'
import React from 'react'
import { priceValueFormat } from '../../util/Functions'
import CheckoutButton from '../../components/commen/buttons/CheckoutButton'
export default function CheckOutSystem({ totalPrice = '4581452' }) {
    return (
        <Grid2 container direction="row"
        sx={{
            justifyContent: "space-around",
            alignItems: "center",
        }}>
            <Grid2 size={{xs:3,md:5}} >
                <Typography size={5} sx={{
                    fontFamily: 'Ubuntu',
                    fontSize: { xs: '20px', md: '30px' },
                    fontWeight: '700',
                    color: 'black',
                }}>
                    Total Price
                </Typography>
            </Grid2>
            <Grid2 size={{xs:5,md:4}} justifyItems={{xs:'center',md:"flex-end"}}>
                <Typography sx={{
                    fontWeight: 700,
                    fontFamily: 'ubuntu',
                    fontSize: { xs: '20px', md: '32px' },
                    color: '#FF7D1E',
                    p:{xs:'10px'}
                }}>
                    {priceValueFormat(totalPrice)}
                </Typography>
            </Grid2>
            <Grid2 size={{xs:4,md:3}} justifyItems={'center'} >
                <CheckoutButton />
            </Grid2>
        </Grid2>
    )
}
