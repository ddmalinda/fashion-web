import SectionTitle from '../../components/commen/titles/SectionTitle'
import ProductGrid from './newArrivals/ProductGrid'
import React from 'react'



export default function NewArrivalSection() {
  return (
   <div>
    <SectionTitle title={'new Arrivals'}/>
    <ProductGrid/>
   </div>
  )
}
