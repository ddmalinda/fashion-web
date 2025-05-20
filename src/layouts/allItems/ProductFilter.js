import { Grid2 } from '@mui/material'
import DropDownFilter from '../../components/productFilters/DropDownFilter';
import MultiSelecterFilter from '../../components/productFilters/MultiSelecterFilter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSizeFilter, setSortFilter, setTypeFilter, UpdateCleanFilter } from '../../Store/actions/productActions';
import useProductFilters from '../../util/customHooks/useProductFilter';

import CurrentFilter from '../../components/productFilters/CurrentFilters';
import { getSelectedOption } from '../../util/Functions';

const priceFilterOptions = [
    {
        type: 'asc',
        name: 'Low to High'
    }, {
        type: 'dsc',
        name: 'High to Low'
    }
]


export default function ProductFilter({ data, updateProducts }) {
    //hooks
    const dispach = useDispatch()
    const { sizeFilter, typeFilter, sortFilter } = useSelector((state) => state.productReducer)
    const filteredProducts = useProductFilters(data, sizeFilter, typeFilter, sortFilter) //custom Hook


    const handleSizeFilterOnChange = (userSeletSize, newState) => {
        dispach(setSizeFilter(userSeletSize, newState))
    }

    const handleTypeFilterOnChange = (userSeletType, newState) => {
        dispach(setTypeFilter(userSeletType, newState))
    }

    const hadleSortFilter = (sortOrder) => {
        dispach(setSortFilter(sortOrder))
    }
    const hadleCleanFilter = () => {
        dispach(UpdateCleanFilter())
    }
    useEffect(() => {
        updateProducts(filteredProducts);
    }, [filteredProducts])
    return (
        <Grid2 sx={{
            bgcolor: '#F9FAFB', px: '20px', py: '20px',
            marginTop: '50px',
            paddingLeft: '20px',

            // Enable vertical scrolling

        }} >
            <CurrentFilter
                filter={[
                    { name: 'size', isActive: getSelectedOption(sizeFilter).length },
                    { name: 'occation', isActive: getSelectedOption(typeFilter).length },
                    // { name: 'sort', isActive: (sortFilter !== 'none') ? true : false },
                ]}
                title={'Current Filters'}
                hadleCleanFilter={hadleCleanFilter}
                
            />
            <DropDownFilter title={'Arrange by Price'} value={sortFilter} options={priceFilterOptions} hadleFilter={hadleSortFilter} />
            <Grid2>
                <MultiSelecterFilter title={'size'} filterOptions={sizeFilter} handleFilter={handleSizeFilterOnChange} />
                <MultiSelecterFilter title={'occasion'} filterOptions={typeFilter} handleFilter={handleTypeFilterOnChange} />
            </Grid2>
        </Grid2>
    )
} 
