const email=[]

if(email)
{
    console.log("got");
}
else{
    console.log("not got");
}

// falsy value: false,0,-0,BigInt 0n,"",null,undefined,NaN
// truely vale : "0",'false'," ",{},[],function(){}

//foolowing is demonstration of array or object is empty or not

const emptyobj = {}

if(Object.keys(emptyobj).length === 0)
{
    console.log("object is empty");
}


const emptyarr = []

if(Object.keys(emptyarr).length === 0)
{
    console.log("array is empty");
}

console.log(false == 0);
console.log(false == "");
console.log(0 == '');


//nullish coalescing operator (??): ------------>>>>>>>>>>> null , undefined

let n = 5??10
let n1 = null??10
let n2 = undefined??18
let n3 = null??12??89

console.log(n);
console.log(n1);
console.log(n2);
console.log(n3);

//turnary oprator
const tea = 100

tea <=80 ? console.log("purchase") : console.log("fuck");