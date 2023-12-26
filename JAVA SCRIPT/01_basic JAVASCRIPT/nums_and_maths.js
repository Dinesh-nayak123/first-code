
const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

// number ra length dekhiba pain use hua
console.log(balance.toString().length);

// sabu number pare fixed decimal number daba pain use hua
console.log(balance.toFixed(2));

// number ku fixed number pare round-figure kariba pain use hua
const otherNumber = 1123.8966;
console.log(otherNumber.toPrecision(5));

// number count re coma 
const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++maths++++++++++++++++++++++
console.log(Math);
// number ku negative ru positive kariba pain use hua
console.log(Math.abs(-5));
// number ku round-figure kariba pain use hua
console.log(Math.round(3.5));
// .ceil sabubele . purbaru jaha number thiba taku gote plus kariki round-figure kare ex-4.2=5, 5.3=6 ,80.8=81
console.log(Math.ceil(4.2));
// .floor sabubele . purbaru jaha number thiba taku gote minus kariki round-figure kare ex-4.8=4, 20.5=20, 9.9=9
console.log(Math.floor(4.8));

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);