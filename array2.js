const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);

console.log(marvel_heros);
console.log(marvel_heros[3][0]);

marvel_heros.concat(dc_heros);    //push and concat both had same output
console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);

//use following sprede oprator to join both array...

const real_heros = [...marvel_heros, ...dc_heros];   //here ... is sprede oprator
console.log(real_heros);

//-------

const use_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [11, 12]]];
const real_array = use_array.flat(Infinity);
console.log(real_array);

console.log(Array.isArray("gunjan"));
console.log(Array.from("gunjan"));
console.log(Array.from({ name: "gunj" }));  // it gives [] beacause it will get confuse about what type of array you want means name or value array

let score0 = 1;
let score1 = 2;
let score2 = 3;

console.log(Array.of(score0,score1,score2));