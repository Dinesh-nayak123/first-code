// let myName = "kunal         ";
// console.log(myName.truelength);

let myHeros = ["thor", "antman"];
let heroPower = {
    thor: "hammer",
    antman: "size change",

    getantPower: function(){
        console.log(`antman power is ${this.antman}`);
    }
}
console.log(heroPower.getantPower());