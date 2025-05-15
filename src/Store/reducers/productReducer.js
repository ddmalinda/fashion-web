import  * as Action from '../actions/productActions'
const initialState={
    loading:"notStarted",
    originalProductList:[],
    displayProductList:[],
    error:null,
}

 
const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case Action.FECTH_PRODUCT_DATA_BEGIN:
        return{
            ...state,
            loading:'loading'
        }
        case Action.FECTH_PRODUCT_DATA_SUCCESS :
        return{
            ...state,
            loading:'success',
            originalProductList:[...action.payload],
            displayProductList:[...action.payload],


        }
        case Action.FECTH_PRODUCT_DATA_FALIURE:
            return{
                ...state,
                loading:'faliure',
                error:action.payload,
            }
        case Action.UPADTE_PRODUCT_LIST:
            return{
                ...state,
                 displayProductList:[...action.payload]

            }
        default:
           return state
    }

}
export default productReducer;