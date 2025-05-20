const priceValueFormat =(value)=>{
    if (value !== null && value !== undefined) {
        // Convert string/number to float and divide by 100, then fix to 2 decimal places
        const formattedValue = (parseFloat(value) / 100).toFixed(2);
    
        // Split the value into integer and decimal parts
        const [integerPart, decimalPart] = formattedValue.split('.');
    
        // Add commas to the integer part
        const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
        // Return the formatted value with currency symbol
        return 'LKR ' + formattedInteger + '.' + decimalPart;
    } else {
        return '';
    }
}
const getProductImageUrl =(imageBaseUrl,imageArray)=>{
    return imageArray.map((val)=>imageBaseUrl+val);
    
};

const getSelectedOption=(array)=>{
    const temp=[]
    array.forEach(element => {
        if(element.value){
            temp.push(array.label)
        }
    });
    return temp
}

export {getProductImageUrl,priceValueFormat,getSelectedOption};
