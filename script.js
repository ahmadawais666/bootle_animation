function logomotive(){
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
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
}

logomotive();

// scrolling effect of bottle:


gsap.to("#bottle",{
    rotation:-15,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#bottle",
        start:"top top",
        end:"top -406%",
        scrub:true,
        pin:true,
        // markers:true
    }
})
gsap.to("#bottle",{
    scale:0.5,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page5 h1",
        start:"top 430%",
        end:"top -430%",
        scrub:true,
        pin:true,
        markers:true
    }
})

let tl = gsap.timeline()

tl.to('#bottle',{
    opacity:1,
    scale:1.2,
    scrub:2,
})
tl.to('#page1_img',{
    opacity:1,
    scale:1.1,
    scrub:3
})
let btn = document.querySelector('button');
function buyBeer(){
    gsap.to(".anime",{
        y:"10%",
        ease:"power2.inOut",
        highestZ:1,
        yoyo:true
    })
    // btn.innerHTML = 'Close';
    btn.style.display = 'none';
    console.log('helo');
}
function byBeer(){
    gsap.to(".anime",{
        y:"-120%",
        ease:"power2.inOut",
        highestZ:2
    })
    btn.innerHTML = "Close";
    btn.innerHTML = 'Close';
}