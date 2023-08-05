const mynum = [1,2,3,4,5,6,7,8,9,10]

const new1 = mynum.map( (numm) => numm+10)
console.log(new1);

console.log("-------------------");

const new2 = mynum.map( (numm) => numm*10)  //chaining concept means multiple map or filter in one
             .map( (numm) => numm+1)
             .filter( (numm) => numm<=40)
console.log(new2);