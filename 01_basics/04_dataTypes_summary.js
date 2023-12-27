// Primative

// 7 Types : String, Number, Boolean, null, undefined, Symbol
//            BigInt

  const score = 100;        // NUMBER
  const scorevALUE =100.56;  // NUMBER

  const isLoggedIn = false;
  const outsideTemp =  null;
//   const userEmail   // will trow error
let userEmail

const id = Symbol('123');
const anotherId =  Symbol('123');

console.log(id === anotherId);  // false

const bigNumber = 234343n;
console.log(typeof(bigNumber));
// Reference (non primative)

// Array, Object, Functions
const heros = ["shaktiman", "naagraj", " superman"]

let obj = {
    name : "nitesh",   // key:value
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof (heros, obj, score));  // gives datatype of last variable
