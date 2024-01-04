// literals and constructure

// singleton

// object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "Hitesh",
    age: 30,
    "full name": "Nitesh Kaushik",
    [mySym]: "myKey1",
    location: "Jaipur",
    email: "Nitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser[email]);   // will throw error bcz it takes string 
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);   //  *** it takes value as String 

// console.log(jsUser[mySym]);

jsUser.email = "Nitesh@yahoo.com"

// Object.freeze(jsUser)   // it will freeze the object i.e no value can be changed

jsUser.email = "Nitesh@microsoft.com"
console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello Js user");
}

jsUser.greetingTwo = function () {
    console.log(`Hello Js user, ${this.name}`);
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

