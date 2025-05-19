import React, { useEffect, useState } from 'react'
import CommoneWrapLayout from '../components/commen/CommoneWrapLayout'
import NewArrivalSection from './homeLayout/NewArrivalSection'
import { Grid2 } from '@mui/material'
import ProductImageSlider from './productDetailListLayer/ProductImageSlider';
import { getProductImageUrl } from '../util/Functions';
import ProductDetails from './productDetailListLayer/ProductDetails';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Store/actions/cartActions';

export default function ProductDetailListLayer() {

  const location =useLocation();
  const dispatch= useDispatch()
  const {state}=location;
  const {product}= state;


  //Hooks
  const [selectedSize, setSelectedSize] = useState();
  const [isError, SetIsError] = useState(false);
  const [isLoding, setIsLoding] = useState(false)
  const [qty, setQty] = useState(1)
  

  const handleQtyChange = (newQty) => {
    setQty(newQty)
  }
  const handleSelectedSize = (clickSize) => {
    setSelectedSize(clickSize);
  }

  const hadleAddToCard = () => {
    if (selectedSize) {
      setIsLoding(true)
      SetIsError(false)

      //add to cart 
      const cartItem ={
          product:product,
          order:{
              qty,
              size:selectedSize
          }
      }
      
      dispatch(addToCart(cartItem)) // add to store

      setTimeout(() => {
        setIsLoding(false)
        setQty(1)
        setSelectedSize()
      }, 1000)
    } else {
      SetIsError(true)
    }
  }

   useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <CommoneWrapLayout>
      <Grid2 container spacing={4} sx={{ mb: '40px' }} justifyContent={'flex-start'} >
        <Grid2 size={{ xs: 12, sm: 6, lg: 4 }} sx={{ justifyContent: 'center' }}>
          <ProductImageSlider images={getProductImageUrl(product.imageBaseUrl, product.images)} />
        </Grid2 >
        <Grid2 size={{ xs: 12, sm: 6, lg: 8 }}>
          <ProductDetails
            product={product}
            selectedSize={selectedSize}
            isError={isError}
            qty={qty}
            isLoding={isLoding}
            hadleAddToCard={hadleAddToCard}
            handleQtyChange={handleQtyChange}
            handleSelectedSize={handleSelectedSize}
          />
        </Grid2 >
      </Grid2>
      <NewArrivalSection />
    </CommoneWrapLayout>

  )
}
