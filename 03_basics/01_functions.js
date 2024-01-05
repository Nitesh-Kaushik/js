

// function sayMyName(){
//     console.log("N");
//     console.log("i");
//     console.log("t");
//     console.log("e");
//     console.log("s");
//     console.log("h");
// }

// sayMyName                     // it will not print anything  
// sayMyName();

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
    return number1 + number2          // nothing will execute after return in function 
}

// addTwoNumbers()  // gives NaN    not a number
// addTwoNumbers(3, 4)      // 7
// const result = addTwoNumbers(3, 5)   // this will give undefined if there is no return in function
// console.log("Result: ", result);

function loginuserMessage(userName = "sam" /** default value */){
    if(!userName){  // undefined ==> false
        console.log("Please enter a username");
        return 
    }
    return `${userName} just logged in`
}

// console.log(loginuserMessage());    // this will take undefined

function calculateCartPrice(val1, val2, ...num1 /** ... rest(will take any amount of value and return as a array) */) {
    return num1
}

// console.log(calculateCartPrice(244, 1212, 1313, 1231 , 22112 ,2231, 1131)) // all values which have extra or say greater than no of perameter requeried by function are assign to ... rest value which can be return as array

const user = {
    userName: "Nitesh",
    prices: 122123
}

function handleObject(anyobject){
    return `username is ${anyobject.userName} 
    and price of the item selected is ${anyobject.prices}`
}

console.log(handleObject(user));

const newArray = [200, 400 , 100 , 600]

function returnSecondValue(getArray) {
    return getArray[1]  // will return second value
}

console.log(returnSecondValue([2000, 900, 400, 300, 700] /** newArray */));
