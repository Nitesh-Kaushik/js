// const score = 200
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

// const otherNumber = 123.8946

// console.log(otherNumber.toPrecision(6));   // will gave priority to before decimal digit

// const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // use 'en-IN' for indian standred
 
// Number.MIN_VALUE  // MAX_VALUE // MAX_SAFE_INTEGER

// ++++++++++++ Maths +++++++++++++++++++++++++++++  //

console.log(Math);
/* .abs    .round() 
.ceil()  .floor()    .min()   .max()  

.random()   // always gave value from 0-1
*/ 

console.log(Math.random());
console.log((Math.random()*10) +1);

console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min);