import { Grid2, IconButton, Box } from '@mui/material'
import React from 'react' 
import ProductInforSection from './singleCartItem/ProductInforSection'
import CancelIcon from '@mui/icons-material/Cancel';
import OrderInformationSection from './singleCartItem/OrderInformationSection';
import ProductTitleAndPriceSection from './singleCartItem/productInforSection/ProductTitleAndPriceSection';


export default function SingleItem({ image, ProductName, price, shortDescription, qty, size,hadleRemoveItem }) {
    return (
        <div>
            <Grid2 container spacing={2} justifyContent={'cente'}>
                <Grid2 justifyItems={'center'}  size={{ xs: 4, sm: 3, md: 2 }} sx={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '150px',
                   
                }} >
                </Grid2>
                <Grid2 size={{ xs: 7, md: 9 }} >
                    <Box sx={{display:{xs:'block',sm:'none'}}}>
                    <ProductTitleAndPriceSection   ProductName={ProductName} price={price} />
                    </Box>
                    <Box sx={{display:{xs:'none',sm:'block'}}}>
                    <ProductInforSection
                        ProductName={ProductName} price={price} 
                        shortDescription={shortDescription}
                        qty={qty}
                        size={size} />
                    <Box sx={{ ml: '-20px', mt: '20px' }}>
                        
                        <OrderInformationSection qty={qty} price={price} size={size} />
                    </Box>
                        </Box>
                </Grid2>
                <Grid2 size={1}>
                    <IconButton color='error' onClick={hadleRemoveItem}>
                        <CancelIcon />
                    </IconButton>
                </Grid2>
                <Grid2 size={12} sx={{display:{xs:'block',sm:'none'}}}>
                    <ProductInforSection
                       ProductName={ProductName} price={price} 
                       shortDescription={shortDescription}
                       qty={qty}
                       size={size}
                        titleVisibility={{display:{xs:'none',sm:'block'}}}
                    />
                    <Box sx={{ ml: '-0px', mt: '20px' }}>
                        <OrderInformationSection qty={qty} price={price} size={size} />
                    </Box>
                </Grid2>
            </Grid2>
        </div>
    )
}
