//loop

for(let i =1; i<=5; i++){
    console.log(i);
}

let items: number[]=[1,2,3,44,5,4,5,3,3,2,4];

//for loop
for(let i of items){
    console.log(i);
}

//while loop
console.log('while loop');
let i=0;
// while(items[i]){
//     console.log(items[i]);
//     i++;
// }

//do while loop

console.log('do while loop');
do{
    console.log(items[i]);
    i++;
}while(items[i]);