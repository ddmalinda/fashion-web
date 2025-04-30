import React from 'react'
import CommoneWrapLayout from '../components/commen/CommoneWrapLayout'
import { Grid2 } from '@mui/material'
import CartItemSection from './cartItem/CartItemSection'
import CheckOutSystem from './cartItem/CheckOutSystem'

const cardItems=[
    {product:{
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
    "/products_2023/055_DSCF0734-Edit-1024x1432.webp" ]
    },
    order:{
        qty:5,
        size:'M'
          }
    },
    {product:{
        id: "01",
    product_name: "Elegant Evening Gown",
    price:120000 ,
    size: ["S", "M", "L"],
    available_quantity: 12,
    rating: 3.6,
    description_one: "Step into effortless elegance with this deep emerald green wrap dress. Featuring a flattering V-neckline, long sleeves, and a flowy asymmetrical hem with delicate ruffle detailing, this dress brings both sophistication and charm. Perfect for weddings, parties, and special occasions.",
    description_two: "This stunning dark green dress combines classic beauty with modern style. The wrap design enhances your silhouette, while the soft, cascading ruffles and high-low hem add movement and flair. Finished with long sleeves and a deep V-neck, it’s ideal for an elegant evening out or as a bridesmaid dress.",
    imageBaseUrl:'https://enme.style/image/cache/wp/gj',
    images:[
      "/products_2025/_DSF0157-Edit-1-1024x1432.webp",
      "/products_2025/_DSF0289-Edit-1024x1432.webp"]
    },
    order:{
        qty:1,
        size:'S'
          }
    }
]

export default function CartLayout() {
  return (
    <CommoneWrapLayout>
        <Grid2>
           <CartItemSection data={cardItems}/>
        </Grid2>
        <Grid2>
          <CheckOutSystem/>
        </Grid2>
    </CommoneWrapLayout>
  )
}
