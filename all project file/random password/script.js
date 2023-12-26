const randompassword = document.getElementById('password')
const btn = document.getElementById('btn')
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "123456789";
const symbol = "~!@#$%^&*()_+=-*/<>}{[]";

let allchars = upperCase + lowerCase + number + symbol
let length = 10;
btn.addEventListener('click',function(){
    console.log("hi");
    let password = "";
    while(length > password.length){
        password = password + allchars[Math.floor(Math.random() * allchars.length)]
    }
    randompassword.value = password;
})

const copy = document.querySelector('.display img');
copy.addEventListener('click',function(){
    password.select()
})


// atiki practice pare atiki hela 
// const allchars = upperCase + lowerCase + number + symbol;
// console.log(allchars);
// const length = 10;
// // console.log(allchars.length);
// // console.log(Math.random());
// // console.log(Math.random()*allchars.length);
// // console.log(Math.floor(Math.random()*allchars.length));
// let password = "";
// while(length > password.length){
//     password = password + allchars[Math.floor(Math.random()*allchars.length)]
// }
// console.log(password);

// console.log(allchars[Math.floor(Math.random()*allchars.length)]);
// console.log(Math.floor(Math.random()*allchars.length));

