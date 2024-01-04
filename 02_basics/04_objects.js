// const tinder = new Object()    // singleton objects
// console.log(tinder);

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// can use nested objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Nitesh",
            lastName: "Kaushik"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = { obj1, obj2}  // same as arrays it will make a object with these two iject iside

const obj3 = Object.assign({},obj1, obj2)  // return target object // {}  this is optional

const obj4  = {...obj1, ...obj2, ...obj3}  // spread

// ***********   a object cannot have same value pair or multiple copies 
// console.log(obj3);
// console.log(obj4);      

const user = [
    {
        id: "123mcn",
        email: "nitesh@gmail.ocm"
    },
    {
        id: "123mcn",
        email: "nitesh@gmail.ocm"
    },
    {
        id: "123mcn",
        email: "nitesh@gmail.ocm"
    },
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("ajkbh"));  // return boolean type


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Nitesh"
}

// course.courseInstructor

const  {courseInstructor} = course;
const  {courseInstructor: instructor} = course;


console.log(courseInstructor);
console.log(instructor);


// ***********  in react ************//

// const navbar = ({company}) => {    // destructuring

// }

// navbar(company = "Nitesh")
//**************************************//


