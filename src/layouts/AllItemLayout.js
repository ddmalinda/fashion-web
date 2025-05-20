import { Grid2, Typography } from '@mui/material'
import CommoneWrapLayout from '../components/commen/CommoneWrapLayout'
import React, { useCallback, useEffect } from 'react'
import ProductList from './allItems/ProductList'
import ProductFilter from './allItems/ProductFilter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductData, updateProductList } from '../Store/actions/productActions';
import { Animated } from 'react-animated-css';
import FilterAccordion from '../components/productFilters/FilterAccordion';

export default function AllItemLayout() {
    const {loading,originalProductList,displayProductList:productList,error} = useSelector((state)=>state.productReducer);
    const dispach=useDispatch();

    useEffect(()=>{
         window.scrollTo(0, 0);
        if(loading!=='success'){
            dispach(fetchProductData())
        }
        //Empty arry means it will onlty run once when the component mounts
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const updateProducts=useCallback((newProduct)=>{
        dispach(updateProductList(newProduct))
    },[dispach])
    return (
        <CommoneWrapLayout>
            <Grid2 container>

                <Grid2 size={3} sx={{display:{xs:'none',md:'block'} }}>
                <Animated animationIn="bounceInLeft"  isVisible={true}>
                 <ProductFilter data={originalProductList} updateProducts={updateProducts}/>
                </Animated>
                </Grid2>
                <Grid2 size={12} sx={{display:{xs:'block',md:'none'}}}>
                    <FilterAccordion originalProductList={originalProductList} productList={productList} updateProducts={updateProducts} />
                
                </Grid2>
                <Grid2 size={{xs:12,md:9}}>
                    {loading==='notStarted'?(
                        <Typography> Not Started Loading</Typography>
                    ):loading==='loading'?(
                        <Typography>...Loading</Typography>
                    ):loading==='success'?(
                        <ProductList data={productList}/>
                    ):loading==='faliure'?(
                        <Typography>Something Went Wrong While Loading : {error.toString()}</Typography>
                    ):''
                    }
                </Grid2>

            </Grid2>
        </CommoneWrapLayout>
    )
}
