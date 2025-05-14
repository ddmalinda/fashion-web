import { Box, Grid2 } from '@mui/material'
import { useEffect } from 'react'
import ProductFilterButton from './ProductFilterButton'

export default function ProductFilter({ data, updateProducts }) {
    useEffect(() => {
        const userSelector='s';
        const filterdProducts=[];
        data.forEach(element => {
            element.size.forEach(sSize=>{
              if(sSize.toLowerCase()===userSelector.toLowerCase()){
                filterdProducts.push(element)
              }   
            })
        });
    }, [data])
        
    const hadleSortFilter = (sortOrder) => {
        const sorted= [...data].sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price)
        updateProducts(sorted)
       
    }
    return (
        <Grid2 container spacing={4} justifyContent={'center'} >
            <Box>

            <ProductFilterButton text={'asc'} hadleSortFilter={hadleSortFilter}/>
            </Box>
            <ProductFilterButton text={'dsc'} hadleSortFilter={hadleSortFilter}/>
            {/* <Button  onClick={()=> hadleSortFilter('asc')} >asc</Button>
            <Button onClick={()=> hadleSortFilter('dsc')}>dsc</Button> */}
        </Grid2>
    )
} 
