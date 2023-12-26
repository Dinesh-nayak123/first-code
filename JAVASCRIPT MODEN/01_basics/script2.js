// word vs keyword
// normal life re jaha use hua taku word kuha jai but javascript re jaha use hua taku keyword kuha jai like for, if, else,

// var let const 
// code re kounasi bi data store kariba pain jaha use hua taku kuhanti variable. EX-var, const, let use hua

// variables and constants
// variable => jaha ra value change hua taku variable kuhanti
// constants => jaha ra value change kari huani taku constant kuhanti

// hoistting - variable and functions are hoisted which means there declaration is moved on the top of code

// types in js
// primitive and reference
// primitive = number, null, boolean, bigInt, string, symbol
// reference = () [] {}
// amiti jekounasi value jahaku copy kala pare real copy huani kintu seithire value ra reference pass hua, taku ame reference
// value kahu au jahaku copy kale real copy hua taku primitive value kuha jai

// var a = 12;
// var b = a;
// console.log(b);
// console.log(a);
// b = b + 2;
// console.log(b);
// console.log(a);

// var a = [10, 20, 30];
// var b = a;
// b.pop(10);
// console.log(b);
// console.log(a);

// conditionals - if else else-if
// 

// loops - for while
// meaning of loop is repeat
// 1 1 1 1 1 1 1 1 1 
// 1 2 3 4 5 6 7 8 9 
// for loops
// for(let i = 0; i<6; i++){
//     console.log("kunal");
// }
// while loops
// var a = 12;
// while(12<20){
//     console.log(a);
//     a++
// }

// function
// function mane ame kichi bi code ku lekhiki ta name dei pariba au ta pare sei function name ku use kariki bar bar code use karipariba
// functions mainly 3ta kama pain use hua
// 1) jebe ama code ame turant na chaleiki future re chaleibaku chahun
// 2) jebe ame code ku reuse karibaku chahun
// 3) jete bele ame code run karibaku chahun with different data

function playGame(){
    console.log("hi kunal");
    console.log("let's play with me");
}
playGame();

// function num(int){
//     console.log(int + 10);
// }
// num(12)
// arguments = real value jouta ame dau function chaleiba time re
// parameter = variable jouthire value store hua argument ra

// arrays - ame gote variable re kebala gote value store kariba but mutiple value gote variable re rakhiba pain hele array use hua ex- arr = [1, 2, 3]

// push pop shift unshift
var arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.push(7));
// console.log(arr.pop());
// console.log(arr.unshift());
// console.log(arr.shift());
console.log(arr.splice(2,3));

// object 
// ak ru adhika element rakhibaku array kuha jai but gote element ra sabu data rakhibaku object kuhanti
// object mean gote loka/element ra details ku hold kariba , in akey value pair
// 1) blank obj
    var a = {}
// 2) filled obj
    var a = {
        name: "kunal",
        age: 21,
        height:5.7,
        weight:58,
        method: function(){}
    }
    console.log(a.name);
    a.name = "king";
    console.log(a.name);