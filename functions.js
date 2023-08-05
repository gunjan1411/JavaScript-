function add(a,b){
    add=a+b;
    return add;
}
add(12,23);
console.log(add);

function card(...num){  //here ... is rest 
    return num;
}
console.log(card(200,300,2323));  

function card(var1,var2,...num){  //here ... is rest 
    return num;
}
console.log(card(200,300,2323,6767));  

const user = {
    username : "gunjan",
    price:6797
}

function handleobject(customer){
    console.log('username is' ,$,{customer,username} ,'price is ' ,$,{customer,price});
}

//--------------following is IMP NOTE-----------------

//fuction can be declare two ways 

//1st---
console.log(add(2));
function add(num)   //not give error
{
    return num + 1;
}

console.log(add1(2));  // here it gives error,its concept of hosting and how the js tree works
const add1 = function(num){
    return num + 1;
}