const manufactures=[{id:'samsung',price:150},{id:'apple',price:200},
                    {id:'google',price:250},{id:'nokia',price:300}]
let test;
function myFunction(){
    test=manufactures.filter(manufactures=> manufactures.price>=200);      
}
myFunction();
console.log("the details of array are:");
for(const item of test)
    console.log(item.id)