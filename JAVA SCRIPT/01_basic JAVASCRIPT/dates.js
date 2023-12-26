// dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.getHours());
console.log(typeof myDate);

let myCreatedDate = new Date (2023,0,23);
console.log(myCreatedDate.toDateString());

// time stams
let myTimeStamps = Date.now();
// console.log(myTimeStamps);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('defult',{
    weekday: "long",
})