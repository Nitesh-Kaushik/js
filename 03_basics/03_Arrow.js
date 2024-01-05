const user = {
    userName: "Nitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()

// console.log(this)   // this will print {}   // in browser it will print window

function chai(){
    let username = "Nitesh"
    // console.log(this.userName);   // this will throw undefined
    console.log(this);   // **** this will print something 
}
// chai()

const chai2 = () => {
    let username = "Nitesh"
    console.log(this);    //*** */    // same as regular object 
}

// chai2()

// const addTwo  = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2  // implecit return

// const addTwo = (num1, num2) => ( num1 + num2 )
const addTwo = (num1, num2) => ( {userName: "Nitesh"} ) // for object you have to wrap them in {}

console.log(addTwo(3, 4));

// const myArray =  [2, 5, 3, 7, 8]
// myArray.foreach(() => ())

/**   +++++ Immediately Invoked Function Expressions (IIFE) */
 
/** reson for using  kafi baar glbaol scope k variable se dikat hote h toh isse immmdiately execute karne k liye */
(function fog(){
    // named IIFE   
    console.log(`DB CONNECTED`);
})();     // use semicolom here *********

( (name) => {
        console.log(`DB CONNECTED TWO ${name}`);
})('nitesh');
