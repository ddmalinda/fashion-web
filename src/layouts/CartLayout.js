
import CommoneWrapLayout from '../components/commen/CommoneWrapLayout'
import { Grid2 } from '@mui/material'
import CartItemSection from './cartItem/CartItemSection'
import CheckOutSystem from './cartItem/CheckOutSystem'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../Store/actions/cartActions'
import useCartToatalPrice from '../util/customHooks/useCartTotalPrice'




export default function CartLayout() {

  const cardItems = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  
  const hadleRemoveItem = (id) => {
    dispatch(removeFromCart(id))
  }
  const totalPrice=useCartToatalPrice(cardItems);
 
  return (
    <CommoneWrapLayout>
      <Grid2>
        <CartItemSection data={cardItems} hadleRemoveItem={hadleRemoveItem} />
      </Grid2>
      <Grid2>
        <CheckOutSystem totalPrice={totalPrice} />
      </Grid2>
    </CommoneWrapLayout>
  )
}
