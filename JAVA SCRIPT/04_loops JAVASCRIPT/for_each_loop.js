// const coding = ["js", "cpp", "python", "java"];
// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printme(item) {
//     console.log(item);
// }
// coding.forEach(printme);

// coding.forEach( (item, index, ar, ) => {
//     console.log(item, index, ar);
// } )


// const myCoding = [
//     {
//         laguageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         laguageName: "python",
//         languageFileName: "py"
//     },
//     {
//         laguageName: "cpp",
//         languageFileName: "c++"
//     }
// ]
// // array bhitara object ku foreach use kariki value print technique
// myCoding.forEach( (item) => {
//     console.log(item.laguageName);
// } )

//++++++++++++++++++++++ ** ++++++++++++++++++++++
// aei stntax re value return habani
// const names = ["kunal", "priti", "riya", "pinku", "rohon"];
// const values = names.forEach ( (item) => {
//     console.log(item);
//     return;
// } )

// console.log(values);
// jetebele filter use kariba ta bhitare gote callback function miliba jaouthire 
// sabu value ku each access karajaipariba but ta bhitare gote condition dabaku 
// padiba jouta sei condition ku satisfy kariba sei sabu call back haba au kichi return habani
//exampale
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter( (num) => num > 4 );
// console.log(newNums);

// jadi filter function re { } use haba ta automatic value return habani return lekhibaku padiba
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => {
//     return num > 4} );
// console.log(newNums);

// const newNums = [];
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// } )
// console.log(newNums);



// example of filter
// const books = [
//     { titel: 'Book one', genre: 'friction', publish: 1981, edition: 2004 },
//     { titel: 'Book two', genre: 'Non-friction', publish: 1992, edition: 2008 },
//     { titel: 'Book three', genre: 'history', publish: 1999, edition: 2007 },
//     { titel: 'Book four', genre: 'Non-friction', publish: 1989, edition: 2010 },
//     { titel: 'Book five', genre: 'science', publish: 2009, edition: 2014 },
//     { titel: 'Book six', genre: 'friction', publish: 1987, edition: 2010 },
//     { titel: 'Book seven', genre: 'history', publish: 1986, edition: 1996 },
//     { titel: 'Book eight', genre: 'science', publish: 2011, edition: 2016 },
//     { titel: 'Book nine', genre: 'Non-friction', publish: 1981, edition: 1989 },
// ];

// let userBooks = books.filter( (bk) => bk.genre === 'history'  )
// userBooks = books.filter( (bk) => bk.publish >= 1995 && bk.genre === 'history' )
// console.log(userBooks);

const myNumbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNumbers.map( (num) => {
//     return num + 10;
// } )
// console.log(newNums);
// note: scope open kale return lekhibaku padiba au sigle line re automatic value return haba

// chaining method
const newNums = myNumbers
                .map( (num) => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) => num >= 40 )
console.log(newNums);