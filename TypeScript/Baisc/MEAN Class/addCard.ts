const cart :string[] = [];
const pushToCart= (item:string) => cart.push(item);
function addCart(...productName:string[]):string[]{
    for(const item of productName){
        pushToCart(item);
    }
    return cart;
}
console.log("REST PARAMETERS")
console.log('cart items are:'+addCart('samsung','redmi','oneplus','fasttrack'));