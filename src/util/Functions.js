const getProductImageUrl =(imageBaseUrl,imageArray)=>{
    return imageArray.map((val)=>imageBaseUrl+val);
};

export {getProductImageUrl};
