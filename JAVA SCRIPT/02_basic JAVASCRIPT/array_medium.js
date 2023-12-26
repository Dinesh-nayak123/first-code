const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["batman", "superman", "flase"];

// marvel_heros.push(dc_heros);
console.log(marvel_heros);

// console.log(marvel_heros[3][1]);

// dita array ku merge kariba pain .concat use hua
const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);

// 2nd method array ku merge kariba pain
// spread method use hua
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

// element array ki nuha check kariba pain isArray use hua
console.log(Array.isArray([1, 2, 3, 4]));

// form bhitare jaha bi dia jiba sei taku array ku convert karidaba
console.log(Array.from("kunal"));
console.log(Array.from({name: "kunal"}));   //intresting & important


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));

