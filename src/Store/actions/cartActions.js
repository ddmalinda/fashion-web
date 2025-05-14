export const ADD_PRODUCT_TO_CART="ADD_PRODUCT _TO_CART";
export const REMOVE_PRODUCT_FROM_CART="REMOVE_PRODUCT_FROM_CART";

const addToCart=(cartItem)=>{
    return{
        type:ADD_PRODUCT_TO_CART,
        payload:cartItem,
    }
}

const removeFromCart=(id)=>{
    return{
        type:REMOVE_PRODUCT_FROM_CART,
        payload:id,
    }
}

export {addToCart,removeFromCart};