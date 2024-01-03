const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);      // double array
// console.log(marvel_heros[3][1]);  //

// const allHeros = marvel_heros.concat(dc_heros); // take two arrays and and them and gives a new array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9,[10, 11]]]

const another_array_2 = another_array.flat(Infinity) // give a simple array works recursively
// console.log(another_array_2);


console.log(Array.isArray("Nitesh"));
console.log(Array.from("Nitesh"));
console.log(Array.from({name:"Nitesh"}));  // give empty arr // you have to specfy converty what?? key / value

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
