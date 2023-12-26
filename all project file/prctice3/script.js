// const btn = document.querySelector('#btn');
// const size = document.querySelector('.img1');
// console.log(size)
// btn.addEventListener('click',function(){
//     size.classList.toggle('hidden')
// })

const btn = document.querySelector('.btn');
btn.addEventListener('click',() => {
    document.querySelector('.img1').classList.toggle('hide')
})