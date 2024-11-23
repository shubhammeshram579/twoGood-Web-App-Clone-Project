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


// navbar animation effect
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


// svg logo opacity shaong with animation
 gsap.to("#main .page6 .imagcon svg", {
    transition: "all ease-in 1s",
    opacity: 1,
    scrollTrigger: {
      trigger: ".page6",
      scroller: "#main",
      start: "top 50%",
      end: "top 70%",
      scrub: 1,
    //   markers:true
    },
  });



// page 4 hover content then open image hover showing
let cards =  document.querySelectorAll(".page4 .card");
let imgs =  document.querySelectorAll(".page4 .card img");

cards.forEach(function(val){
 val.addEventListener("mouseenter",function(){
     val.childNodes[7].style.opacity = 1;
     val.style.color = "#1111115d";
 })
 val.addEventListener("mouseleave",function(){
     val.childNodes[7].style.opacity = 0;
     val.style.color = "#111";
  
 })

 val.addEventListener("mousemove",function(dent){
     val.childNodes[7].style.left = dent.x + "px";
     val.childNodes[7].style.top = dent.y + "px";
 })

});
