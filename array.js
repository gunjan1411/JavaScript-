const myyary = [0,12,3,4,];
console.log(myyary);

const myarr2 = new Array(1,2,34,3);
console.log(myarr2);

//following is array methods

myarr2.push(23,32);
console.log(myarr2);
myarr2.pop();
console.log(myarr2);

myarr2.unshift(2)  //arrgument is must
console.log(myarr2);
myarr2.shift();    //no need to pass argument
console.log(myarr2);

console.log(myarr2.includes(67));
console.log(myarr2.indexOf(9));

console.log(typeof myarr2);
const arr = myarr2.join()  //conver arrray into string
console.log(arr);
console.log(typeof arr);

//slice , splice

console.log("-----------------------");

console.log("orignal array" , myarr2);

const mna = myarr2.slice(1,3);   //here slice is pointing out to only mna but can't change orignal array
console.log(mna);

console.log("orignal array" , myarr2);

const mna1 = myarr2.splice(1,3);  //here splice is pointing out to main array which is myarr2
console.log("orignal array" , myarr2);
console.log(mna1);