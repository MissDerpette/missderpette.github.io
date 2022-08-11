function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.about-title',
        triggerHook: 0
    })
    .setPin('.about-title')
    // .addIndicators()
    .addTo(controller);
}
splitScroll();

const navSlide = () => {
    const burger = document.querySelector ('.burger');
    const nav = document.querySelector ('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
   

    burger.addEventListener('click', () => {
         //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
         navLinks.forEach((link, index) => {
               if (link.style.animation) {
                   link.style.animation = '';
              } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards 
                    ${index / 7 + 0.3}s`
              }
                
          });
            //Burger Animation
            burger.classList.toggle('toggle');
     });
}

navSlide();

const parallax = document.getElementById("parallax");

window.addEventListener('scroll', function () 
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
})