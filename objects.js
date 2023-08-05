// we can declare objects by following two methods::----

//1-->> using literals
//2-->> using constructor (in this declaration we use singleton)


const my = Symbol("key1")
// following is object literals 
const user = {
    name:"gunjan",
    age:18,
    email:"gvhirani02@gmail.com",
    isLoggedin:false,
    days:["monday","sunday"],
    "full name":"gunjan hirani",
    [my]:"key1"  // syntax of declare value of symbol
}

console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);
console.log(typeof my);
console.log(user[my]); 

Object.freeze(user);  
user.name = "dev";
console.log(user);

user.greeting = function(){
    console.log("hello future gf");
}

console.log(user.greeting); //it gives {function (anonymous)}
console.log(user.greeting()); //it gives "hello future gf"