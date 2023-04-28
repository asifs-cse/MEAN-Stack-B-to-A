function getProductDetails(cse) {
    return 'the product name is: ' + cse.productName + 'product id:' + cse.productId;
}
var cseObject = { productId: 1001, productName: 'mobile' };
var productDetails = getProductDetails(cseObject);
console.log(productDetails);
