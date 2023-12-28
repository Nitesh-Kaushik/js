const name = "Nitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name.toUpperCase()} and my repo count 
is ${repoCount}`);   // String  interpolation

const gameName = new String('Nitesh')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
// console.log(newString);

const anoterString = gameName.slice(-6);   // will start from back
console.log(anoterString);

const newStringOne = "   Nitesh  ";
console.log(newStringOne);
console.log(newStringOne.trim());    // ignore whitespace used for email 


/* go to mdn for more string practice  */