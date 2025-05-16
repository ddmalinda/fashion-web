import { Grid2 } from '@mui/material'
import DropDownFilter from '../../components/productFilters/DropDownFilter';
import MultiSelecterFilter from '../../components/productFilters/MultiSelecterFilter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSizeFilter, setSortFilter, setTypeFilter } from '../../Store/actions/productActions';
import useProductFilters from '../../util/customHooks/useProductFilter';

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
    const dispach = useDispatch()
    const { sizeFilter, typeFilter, sortFilter } = useSelector((state) => state.productReducer)
    const filteredProducts= useProductFilters(data,sizeFilter, typeFilter, sortFilter) //custom Hook

    const handleSizeFilterOnChange = (userSeletSize, newState) => {
        dispach(setSizeFilter(userSeletSize, newState))
    }

    const handleTypeFilterOnChange = (userSeletType, newState) => {
        dispach(setTypeFilter(userSeletType, newState))
    }

    const hadleSortFilter = (sortOrder) => {
        dispach(setSortFilter(sortOrder))
    }
    useEffect(()=>{
        updateProducts(filteredProducts);
    },[filteredProducts])
    return (
        <Grid2 sx={{
            marginTop: '50px',
            paddingLeft: '20px',
            position: 'sticky',
            top: 150,
            maxHeight: '80vh',        // Set the max height for the sidebar
            overflowY: 'auto',        // Enable vertical scrolling
            background: '#FFFFFF',       // Optional: background for better UX
                     // Optional: ensure it stays above content
              '&::-webkit-scrollbar': {
            display: 'none',
        },
        // Hide scrollbar for IE, Edge and Firefox
        '-ms-overflow-style': 'none',  // IE and Edge
        'scrollbar-width': 'none',     // Firefox
        }} >
            <Grid2  >
                <DropDownFilter title={'Arrange by Price'} value={sortFilter} options={priceFilterOptions} hadleFilter={hadleSortFilter} />
            </Grid2>
            <Grid2>
                <MultiSelecterFilter title={'size'} filterOptions={sizeFilter} handleFilter={handleSizeFilterOnChange} />
            </Grid2>
            <Grid2>
                <MultiSelecterFilter title={'occasion'}  filterOptions={typeFilter} handleFilter={handleTypeFilterOnChange} />
            </Grid2>
        </Grid2>
    )
} 
