// function declare karibara technique
function myName() {
    console.log("k");
    console.log("u");
    console.log("n");
    console.log("a");
    console.log("l");
}
// myName();     //here myName is reference and () is exiqution

/*
function addTwoNumbers (number1, number2){    // => bracket bhitare jaha achi taku parameters kuhanti
    console.log(number1 + number2);
}
const result = addTwoNumbers(3, 4);                          // => bracket bhitare jaha achi taku argument kuhanti
console.log("result: ", result);
*/

function addTwoNumbers (number1, number2){
    let result = number1 + number2;
    return result;
}
const result = addTwoNumbers(3, 4);
console.log("result: ", result);

function loginUserMessage(username){
    if(!username){                                              // username === undefined jagare !username bi use karipariba
        console.log("please Enter a username");
        return;
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("kunal"));

// ecomers app re adhika use hua add to cart kale value add haba
function calculateCartPrice(...num1) {          //here ...num1 is rest opretor au ta kama hauchi function value ku array ku convert karidaba
    return num1;
}
console.log(calculateCartPrice(200, 400, 500));

const object = {
    username: "kunal",
    price: "199"
}

function handelObject(anyobject) {
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`);
}
// handelObject(user)
handelObject({
    username: "kunal",
    price: 399
})

const myNewArr = [200, 400, 500, 600];
function retutnSecondValue(r) {
    return r[1];
}
retutnSecondValue(myNewArr)
console.log(retutnSecondValue);