import { Grid2 } from '@mui/material'
import CommoneWrapLayout from '../components/commen/CommoneWrapLayout'
import React, { useEffect, useState } from 'react'
import ProductList from './allItems/ProductList'
import axios from 'axios';
import ProductFilter from './allItems/ProductFilter';

export default function AllItemLayout() {
    const [product,setProduct]=useState([]);

    const updateProducts=(newProduct)=>{
        setProduct(newProduct)
    }
    useEffect(()=>{
        axios.get('http://cdn.radikadilanka.com:9000/getProducts/v4').then((response)=>{
            setProduct(response.data);
        })
        .catch((e)=>{
            console.log(e);
        })
    },[])
    return (
        <CommoneWrapLayout>
            <Grid2 container>
                <Grid2 size={3}>
                 <ProductFilter data={product} updateProducts={updateProducts}/>
                </Grid2>
                <Grid2 size={9}>
                    <ProductList data={product}/>
                </Grid2>

            </Grid2>
        </CommoneWrapLayout>
    )
}
