gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: 1,
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();


// gsap.to(".page1 h1", {
//     top: "50%",
//     duration: 2,
//     scrollTrigger: {
//         scroller: "#main",
//         trigger: ".page1",
//         start: "top top",
//         end: "top -70%",
//         scrub: true,
//         markers: true,
//     }
// })
// gsap.to(".page2 h1", {
//     top: "100%",
//     duration: 2,
//     scrollTrigger: {
//         scroller: "#main",
//         trigger: ".page2",
//         start: "top 100%",
//         end: "top -170%",
//         scrub: true,
//         markers: true,
//     }
// })
// gsap.to(".page3 h1", {
//     top: "100%",
//     duration: 2,
//     scrollTrigger: {
//         scroller: "#main",
//         trigger: ".page3",
//         start: "top 200%",
//         end: "top -150%",
//         scrub: true,
//         // markers: true,
//     }
// })
// gsap.to(".page4 h1", {
//     top: "110%",
//     duration: 2,
//     scrollTrigger: {
//         scroller: "#main",
//         trigger: ".page4",
//         start: "top 225%",
//         end: "top -50%",
//         scrub: true,
//         // markers: true,
//     }
// })
// gsap.to(".page5 h1", {
//     top: "100%",
//     duration: 2,
//     scrollTrigger: {
//         scroller: "#main",
//         trigger: ".page5",
//         start: "top 355%",
//         end: "top -100%",
//         scrub: true,
//         // markers: true,
//     }
// })

// document.querySelector(".fullscreen")
// .addEventListener("click",function(){
//     document.querySelector("#main").style.animation = 'load cubic - bezier(0.645, 0.045, 0.355, 1) 1s 1';
// })
var listbox = document.querySelectorAll(".page .listbox")
listbox.forEach(function(e){
    e.addEventListener("mouseenter", mouseloc);
    e.addEventListener("mouseleave", mouseloc);
    function mouseloc(dets){
        const origin = dets.target.clientHeight - dets.offsetY > dets.target.clientHeight / 2 ? 'top':'bottom';
        e.querySelector(".overlay").style.transformOrigin = origin;
    }
})