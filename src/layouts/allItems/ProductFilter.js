import { Grid2 } from '@mui/material'
import DropDownFilter from '../../components/productFilters/DropDownFilter';
import MultiSelecterFilter from '../../components/productFilters/MultiSelecterFilter';
import { useEffect, useState } from 'react';

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
const typeFilterOptions = [
    { label: 'wedding', value: false },
    { label: 'casual/formal hybrid', value: false },
    { label: 'other', value: false },
    { label: 'formal/evening', value: false },
    { label: 'party', value: false },
    { label: 'casual', value: false },
    { label: 'cocktail', value: false }
];

export default function ProductFilter({ data, displayProductList, updateProducts }) {
    //hooks
    const [sizeFilter, setSizeFilter] = useState(sizeFilterOptions);
    const [typeFilter, setTypeFilter] = useState(typeFilterOptions);
    
    const handleSizeFilterOnChange = (userSeletSize, newState) => {
    
        setSizeFilter((prevState) =>
            prevState.map((sizeFilter) =>
                sizeFilter.label === userSeletSize
                    ? { ...sizeFilter, value: newState }
                    : sizeFilter
                )
            )
        }

        const handleTypeFilterOnChange = (userSeletType, newState) => {
    
    
            setTypeFilter((prevState) =>
                prevState.map((typeFilter) =>
                    typeFilter.label === userSeletType
                        ? { ...typeFilter, value: newState }
                        : typeFilter
                )
            )
        }

    //both select 

    useEffect(() => {
        const finalSizeFilter = sizeFilter
            .filter((singleSize) => singleSize.value)
            .map((element) => element.label)

        const finalTypeFilter = typeFilter
            .filter((singleType) => singleType.value)
            .map((element) => element.label)

        let isSizeFilterActive = finalSizeFilter.length;
        let isTypeFIlterActive = finalTypeFilter.length > 0 && finalTypeFilter.length !== typeFilter.length;

        if (!isTypeFIlterActive && !isSizeFilterActive) {
            //both not apply
            updateProducts(data);

        } else if (isTypeFIlterActive && !isSizeFilterActive) {
            //only type filter apply
            
        const filterProductList = applyTypeFilter(data,finalTypeFilter)
        updateProducts(filterProductList);

        } else if (!isTypeFIlterActive && isSizeFilterActive) {
            //only size filter apply
            const filterProductList=applySizeFilter(data,finalSizeFilter)
            updateProducts(filterProductList);

        } else {
            //both apply
             const filterProductList=applySizeFilter(applyTypeFilter(data,finalTypeFilter),finalSizeFilter)
             updateProducts(filterProductList);
        }

    }, [typeFilter, sizeFilter])

    const applySizeFilter=(productList,filter)=>{
        return productList.filter(product =>
                filter.every((size) => product.size.includes(size)))
    }

    const applyTypeFilter=(productList,filter)=>{
        return  productList.filter(product =>
            filter.includes(product.occasion))

    }
    const hadleSortFilter = (sortOrder) => {
        const sorted = sortOrder === 'none' ? [...displayProductList].sort((a, b) => (a.id - b.id))
            : [...displayProductList].sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price)
        updateProducts(sorted)

    }
    return (
        <Grid2 sx={{ marginTop: '50px', paddingLeft: '20px', position: 'sticky', top: 150, }} >
            <Grid2  >
                <DropDownFilter options={priceFilterOptions} hadleFilter={hadleSortFilter} />
            </Grid2>
            <Grid2>
                Size
                <MultiSelecterFilter filterOptions={sizeFilter} handleFilter={handleSizeFilterOnChange} />
            </Grid2>
            <Grid2>
                occasion
                <MultiSelecterFilter filterOptions={typeFilter} handleFilter={handleTypeFilterOnChange} />
            </Grid2>
        </Grid2>
    )
} 
