// smooth scroling using LocomotiveScroll
function locoMotiveScrolling(){
    gsap.registerPlugin(ScrollTrigger);
 const locoScroll = new LocomotiveScroll({
   el: document.querySelector("#main"),
   smooth: true,
    mobile: {
       smooth: true
   },
   tablet: {
       smooth: true
   }
 });
 locoScroll.on("scroll", ScrollTrigger.update);
 
 ScrollTrigger.scrollerProxy("#main", {
   scrollTop(value) {
     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
   }, 
   getBoundingClientRect() {
     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
   },
   
   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
 });
 
 ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
 
 ScrollTrigger.refresh();
 
 };
 
 locoMotiveScrolling();


 
//  navbar scroll page then hide navbar items 
function navscrollanimation(){
    gsap.to(".nav-part1 svg", {
       transform: "translateY(-100%)",
       scrollTrigger: {
         trigger: ".page1",
         scroller: "#main",
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
         scroller: "#main",
         start: "top 0",
         end: "top -5%",
         scrub: true,
       },
     });
 };
 
 navscrollanimation();




// story image hover effect
let storyimg = document.querySelectorAll(".page2 .card1 .storyimg");
let storytext = document.querySelectorAll(".page2 .card1 .storycardtext");


storyimg.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        val.style.scale = 1.05;
        val.childNodes[1].style.opacity = 1 ;
        val.childNodes[1].style.transition = "all ease 1s";
    });
    val.addEventListener("mouseleave",function(){
        val.style.scale = 1;
        val.childNodes[1].style.opacity = 0;
        val.style.transition = "all ease 1s";
    });
});












