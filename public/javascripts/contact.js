// smooth scroling using LocomotiveScroll
function locoMotiveScrolling(){
    gsap.registerPlugin(ScrollTrigger);
 const locoScroll = new LocomotiveScroll({
   el: document.querySelector(".main"),
   smooth: true,
    mobile: {
       smooth: true
   },
   smoothMobile:true,
   tablet: {
       smooth: true
   },
   touchMultiplier:3,
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






// navbar animation effect
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



 // svg logo opacity shaong with animation
 gsap.to(".main .page6 .imagcon svg", {
    transition: "all ease-in 1s",
    opacity: 1,
    scrollTrigger: {
      trigger: ".page6",
      scroller: ".main",
      start: "top 50%",
      end: "top 70%",
      scrub: 1,
    //   markers:true
    },
  });






// page 1 h1 text Animation effect 
gsap.from(".page1 h1", {
    y: 200,
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
    stagger: 0.3
})


    gsap.to(".main .page2", {
    opacity:1,
    transition: "all ease-in 4s",
 });



 