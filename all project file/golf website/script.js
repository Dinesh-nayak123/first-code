gsap.to("#nav",{
    backgroundColor : "#000",
    height: "100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:("#mains"),
        scroller:"body",
        markers:true,
        start: "top -50%",
        end:"top -100%",
        scrub:2

    }
});

// const nav = document.getElementById("nav");
const crs = document.querySelector("#cursor");
const blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crs.style.left = dets.x+"px"
    crs.style.top = dets.y+"px"
    blur.style.left = dets.x - 150 +"px"
    blur.style.top = dets.y - 150 +"px"
});

