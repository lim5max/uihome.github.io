
window.addEventListener("load", function(){
    //const elem = document.querySelector("#header");
    gsap.from('.header-first', {opacity: 0, duration: 2, y: -50});

    gsap.from('.header-second', {opacity: 0, duration: 2, y: 50});
    gsap.registerPlugin(ScrollTrigger);
    
    // ScrollTrigger.defaults({
    // toggleActions: "restart pause resume pause"
    // });
    ScrollTrigger.create({
        trigger: ".first-scroll",
        start: "top top",
        endTrigger: "main",
       
        onToggle: self => console.log("toggled, isActive:", self.isActive),
        onUpdate: self => {
          if(self.progress > 0.01){
            const julie = document.querySelector('julie');

            // julie.scrollIntoView(true);
            gsap.to('.second-section', {duration: 2})
          }
        }
      });
      ScrollTrigger.addEventListener("update", function() {
        console.log(1)
    });    
})
const header = document.querySelector("header");
    console.log(header)
    let sticky = header.offsetDown;
    
    function headers() {
    if (window.pageYOffset < sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
    }
    headers()
const menu = document.querySelector('#menu');
const closeMenu = document.querySelector('#closeMenu')
menu.addEventListener("click", function(){

})
// closeMenu.addEventListener("click", function(){

// })