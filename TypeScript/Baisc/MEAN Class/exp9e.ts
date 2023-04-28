function getMobileByManufacturer(manufacturer:string='samsung',id?:number):string[]{
    let mobilelist:string[];
    if(id){
     if(id===101){
         mobilelist=['nokia1','nokia2','nokia3'];
         return mobilelist;
     }
    }
    if(manufacturer==='samsung'){
     mobilelist=['samsung1','samsung2','samsung3'];
     return mobilelist;
    }
    else if(manufacturer==='apple'){
     mobilelist=['apple1','apple2','apple3'];
     return mobilelist;
    }
    else{
     mobilelist=['redmi1','redmi2','redmi3'];
     return mobilelist;
    }
}
console.log('default parameter');
console.log('the avialable mobile list is:'+getMobileByManufacturer('undefined',101));
console.log('optional parameter');
console.log('the avialable mobile list is:'+getMobileByManufacturer('apple'));
console.log('the avialable mobile list is:'+getMobileByManufacturer('cse'));