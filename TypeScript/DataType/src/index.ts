//boolean data type
let b: boolean = false;
console.log(b);

//number dta type
let n: number = 10.5;
console.log(n);

//string
let fname: string = "I am Asif shahriar"
fname = "Riya Rahman";
console.log(`Hi ${fname}`);

//array
let items: number[] = [1,3,5,6,7];
console.log(items[3]);

let items2: any[] = [1,3,5,6,'7'];
console.log(items[4]);

//tuple
let t:[string, number][];
t = [
    ["asif", 504],
    ["riya",506],
    ["ayat",507]
];
console.log(t[2][0]);

//enum
enum color{
    red=2,
    green,
    blue=9,
    white
}

console.log(color.red);
console.log(color[3]);
console.log(color.white);
console.log(color.red);


//unknown type
let notSure: unknown = 4;
console.log(notSure);
console.log(typeof(notSure));

let looslyType: any =4;
console.log(looslyType);

//union

let uni: string | number = 6;
console.log(uni);

