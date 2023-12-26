function displyColor(){
    let colorCode = "123456ABCDEF";
    let randomCode = "#";
    let codeLength = 7;
    while(randomCode.length < codeLength){
        randomCode += colorCode[Math.floor(Math.random() * 12)];
    }
    return randomCode;
}
console.log(displyColor());
console.log(displyColor());
console.log(displyColor());
console.log(displyColor());

const sos = document.querySelector('.sos');
const display = document.querySelector('.display');

sos.addEventListener('click',function(){
    setInterval(changeColor,500);
    function changeColor(){
        display.style.backgroundColor = displyColor();
        console.log(displyColor());
    }
})

// first gote function baneili kain na mate bar bar different hex code darkar
// send re au gote function darkar haba because hex code ku color re convert kariba pain
// third re setInterval method use hela seithie function au time required ta sei thire colorchange function ku add kali
// setInterval re sabu call re different hex code color re convert heiki asiba
// last re click function use kali


