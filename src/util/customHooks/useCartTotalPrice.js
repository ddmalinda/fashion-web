import { useEffect, useState } from 'react'

const useCartToatalPrice=(cardItems)=>{

 const [totalPrice,setTotalPrice]=useState(0) 

  useEffect(() => {
    let total = 0
    cardItems.forEach(element => {
      total=total+(element.product.price*element.order.qty)
    });
    setTotalPrice(total)

},[cardItems])

return totalPrice 
}
export default useCartToatalPrice;