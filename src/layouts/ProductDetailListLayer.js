import React, { useState } from 'react'
import CommoneWrapLayout from '../components/commen/CommoneWrapLayout'
import NewArrivalSection from './homeLayout/NewArrivalSection'
import { Grid2 } from '@mui/material'
import ProductImageSlider from './productDetailListLayer/ProductImageSlider';
import { getProductImageUrl } from '../util/Functions';
import ProductDetails from './productDetailListLayer/ProductDetails';

var products =
{
  id: "02",
  product_name: "Boho Floral Maxi Dress",
  price: 450000,
  size: ["XS", "S", "M", "L", "XL"],
  available_quantity: 20,
  rating: 4.3,
  description_one: "Step into effortless elegance with this deep emerald green wrap dress. Featuring a flattering V-neckline, long sleeves, and a flowy asymmetrical hem with delicate ruffle detailing, this dress brings both sophistication and charm. Perfect for weddings, parties, and special occasions.",
  description_two: "This stunning dark green dress combines classic beauty with modern style. The wrap design enhances your silhouette, while the soft, cascading ruffles and high-low hem add movement and flair. Finished with long sleeves and a deep V-neck, it’s ideal for an elegant evening out or as a bridesmaid dress.",
  imageBaseUrl: 'https://enme.style/image/cache/wp/gj',
  images: [
    "/products_2023/047_DSCF0614-Edit-1024x1432.webp",
    "/products_2023/055_DSCF0734-Edit-1024x1432.webp"
  ]
}


export default function ProductDetailListLayer() {

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
          product:products,
          order:{
              qty,
              size:selectedSize
          }
      }
      console.log(cartItem)

      setTimeout(() => {
        setIsLoding(false)
        setQty(1)
        setSelectedSize()
      }, 1000)
    } else {
      SetIsError(true)
    }
  }
  return (
    <CommoneWrapLayout>
      <Grid2 container spacing={4} sx={{ mb: '40px' }} >
        <Grid2 size={{ xs: 12, sm: 6, lg: 4 }} sx={{ justifyContent: 'center' }}>
          <ProductImageSlider images={getProductImageUrl(products.imageBaseUrl, products.images)} />
        </Grid2 >
        <Grid2 size={{ xs: 12, sm: 6, lg: 8 }}>
          <ProductDetails
            product={products}
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
