interface product{
    productId:number;
    productName:string;
}

function getProductDetails(cse:product):string{
    return 'the product name is: '+cse.productName+'product id:'+cse.productId;
}

const cseObject = {productId: 1001, productName: 'mobile'};
const productDetails:string = getProductDetails(cseObject);
console.log(productDetails);