function getMobileByVendor(manufacture:string):string[]{
    let mobilelist:string[];
    if(manufacture=='samsung'){
      mobilelist=['samsung galaxy x6edge','samsung galaxy node7','samsung galaxy node9'];
      return mobilelist;
    }
    else if(manufacture=='apple'){
      mobilelist=['iphone10','iphone11','iphone12'];
      return mobilelist;
    }
    else{
      mobilelist=['mi','oneplus','poco'];
      return mobilelist;
    }
}
console.log("the mobile list is:"+getMobileByVendor('one'));