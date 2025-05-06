import SectionTitle from '../../components/commen/titles/SectionTitle'
import ProductGrid from './newArrivals/ProductGrid'
import React from 'react'

var products=[
  {
    id: "01",
    product_name: "Elegant Evening Gown",
    price:120000 ,
    size: ["s", "m", "l"],
    available_quantity: 12,
    rating: 3.6,
    imageBaseUrl:'https://enme.style/image/cache/wp/gj',
    images:[
      "/products_2025/_DSF0157-Edit-1-1024x1432.webp",
      "/products_2025/_DSF0289-Edit-1024x1432.webp"
    ],
    shortDescription:'sadasasdas',
    description:'gfdgdfcascascascas'
  },
  {
    id: "02",
    product_name: "Boho Floral Maxi Dress",
    price:450000,
    size: ["xs", "s", "l", "xl"],
    available_quantity: 20,
    rating: 4.3,
    imageBaseUrl:'https://enme.style/image/cache/wp/gj',
    images:[
      "/products_2023/047_DSCF0614-Edit-1024x1432.webp",
      "/products_2023/055_DSCF0734-Edit-1024x1432.webp"
    ],
    shortDescription:'',
    description:''

  },
  {
    id: "03",
    product_name: "Classic Black Blazer",
    price:300000,
    size: ["m", "l", "xl"],
    available_quantity: 8,
    rating: 2.8,
    imageBaseUrl:'https://n.nordstrommedia.com',
    images:[
      "/it/6bd6600e-e51f-4db4-b52d-77b4f27fc7bb.jpeg?crop=pad&w=780&h=1196&dpr=2",
      "/it/75cd6cfc-62f1-4d03-9490-53983ba6d7d8.jpeg?crop=pad&w=780&h=1196&dpr=2"
    ],
    shortDescription:'',
    description:''
  },
  {
    id: "04",
    product_name: "Denim Streetwear Jacket",
    price: 750000,
    size: ["s", "m", "l", "xl"],
    available_quantity: 15,
    rating: 1.5,
    imageBaseUrl:'https://img01.ztat.net',
    images:[
      "/article/spp-media-p1/1df6cc38c3a44b58b12923e204b90cd6/0cb195eadb2646638c53da009fec03f9.jpg?imwidth=762",
      "/article/spp-media-p1/5603da1afa674587aa0fbb91ee3514f7/cb4ec96ec44f41808eae1b85e1c18b1d.jpg?imwidth=1800"
    ],
    shortDescription:'',
    description:''
  }

]

export default function NewArrivalSection() {
  return (
   <div>
    <SectionTitle title={'new Arrivals'}/>
    <ProductGrid products={products}/>
   </div>
  )
}
