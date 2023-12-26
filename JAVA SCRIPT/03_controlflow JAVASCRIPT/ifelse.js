// if statement
// if(condition) {   //jadi if bhitare thiba condition true hua ta if bhitare jaha achi exicute haba

// }
// opretors <, >, <=, >=, ==, !=, ===, !==
// special case => '==' re khali value check hua but '===' re value and datatype dita jaka chech hua
let isUserLoggedIn = true;
if(2 < 3) {
    isUserLoggedIn = false;
    console.log(isUserLoggedIn);
}

// if else statement

if(2 > 3) {
    isUserLoggedIn = false;
    console.log(isUserLoggedIn);
}
else{
    isUserLoggedIn = true;
    console.log(isUserLoggedIn);
}

/*
const balance = 100;
 if (balance > 500) console.log("test"), console.log("test2");    =>this not good practice to write a code
*/ 

//else if condition
const balance = 651;
if(balance < 500){
    console.log("less than 500");
}else if (balance < 650){
    console.log("less than 650");
}else if (balance < 850){
    console.log("less than 850");
}
else {
    console.log("less than 1000");
}

// && and ||                    & => this is and sign , | => this is pipe sign
// jou jagare && use hua seithi sabu condition true hele value exicute haba au gote condition bi false hua ta value exicute habani
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if(userLoggedIn && debitCard && 2==2){
    console.log("allow to buy");
}
// jou jagare || use hua if bhitare kou gote condition true hele bi value exicute haba
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("allow to buy");
}