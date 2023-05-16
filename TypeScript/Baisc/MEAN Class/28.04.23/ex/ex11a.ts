interface category{
    categoryName: string;
}

interface product{
    productName: string;
    productId: number;
}

interface productList extends category, product{
    list:Array<string>
}
const productDetails:productList = {
    categoryName :'gedget',
    productName: 'mobile',
    productId: 1234,
    list: ['samsung', 'apple','vivo','oneplus']
}
const list1 = productDetails.list;
const pName: string = productDetails.productName
console.log('product name is: '+pName);
console.log('product list is: '+list1);