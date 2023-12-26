// for of

// [" ", " ", " "];   array of strings
// [{ }, { }, { }];   array of objects

const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
    console.log(num);
}

const greetings = "Hello World";

for (const greet of greetings) {
    if(greet === " "){
        continue;
    }
    // console.log(greet);
}

// maps

const map = new Map()
map.set('IN', "india");
map.set('USA', "United State Of America");
map.set('Fr', "France");
map.set('IN', "india");

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, '=', value);
// }

// const myObjects = {
//     game1: "pubg",
//     game2: "free fire"
// }
// for (const [key, value] of myObjects) {
//     console.log(key, '=', value);                //aei condition ittrate habani
// }

// const myObjects = {
//     js: "java script",
//     cpp: "c++",
//     rb: "ruby",
//     swift: "swift"
// }
// for (const key in myObjects) {
//     console.log(`${key} shortcut is for ${myObjects[key]}`);
// }

// const programming = ["js", "cpp", "java", "python"];
// for (const key in programming) {
//     console.log(programming[key]);
// }