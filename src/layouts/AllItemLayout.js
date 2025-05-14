import { Grid2, Typography } from '@mui/material'
import CommoneWrapLayout from '../components/commen/CommoneWrapLayout'
import React, { useEffect, useState } from 'react'
import ProductList from './allItems/ProductList'
import ProductFilter from './allItems/ProductFilter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductData } from '../Store/actions/productActions';

export default function AllItemLayout() {
    const [product,setProduct]=useState([]);

    const {loading,productList,error} = useSelector((state)=>state.productReducer);

    console.log(productList)
    const dispach=useDispatch();

    useEffect(()=>{
        dispach(fetchProductData())
    },[])
    const updateProducts=(newProduct)=>{
        setProduct(newProduct)
    }
    return (
        <CommoneWrapLayout>
            <Grid2 container>
                <Grid2 size={3}>
                 <ProductFilter data={product} updateProducts={updateProducts}/>
                </Grid2>
                <Grid2 size={9}>
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
