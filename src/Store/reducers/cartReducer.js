import { produce } from 'immer';
import * as Action from '../actions/cartActions.js'

const initialState={
    cart:[],

}

const cartReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case Action.ADD_PRODUCT_TO_CART:
            return produce(state,(draft)=>{
                draft.cart.push(actions.payload)
            });
        case Action.REMOVE_PRODUCT_FROM_CART:
            return produce(state,(draft)=>{
                draft.cart=draft.cart.filter((item)=>item.product.id!==actions.payload);
            });
        default:
            return state;
    }
};

export default cartReducer;