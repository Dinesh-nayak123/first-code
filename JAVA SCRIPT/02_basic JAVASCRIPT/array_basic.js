console.log("kunal56");

//arrys
const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["ironman","thor","loki"];

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr[1]);

// array methods

// array re new value add pain push use hua
myArr.push(6);
myArr.push(7);

// // pop array ra last element ku remove karidia
myArr.pop();

//shift & unshift array ra starting ru elemennt add & remove karibaku use hua
myArr.unshift(9);
myArr.shift();

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
console.log(myArr);

// join array ku bind au string ku convert karidia
const newArr = myArr.join();

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice, splice
console.log("A ",myArr);

console.log("B ",myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);

// console.log("C ",myArr);
const myn2 = myArr.splice(1, 3);
console.log("C ",myArr);
console.log(myn2);
