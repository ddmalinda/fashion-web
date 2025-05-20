import * as Action from '../actions/productActions'
const initialState = {
    loading: "notStarted",
    originalProductList: [],
    displayProductList: [],
    error: null,
    sizeFilter: [
        { label: 'xs', value: false ,name:'Extra small'},
        { label: 's', value: false ,name:'Small'},
        { label: 'm', value: false ,name:'Medium'},
        { label: 'l', value: false ,name:'Large'},
        { label: 'xl', value: false ,name:'Extra Large'},
    ],
    typeFilter: [
        { label: 'wedding', value: false ,name:'Wedding'},
        { label: 'casual/formal hybrid', value: false ,name:'Casual/Formal Hybrid'},
        { label: 'other', value: false,name:'Other' },
        { label: 'formal/evening', value: false,name:'Formal/Evening'},
        { label: 'party', value: false ,name:'Party'},
        { label: 'casual', value: false,name:'Casual'},
        { label: 'cocktail', value: false,name:'Cocktail' }
    ],
    sortFilter:'none'
}


const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case Action.FECTH_PRODUCT_DATA_BEGIN:
            return {
                ...state,
                loading: 'loading'
            }
        case Action.FECTH_PRODUCT_DATA_SUCCESS:
            return {
                ...state,
                loading: 'success',
                originalProductList: [...action.payload],
                displayProductList: [...action.payload],


            }
        case Action.FECTH_PRODUCT_DATA_FALIURE:
            return {
                ...state,
                loading: 'faliure',
                error: action.payload,
            }
        case Action.UPADTE_PRODUCT_LIST:
            return {
                ...state,
                displayProductList: [...action.payload]

            }
        case Action.SET_SITE_FILTER:
            return {
                ...state,
                sizeFilter: state.sizeFilter.map((filter) =>
                    filter.label === action.payload.label
                        ? { ...filter, value: action.payload.value } : filter)
            }
        case Action.SET_TYPE_FILTER:
            return {
                ...state,
                typeFilter:state.typeFilter.map((filter)=>
                    filter.label===action.payload.label
                ?{...filter,value:action.payload.value}:filter
                )

            }
        case Action.SET_SORT_FILTER:
            return {
                ...state,
                sortFilter:action.payload,
            }
        case Action.SET_CLEAN_FILTER:
            return{
                ...state,
                
    sizeFilter: [...initialState.sizeFilter],
    typeFilter: [...initialState.typeFilter],
    sortFilter:'none'
            }

        default:
            return state
    }

}
export default productReducer;