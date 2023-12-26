// const elem1 = document.getElementById('elem1');
// const img = document.querySelector('#elem1 img');

// elem1.addEventListener('mousemove',function(dets){
//     img.style.left = dets.x+"px"
    
// })

// elem1.addEventListener('mouseenter',function(){
//     img.style.opacity = 1;
// })

// elem1.addEventListener('mouseleave',function(){
//     img.style.opacity = 0;
// })

const elem = document.querySelectorAll('.elem');
elem.forEach(function(val){
    val.addEventListener('mouseenter',function(){
        val.childNodes[3].style.opacity = 1;
    })
    console.log(val);
    val.addEventListener('mouseleave',function(){
        val.childNodes[3].style.opacity = 0;
    })
    val.addEventListener('mousemove',function(dets){
        val.childNodes[3].style.left = dets.x+"px"
    })
})