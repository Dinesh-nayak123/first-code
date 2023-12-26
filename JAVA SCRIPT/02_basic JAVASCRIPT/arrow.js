const user = {
    username: "kunal",
    price: 567,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to Website`);
        console.log(this);
    }
}
user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

// console.log(this);

// const chai= function() {
//     let username = "kunal";
//     console.log(this.username);
// }


const chai= () => {
    let username = "kunal";
    console.log(this);
}
chai();

// () = {}  this is arrow function
// const addtwo = (num1, num2) => (num1 + num2);  => aei syntax re lekhile return lekhiba darkar nahi
// const addtwo = (num1, num2) => ({username: "kunal"});  => object ku return kariba pain () re object ku rakhibaku padiba
const addtwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addtwo(3, 2));