class Product1{
    static productPrize = 150;
    private productId:number;
    public productName:string;
    protected productCategory:string;
    constructor(productId,productName,productCategory){
        this.productId=productId;
        this.productName=productName;
        this.productCategory=productCategory;
    }
    getproductId():void{
        console.log("the product id is:"+this.productId);
    }
}
class Gadget extends Product1{
    getproduct():void {
        console.log("product category is:"+this.productCategory);
    }
}
const g = new Gadget(1234,"mobile","oneplus");
g.getproductId();
console.log("product name is:"+g.productName);
g.getproduct();
console.log('product prize is:'+Product1.productPrize);