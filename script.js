var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dest){
    crsr.style.left=dest.x+"px"
    crsr.style.top=dest.y+"px"
    blur.style.left=dest.x -200 +"px"
    blur.style.top=dest.y -200 +"px"
})
gsap.to(".nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        markers:false,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:false,
        start:"top -30%",
        end:"top -80%",
        scrub:2
    }
})
var h4all=document.querySelectorAll(".nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3;
        crsr.style.border="1px solid #fff";
        crsr.style.backgroundColor="transparent";
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border="0px solid rgb(47, 206, 255"
        crsr.style.backgroundColor="rgb(47, 206, 255";
    })
})
gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})
gsap.from("#banner,#inner-banner",{
    scale:1,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 180%",
        end:"top 100%",
        scrub:1
    }
})
gsap.from("#quoteImg1",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#quoteImg1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#hotels1",{
    x:70,
    y:70,
    scrollTrigger:{
        trigger:"#hotels1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#hotels2",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#hotels2",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#hotels3",{
    x:70,
    y:70,
    scrollTrigger:{
        trigger:"#hotels3",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})