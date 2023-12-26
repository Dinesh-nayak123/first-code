let score = "33";
// two types re ame value ra type check karipariba
// console.log(typeof score);
// console.log(typeof (score));
// jadi value string datatype re thiba taku number re convert kariba pain hele 'Number(string value)' method use kara jiba
let point = "100";
let pointInNumber = Number(point);
// console.log(typeof pointInNumber);

// in case 
let mark = "25abc";
let markInNumber = Number(mark);
// console.log(typeof markInNumber);
// console.log(markInNumber);
// jadi variable re number sahita alga letter thiba ta taku Number re convert kale tara typeof number asiba but tara value NaN show haba

// in case
let box = null;
let boxInNumber = Number(box);
// console.log(typeof boxInNumber);
// console.log(boxInNumber);
// jadi variable re null thiba taku Number datatype re change kale number re convert haba au ta value zero'0' show haba

// "33" => 33;              easyly number re convert haba
// "55abc" =>NaN;           NaN re conver haba but typeof number heijiba
// null => 0;               typeof number
// undefind => NaN;         typeof number
// true => 1, false => 1    typeof number

let someNumber = 1;
let inBoolean = Boolean(someNumber);
// console.log(inBoolean);
// console.log(typeof inBoolean);
// cases :- 1 => true, 0 => false, "" => false, "kunal" => true

/*conversion Methods :-
    for number - Number()
    for string - String()
    for boolean - Boolean()
*/

// ****************************Operations****************************
let value = 3;
let negValue = -value;
console.log(negValue);

let str1 = 5;
let str2 = 5;
let str3 = str1 + str2;
console.log(str3);

// gote number au gote string thiba ta seita string type addtion haba
console.log("2" + 2);
console.log(2 + "2");

// addtion time re string first thiba ta tapa number sabu string bhali treat heiki add haba
console.log("2" + 2 + 2);

// jadi numbers first addtion habara thiba ta number addition heiki string addition haba
console.log(2 + 2 + "2");

// console.log(+true);
// console.log(+"");

let gtaScore = 100;
gtaScore++;
console.log(gtaScore);
++gtaScore;
console.log(gtaScore);