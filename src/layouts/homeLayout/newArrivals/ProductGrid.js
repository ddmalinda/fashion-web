import SingleProduct from '../../../components/commen/product/SingleProduct'
import { Grid2 } from '@mui/material'
import React from 'react'
import { getProductImageUrl } from '../../../util/Functions'

var products=[
    {
      id: "01",
      product_name: "Elegant Evening Gown",
      price:120000 ,
      size: ["S", "M", "L"],
      available_quantity: 12,
      rating: 3.6,
      imageBaseUrl:'https://enme.style/image/cache/wp/gj',
      images:[
        "/products_2025/_DSF0157-Edit-1-1024x1432.webp",
        "/products_2025/_DSF0289-Edit-1024x1432.webp"
      ]
    },
    {
      id: "02",
      product_name: "Boho Floral Maxi Dress",
      price:450000,
      size: ["XS", "S", "M", "L", "XL"],
      available_quantity: 20,
      rating: 4.3,
      imageBaseUrl:'https://enme.style/image/cache/wp/gj',
      images:[
        "/products_2023/047_DSCF0614-Edit-1024x1432.webp",
        "/products_2023/055_DSCF0734-Edit-1024x1432.webp"
      ]
    },
    {
      id: "03",
      product_name: "Classic Black Blazer",
      price:300000,
      size: ["M", "L", "XL"],
      available_quantity: 8,
      rating: 2.8,
      imageBaseUrl:'https://n.nordstrommedia.com',
      images:[
        "/it/6bd6600e-e51f-4db4-b52d-77b4f27fc7bb.jpeg?crop=pad&w=780&h=1196&dpr=2",
        "/it/75cd6cfc-62f1-4d03-9490-53983ba6d7d8.jpeg?crop=pad&w=780&h=1196&dpr=2"
      ]
    },
    {
      id: "04",
      product_name: "Denim Streetwear Jacket",
      price: 750000,
      size: ["S", "M", "L", "XL"],
      available_quantity: 15,
      rating: 1.5,
      imageBaseUrl:'https://img01.ztat.net',
      images:[
        "/article/spp-media-p1/1df6cc38c3a44b58b12923e204b90cd6/0cb195eadb2646638c53da009fec03f9.jpg?imwidth=762",
        "/article/spp-media-p1/5603da1afa674587aa0fbb91ee3514f7/cb4ec96ec44f41808eae1b85e1c18b1d.jpg?imwidth=1800"
      ]
    }
  
  ]
export default function ProductGrid() {
  return (
    <Grid2 container spacing={3} justifyContent={'center'}>
        {products.map((val,key)=>{
            const{ product_name, price, size, rating,imageBaseUrl,images}=val;

            const result=getProductImageUrl(imageBaseUrl,images);//get link of images
            console.log(result);
            return (<Grid2 size={{xs:6,sm:3,lg: 3 }} key={key} sx={{pt:{xs:'10px',sm:'20px'},p:{lg:'50px'}}}>
                <SingleProduct product_name={product_name} price={price} size={size} rating={rating} images={result}/>
            </Grid2> 

       ); })}
    </Grid2>
    
  )
}
