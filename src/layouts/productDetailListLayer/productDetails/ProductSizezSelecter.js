import React from 'react'
import { Grid2,  Typography } from '@mui/material'
import SingleProductSize from './SingleProductSize'
import SelecteQtyButton from './SelecteQtyButton'
export default function ProductSizezSelecter({size,isSelectedSize,handleSelected,isError,qty,handleQtyChange}) {
  return (
    <Grid2 >
    <Typography sx={{
        fontWeight:'bold',
        fontFamily:'Ubuntu',
        fontSize:'25px',
        textTransform:'uppercase',
        color:'#000000'
    }}>
        Product Sizes
    </Typography>
<Grid2 container justifyContent={'space-between'} alignItems={'center'}>
    <Grid2 container  spacing={2}>
        {size.map((val,key)=>{
            return(
                <Grid2 key={key}>
                   <SingleProductSize val={val} isSelected={isSelectedSize ===val} handleSelected={handleSelected} isError={isError}/>
                </Grid2>

)
})}
</Grid2>
    <SelecteQtyButton qty={qty} handleQtyChange={handleQtyChange}/>
    </Grid2>
    <Typography sx={{
        visibility: isError ? 'visible': 'hidden',
        color:'red',
        fontFamily:'Ubuntu',
        minHeight:'0px',
    }}>
        *Please select the Product size
    </Typography>
</Grid2>
  )
}
