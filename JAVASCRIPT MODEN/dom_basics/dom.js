// 4 pillars of DOM

// 1. selection of an Element
// 2. changing HTML
// 3. changing CSS
// 4. Event Listener

const head = document.querySelector('h1');
console.log(head);
head.innerHTML = "barsha bijuli";
head.style.color = "blue"
head.style.backgroundColor = "red"
head.addEventListener('click', function(){
    head.style.backgroundColor = "black"
    head.innerHTML = "king bolte bro"
    head.style.color = "white"
})
let flag = 0;
const bulb = document.querySelector('#bulb');
const btn = document.querySelector('button');
btn.addEventListener('click',function(){
    if(flag == 0){
        bulb.style.backgroundColor = "yellow";
        flag = 1
    }else{
        bulb.style.backgroundColor = "pink";
        flag = 0;
    }
})