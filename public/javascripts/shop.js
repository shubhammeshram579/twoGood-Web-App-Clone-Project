// smooth scroling using LocomotiveScroll
function locoMotiveScrolling(){
    gsap.registerPlugin(ScrollTrigger);
 const locoScroll = new LocomotiveScroll({
   el: document.querySelector(".main"),
   smooth: true,
    mobile: {
       smooth: true
   },
   tablet: {
       smooth: true
   }
 });
 locoScroll.on("scroll", ScrollTrigger.update);
 
 ScrollTrigger.scrollerProxy(".main", {
   scrollTop(value) {
     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
   }, 
   getBoundingClientRect() {
     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
   },
   
   pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
 });
 
 ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
 
 ScrollTrigger.refresh();
 
 };
 
 locoMotiveScrolling();


// navbar scroll then hide effect
 function navscrollanimation(){
    gsap.to(".nav-part1 svg", {
       transform: "translateY(-100%)",
       scrollTrigger: {
         trigger: ".page1",
         scroller: ".main",
         start: "top 0",
         end: "top -5%",
         scrub: true,
       },
     });
    
    gsap.to(".nav-part2 .link #cat", {
       transform: "translateY(-100%)",
       opacity: 0,
       scrollTrigger: {
         trigger: ".page1",
         scroller: ".main",
         start: "top 0",
         end: "top -5%",
         scrub: true,
       },
     });
 };
 
 navscrollanimation();
 

// shop lending page effect
 function loadingani(){
    gsap.from(".page1 .card1 h1,.page1 .card2 p",{
       y:100,
       opacity:0,
       delay: 0.5,
       duration:0.7,
       stagger:0.3
    })
 
 } 
 
 
 loadingani();
 



// product pages aniamtion effect
function productPageAnimation(){


 gsap.to(".page2", {
    transition: "all ease-in 0.3s",
    opacity: 1,
    scrollTrigger: {
      trigger: ".page2",
      scroller: ".main",
      start: "top 20%",
      end: "top 50%",
      scrub:1,
    //   markers:true
    },
  });

 gsap.to(".page3", {
    transition: "all ease-in 0.3s",
    opacity: 1,
    scrollTrigger: {
      trigger: ".page3",
      scroller: ".main",
      start: "top 20%",
      end: "top 50%",
      scrub:1,
    //   markers:true
    },
  });

 gsap.to(".page4", {
    transition: "all ease-in 0.3s",
    opacity: 1,
    scrollTrigger: {
      trigger: ".page4",
      scroller: ".main",
      start: "top 20%",
      end: "top 50%",
      scrub:1,
    //   markers:true
    },
  });

  gsap.to(".page6 .imagcon svg", {
    transition: "all ease-in 1s",
    opacity: 1,
    scrollTrigger: {
      trigger: ".page6",
      scroller: ".main",
      start: "top 65%",
      end: "top 70%",
      scrub: 1,
    //   markers:true
    },
  });


}

productPageAnimation();




// mouse cercul move effect

function mouseEnderCurcleAnimation(){
  document.addEventListener("mousemove", function(dets){
    gsap.to(".curcer",{
       left: dets.x,
       top: dets.y
    })
 })


  var imgchild2 = document.querySelectorAll(".chaids");
 
  imgchild2.forEach(function(val){
     val.addEventListener("mouseenter",function(){
        gsap.to(".curcer",{
                 transform: 'translate(-50%,-50%) scale(1)'
              })
     })
  
     val.addEventListener("mouseleave",function(){
        gsap.to(".curcer",{
                 transform: 'translate(-50%,-50%) scale(0)'
              })
     })
  });

}

mouseEnderCurcleAnimation()

  