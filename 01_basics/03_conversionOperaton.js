let score = "123"
let num = "123bc"

console.log(typeof score);
console.log(typeof(num))
let valueInNumber = Number(num);

console.log(typeof (valueInNumber));
console.log(typeof score);
console.log(valueInNumber);

//  "33" => 33
// "33abc" => NaN
// true => 1;  false => 0

let isLogged = -24
 let booleanIsLogged = Boolean(isLogged)
 console.log(booleanIsLogged);
// 1 => true; 0 => false
// " " => false
// "nitesh" => true
// other than 0(zero) all other value will gave true after coversion // 23 // -23

// console.log(2+2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);

console.log(null >0);    // false
console.log(null == 0);  // false
console.log(null >=0);   // true
/* reson is == (equal) operator and comparision operator
works diff 
comparision convert null to a number, treating it as 0.
that's why (3) null >= 0 is true and (1) null > 0 is false. */

console.log( undefined == 0); // false for all value

// === (strict check)  this will check dataType also

