const userEmail = [];
if(userEmail) {
    console.log("got user email");
}else{
    console.log("don't have user email");
}

// falsy values
// false, 0, -0, Bigint 0n, "", null, undefined,NaN  aku chadiki au jaha rahila sabu truthy value

// truthy values
// "0", 'false'," ", [], {}, function(){}

if(userEmail.length === 0) {
    console.log("Array is Empty");
}

const emptyobj = {}
if(Object.keys(emptyobj).length === 0){
    console.log("object is empty");
};

// Nullish Coalescing Operator (??) : null undefind
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
// val1 = null ?? 10 ?? 15;
// note : NCO ra kama hauchi jadi variable re null kimba undefind value thiba ta sei second value ku print kariba
// note2 : aei sabubele first value ku print kare null au undefind ku chadiki


console.log(val1);

// ternary operator
// condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");