console.log(null < 0);
console.log(null > 0);
console.log(null <= 0);   //  here null is like 0 
console.log(null >= 0);   //  here null is like 0 

console.log(undefined< 0);
console.log(undefined > 0);
console.log(undefined<= 0);   
console.log(undefined >= 0);   

let id = Symbol("123")
let id2 = Symbol("123")

console.log(typeof id);
console.log(id == id2);

const date = new Date("2023-07-27");     //valide date formate
const date2 = new Date("27-07-2023")     //not valide date formate

console.log(date);
console.log(typeof date);
console.log(date2);
console.log(typeof date2);

console.log(1 +  2 + "gunj");
console.log("gunj" + 1 +  2);
console.log(1 + "gunj");
console.log("gunj" + 1 );

const fun = function(){
        console.log("in the function");
}
fun()

console.log(typeof fun);