const num = 10;   // js automatically accept the type as a Number
console.log(num);

const num1 = new Number(100);  //explicitly declare that this num1 containes the Number type
console.log(num1);

console.log(num1.toString().length);
console.log(num1.toFixed(2));

const num2 = 23.4657;
console.log(num2.toPrecision(6));

const salary = 1000000;
console.log(salary.toLocaleString('en-IN'));

console.log(Math);
console.log(Math.abs(-9));
console.log(Math.round(8.9));
console.log(Math.ceil(4.7));
console.log(Math.floor(8.9));
console.log(Math.min(12,23,34,54));
console.log(Math.max(12,23,34,54));

console.log(Math.random());   // always give 0 to 1 numbers
console.log(Math.random()*10);

const min = 1;
const max = 6;

console.log(Math.round(Math.random()*10) + 1);