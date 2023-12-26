/*
const name = "kunal";
const repocount = 50;

// console.log(name + repocount + "value");

//This is string interpolation
console.log(`my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('kunal-hc');

console.log(gamename[6]);
console.log(gamename.length);
console.log(gamename.__proto__);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(5));
console.log(gamename.indexOf("k"));

// string ku start ru lekhiba method  substring() method
const newstring = gamename.substring(0,4);
console.log(newstring);

// string ku end ru lekhiba method  slice()method
const anotherstring = gamename.slice(-1,8);
console.log(anotherstring);

// unused space ku remove kariba pain trim use hua  trim() method
const newstringone = "    kunal    ";
console.log(newstringone);
console.log(newstringone.trim());

// string ra element ku relace kariba pain use hua
const url = "http://kunal.com/dinesh%20nayak";
console.log(url);
console.log(url.replace('%20', '-'));

// string re same key word achi ki nahi search kariba pain
console.log(url.includes('bhai'));

// strink ku split karibare use hua on the basis of our word
const about = "my name is dinesh nayak"
console.log(about.split(' '));
*/
// practice string
let myName = "Chaudar Shingh bhau";

// length check
console.log(myName.length)

// string ra kichi part ku extract kariba pain use hua
console.log(myName.slice(15, 19));
// 
console.log(myName.substring(8, 14));
// replace from string
let newName = myName.replace("bhau", "munda");
console.log(newName);
// replaceAll method
let aboutDog = "dog is animal. my dog name is liku. my dog color is black."
let aboutCat = aboutDog.replaceAll("dog", "cat");
console.log(aboutCat);
// concat method
let name = "dinesh";
let fullName = name.concat(" nayak")
console.log(fullName);

// trim method clean extra space
// note trim method re only outside spaces remove hua text majhi space huani
let viruPaji = "                   run 100                                   ";
let litePaji = viruPaji.trim();
console.log(litePaji);
// padStart and padEnd
let num = "10";
let addNum = num.padStart(7,"kunal");
console.log(addNum);
let end = addNum.padEnd(11 ,"king");
console.log(end);

// charArt 
let char = "my name is king";
console.log(char.charAt(6));

// split() => string ku array re convert karipariba using split (","" space"" |") method ;
let myArr = char.split(" ");
console.log(myArr);