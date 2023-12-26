const button = document.querySelector('#btn');
const para = document.querySelector('#demo1');
button.addEventListener('click',function(){
    console.log("ok");
    // event.target.para.style.display = "none"
    // alert("hi")
    para.innerHTML = "me"

})
const btnbg = document.getElementById('btn-bg');
btnbg.addEventListener('click',function(){
    // console.log(e);
    // console.log(e.target);
    document.getElementById('body').style.backgroundColor = "red";
})



// function myFunction(){
//     document.getElementById('demo1').innerHTML = "hi this is me your friend"
//     document.getElementById('demo2').innerHTML = "my name is kunal"
// }

// let a = 10.500;
// console.log(a);  always fixed a = 10.5

const open = document.getElementById('menu-btn');
open.addEventListener('click',function(){
    console.log("no");
    document.querySelector('.menu-bar').style.display= "block"
    close.style.display = "block"
})

const close = document.getElementById('menu-close');
close.addEventListener('click',function(){
    document.querySelector('.menu-bar').style.display = "none"
    
})