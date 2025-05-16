import axios from 'axios';

export const FECTH_PRODUCT_DATA_BEGIN = 'FECTH_PRODUCT_DATA_BEGIN';
export const FECTH_PRODUCT_DATA_SUCCESS = 'FECTH_PRODUCT_DATA_SUCCESS';
export const FECTH_PRODUCT_DATA_FALIURE = 'FECTH_PRODUCT_DATA_FALIURE';
export const UPADTE_PRODUCT_LIST = 'UPADTE_PRODUCT_LIST';
export const SET_SITE_FILTER = 'SET_SITE_FILTER';
export const SET_TYPE_FILTER = 'SET_TYPE_FILTER';
export const SET_SORT_FILTER='SET_SORT_FILTER';

const fetchProductData = () => {
    return (dispatch) => {
        dispatch({
            type: FECTH_PRODUCT_DATA_BEGIN

        })

        axios
            .get('http://cdn.radikadilanka.com:9000/getProducts/v4')
            .then((response) => {
                dispatch({
                    type: FECTH_PRODUCT_DATA_SUCCESS,
                    payload: response.data
                })
            })
            .catch((e) => {
                console.log(e);
                dispatch({
                    type: FECTH_PRODUCT_DATA_FALIURE,
                    payload: e,
                })
            })
    };
};

const updateProductList = (prodcutList) => {
    return {
        type: UPADTE_PRODUCT_LIST,
        payload: prodcutList,
    }
}
const setSizeFilter = (label, value) => {
    return {
        type: SET_SITE_FILTER,
        payload: { label, value }
    }

}
const setTypeFilter = (label, value) => {
    return {
        type: SET_TYPE_FILTER,
        payload: { label, value }
    }
}
const setSortFilter=(value)=>{
     return {
        type: SET_SORT_FILTER,
        payload:value,
    }
}
export { fetchProductData, updateProductList, setSizeFilter, setTypeFilter,setSortFilter };