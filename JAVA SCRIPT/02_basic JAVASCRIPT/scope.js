// global scope

if(true){
    const a =10;
    let b = 20;
    var c = 30;
}
console.log(c);
// cruly braces{} jou jai thai taku scope kuhanti
// const and let scope jou jaithai bas setiki jai exicute hua but var scope bahare bi exicute heijai

// neasted scope
function one(){
    const username = "kunal";
    // console.log(username);
    // return username;
    function two(){
        const website = "youtube";
        console.log(username);
    }
    two();
}
// console.log(one());
one()


// ++++++++++++++++++++++ intresting ++++++++++++++++++++++

function addone(num) {
    return num + 1;                //aei method re function variable re store habani
}
console.log(addone(5));

const addtwo = function (num) {    //aei method re function variable re store haba but variable declare kala purbaru value pass kale error daba 
    return num + 2;                //this method is called Hoisting function
}
console.log(addtwo(50));