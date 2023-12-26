// the difference between var let const

// var old js re thila (js5 old js)
// var gote function scoped
// var adds itself to the window object

// let new js re achi (js6 new js)
// let gote braces scoped
// let const doesn't adds itself to window object
// example var a = 12;   => a nijaku window re add kariba because of var

// window:-
// js re bahut sara features achi but ame kichi feaatures use karu jouta ki javascript re nahi kintu javascript taku browser ru khojiki amaku sei features use karibaku allow kare sei browser features ku window kuhanti
// example let b = 12;   => b nijaku window re add karibani because of let

// stack:-
// aei gote process jouthire ki line by line code exicute haba

// heap memory:-
// ame jete bi variables ki data banaau taku sei jouthi store hua taku heap memory kuha jai

// exicution context:-
// exicution context is a container where the function's code is executed and it's created whenever a function is called, it contains 3 things variables, functions and lexical environment.
// function ab (){
//     var a = 12;
//     console.log(a);
//     function cd(){
//         var b = 10 + a;
//         console.log(b);
//     }
//     cd()
// }
// ab()

// lexcical environment:-
// lexcical environment gote chart jouthire lekha heithai ki amara particular function kou jinisa ku access kari pariba au koutaku nuha, ta mane it hold's it's scope and scope chain

// how to copy reference values
// spread opreter (...arr) use kariki ame reference value ku copy karipariba 
// var a =[1, 2, 3, 4, 5, 6, 7, 8]
// var b = [...a]
// now b is copied to a
// copy a object
// const obj = {name: "kunal"};
// const objCopy = {...obj};

// truthy and falsy value:-
// js re ame jaha bi lekhu ta value thuthy kimba falsy heba
// falsy value are :- 0, false, undfind, NaN, null, document.all
// baki jaha rahile sabu truthy value

// foreach 
// foreach loop only array upare use hua 
// var a = [1, 2, 3, 6, 7, 8, 9, 15];
// a.forEach(function(num){
//     console.log(num);
// })

// forin loop
// object re loop kariba pain forin loop use hua
// var obj = {
//     name: "kunal",
//     age: 21,
//     city: "paradeep"
// }
// for(var key in obj){
//     console.log(key, obj[key]);
// }

// do while
// var a = 155;
// do {
//     console.log("king");
//     a++;
// }
// while(a<3)

