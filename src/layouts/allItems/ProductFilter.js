import { Grid2 } from '@mui/material'
import DropDownFilter from '../../components/productFilters/DropDownFilter';
import ProductFilterButton from '../../components/productFilters/ProductFilterButton';
import MultiSelecterFilter from '../../components/productFilters/MultiSelecterFilter';
import { useEffect, useState } from 'react';
import { produce } from 'immer';

const priceFilterOptions = [
    {
        type: 'asc',
        name: 'Low to High'
    }, {
        type: 'dsc',
        name: 'High to Low'
    }
]
const sizeFilterOptions = [
    { label: 'xs', value: false },
    { label: 's', value: false },
    { label: 'm', value: false },
    { label: 'l', value: false },
    { label: 'xl', value: false },


]
export default function ProductFilter({ data, displayProductList, updateProducts }) {
    const [sizeFilter, setSizeFilter] = useState(sizeFilterOptions);

    useEffect(()=>{
        const userSelectSizes=sizeFilter
        .filter((singleSize)=>singleSize.value)
        .map((element)=>element.label)

        console.log(userSelectSizes);

        const filterProductList =data.filter(product=>
            userSelectSizes.every((size)=>product.size.includes(size)))

        updateProducts(filterProductList);

    },[sizeFilter])
    // useEffect(() => {
    //     const userSelector='s';
    //     const filterdProducts=[];
    //     // data.forEach(element => {
    //     //     element.size.forEach(sSize=>{
    //     //       if(sSize.toLowerCase()===userSelector.toLowerCase()){
    //     //         filterdProducts.push(element)
    //     //       }   
    //     //     })
    //     // });

    //     data.forEach(element => {
    //        if( element.size.includes(userSelector.toLowerCase())){
    //         filterdProducts.push(element)
    //         }
    //     });
    // }, [data])

    const hadleSizeFilter = (userSelector) => {

        const filterdProducts = [];
        //origina product List
        data.forEach(element => {
            if (element.size.includes(userSelector.toLowerCase())) {
                filterdProducts.push(element)
            }
        });
        console.log(filterdProducts)
        updateProducts(filterdProducts)
    }

    const hadleSortFilter = (sortOrder) => {
        const sorted = sortOrder === 'none' ? [...displayProductList].sort((a, b) => (a.id - b.id))
            : [...displayProductList].sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price)
        updateProducts(sorted)

    }

    const handleSizeFilterOnChange = (userSeletSize, newState) => {

        console.log(userSeletSize, newState)
        setSizeFilter((prevState)=>
            prevState.map((sizeFilter)=>
                sizeFilter.label===userSeletSize
                ?{...sizeFilter,value:newState}
                :sizeFilter
            )
        )
    }
    return (
        <Grid2 sx={{marginTop:'50px',paddingLeft:'20px',position:'sticky',top:150,}} >
            <Grid2  >
                <DropDownFilter options={priceFilterOptions} hadleFilter={hadleSortFilter} />
            </Grid2>

            < Grid2 container spacing={4} justifyContent={'center'}>
                {/* <ProductFilterButton text={'xs'} hadleSizeFilter={hadleSizeFilter} />
                <ProductFilterButton text={'m'} hadleSizeFilter={hadleSizeFilter} />
                <ProductFilterButton text={'dsc'} hadleSizeFilter={hadleSizeFilter}/> */}
            </Grid2>
            <Grid2>
                <MultiSelecterFilter sizeFilterOptions={sizeFilter} handleFilter={handleSizeFilterOnChange} />
            </Grid2>
        </Grid2>
    )
} 
