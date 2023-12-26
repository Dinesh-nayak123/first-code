// generate a random color
const randomColor = function(){
    const hex = '123456789ABCDEF'
    let color = '#';
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random()*15)];
    }
    return color;
};
console.log(randomColor());

let intervalId;
const startChangingColor =function(){
    if(!intervalId){
        intervalId = setInterval(bgcolor,200);
    }
    function bgcolor(){
        document.body.style.backgroundColor = randomColor();
    }
    
}
const stopChangingColor =function(){
    clearInterval(intervalId);
    intervalId = null;
}
document.querySelector('#start').
addEventListener('click',startChangingColor)

document.querySelector('#stop').
addEventListener('click',stopChangingColor)