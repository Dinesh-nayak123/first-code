// singleton
// Object.creat  this is singleton method
/*
// object literals
const mySym = Symbol("key1");
const jsUser = {
    name: "kunal",
    "full name": "Dinesh Nayak",
    age: 21,
    [mySym]: "key1",
    location: "Bhubaneswar",
    email: "kunal@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "sunday"]
}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "kunal@google.com";
// Object.freeze(jsUser);
jsUser.email = "kunal@microsoft.com";
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
*/

/*
const tinderUser = new Object();  //singleton object
const tinderUser = {} //non-singleton objects
*/


const tinderUser = {}
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Dinesh",
            lastname: "Nayak"
        }
    }
}
// dot use kariki object ra depth jai print karihaba
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 5: "b"};
/*
const obj3 = { obj1, obj2 };     this method not good
console.log(obj3);
*/
/*
method 2
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);
*/
// spread method most of the cases this will use
const obj3 = {...obj1, ...obj2};
console.log(obj3);

const users = [
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 1,
        email: "k@gmail.com"
    },
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// object array re same value achi ki nahi check hua
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// destucturing method of objects
const course = {
    courseName: "Js in Hindi",
    price: "999",
    courseInstructure:"kunal"
}
// console.log(course.courseInstructure);
const {courseInstructure} = course;
console.log(courseInstructure);

// API (json form) object
// {
//     "courseName": "Js in Hindi",
//     "price": "free",
//     "courseInstructure":"kunal"
// }

[
    {},
    {},
    {}
]

