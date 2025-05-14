import axios from 'axios';
export const FECTH_PRODUCT_DATA_BEGIN='FECTH_PRODUCT_DATA_BEGIN';
export const FECTH_PRODUCT_DATA_SUCCESS='FECTH_PRODUCT_DATA_SUCCESS';
export const FECTH_PRODUCT_DATA_FALIURE='FECTH_PRODUCT_DATA_FALIURE';


const fetchProductData=()=>{
    return (dispatch)=>{
        dispatch({
            type:FECTH_PRODUCT_DATA_BEGIN

        })

        axios
        .get('http://cdn.radikadilanka.com:9000/getProducts/v4')
        .then((response)=>{
                    dispatch({
                        type:FECTH_PRODUCT_DATA_SUCCESS,
                        payload:response.data
                    })
                })
                .catch((e)=>{
                    console.log(e);
                    dispatch({
                        type:FECTH_PRODUCT_DATA_FALIURE,
                        payload:e,
                    })
                })
    };
};

export {fetchProductData};