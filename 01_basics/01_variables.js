const accountId = 144553
let accountEmail = "nitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;                 // it will gave undefined
// accountId = 999202   // not allowed it will throw error bcz of const keyword
accountEmail = "hc.com"
accountPassword = "2133"
accountCity = "delhi"
console.log(accountId);
console.table([accountEmail , accountPassword, accountCity, accountState])
/*
donot use var in javascript bcz of issue in block scope and functional scope
 */