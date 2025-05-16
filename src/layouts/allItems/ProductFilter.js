import { Grid2 } from '@mui/material'
import DropDownFilter from '../../components/productFilters/DropDownFilter';
import MultiSelecterFilter from '../../components/productFilters/MultiSelecterFilter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSizeFilter, setSortFilter, setTypeFilter } from '../../Store/actions/productActions';

const priceFilterOptions = [
    {
        type: 'asc',
        name: 'Low to High'
    }, {
        type: 'dsc',
        name: 'High to Low'
    }
]


export default function ProductFilter({ data, displayProductList, updateProducts }) {
    //hooks
    const dispach=useDispatch()
    const {sizeFilter,typeFilter,sortFilter} =useSelector((state)=>state.productReducer)
    
    const handleSizeFilterOnChange = (userSeletSize, newState) => {
        dispach(setSizeFilter(userSeletSize, newState))
        }

        const handleTypeFilterOnChange = (userSeletType, newState) => {
            dispach(setTypeFilter(userSeletType, newState))
        }

    //both select 

    useEffect(() => {
        const filterTypeSize=()=>{
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
            return data

        } else if (isTypeFIlterActive && !isSizeFilterActive) {
            //only type filter apply
            
        return applyTypeFilter(data,finalTypeFilter)
        

        } else if (!isTypeFIlterActive && isSizeFilterActive) {
            //only size filter apply
            return applySizeFilter(data,finalSizeFilter)
           

        } else {
            //both apply
             return applySizeFilter(applyTypeFilter(data,finalTypeFilter),finalSizeFilter)
           
        }
        }
       const prob = applySortFilter(filterTypeSize(),sortFilter);
       updateProducts(prob)//final update product 
    }, [typeFilter, sizeFilter,sortFilter])

    const applySizeFilter=(productList,filter)=>{
        return productList.filter(product =>
                filter.every((size) => product.size.includes(size)))
    }
    const applySortFilter=(productList,filter)=>{
        return filter === 'none' ? 
        [...productList].sort((a, b) => (a.id - b.id))
            : [...productList].sort((a, b) => filter === 'asc' ? a.price - b.price : b.price - a.price)
        
    }

    const applyTypeFilter=(productList,filter)=>{
        return  productList.filter(product =>
            filter.includes(product.occasion))

    }
    const hadleSortFilter = (sortOrder) => {
        dispach(setSortFilter(sortOrder))
        

    }
    return (
        <Grid2 sx={{ marginTop: '50px', paddingLeft: '20px', position: 'sticky', top: 150, }} >
            <Grid2  >
                <DropDownFilter value={sortFilter} options={priceFilterOptions} hadleFilter={hadleSortFilter} />
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
