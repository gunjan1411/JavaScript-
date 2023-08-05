let name = "Gunjan Hirani"
let friend = "dev"
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2,4))
console.log(name.slice(3))
console.log(name.replace("Gunjan","Gunju"))
console.log(name.concat(" is a friend of " , friend ));
console.log(name.concat(" is a friend of " , friend , " okayy"));


let friend2 = "        umang"
console.log(friend2.trim());

const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
console.log(eval(s2.valueOf())); // returns the number 4

var arr = []; // not var arr = new Array();
var obj = {}; // not var obj = new Object();

var str = new String("Hello world"); // Uses the JavaScript String object
var str1 = "Hello world" // Uses the TypeScript string type

console.log(typeof str);
console.log(typeof str1);
console.log(str == str1);    //this oprand only do comparies two variables but ignore the datatype of variable
console.log(str === str1);   //this oprand comparies two variables and also datatype of variable

const areEqualInUpperCase = (str1, str2) => str1.toUpperCase() === str2.toUpperCase();
 
const areEqualInLowerCase = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();
  

areEqualInUpperCase("ß", "ss"); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true

