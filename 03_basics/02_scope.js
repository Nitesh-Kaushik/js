var c = 300;
let d  = 300;
if(true){
    let a = 20;
    let d = 30
    const b = 40;
    var c = 50
    // console.log("Inner: ", d);
}

// console.log( a);   // show a is not defined 
// console.log( b);    // show b is not defined 
// console.log(c);    // will change the value so never use var
// console.log("Outer: ", d);

function one(){
    const username = " Nitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  // will throw error
    two()
}


one()   // two()  will not execute

if(true) {
    const username = "Nitesh"
    if(username == "Nitesh"){
        const website = "youtue"
        console.log(username + website);
    }
    // console.log(website);  // will throw error
}

// ++++++++++  interesting ++++++++++++//

addOne(5)  // this will execute properly
function addOne(num){
    return num +1
}

addOne(5)
addTwo(5)  // this will throw error // Cannot access 'addTwo' before initialization 
const addTwo = function(num) {
    return num +2
}

addTwo(5)

