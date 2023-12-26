const btn = document.querySelector('.btn');
const bgImg = document.querySelector('.toggle-img')
btn.addEventListener('click',function(){
    bgImg.classList.toggle('hide')
    console.log(bgImg.classList.toggle);
})