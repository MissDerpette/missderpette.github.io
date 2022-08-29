// function splitScroll(){
//     const controller = new ScrollMagic.Controller();

//     new ScrollMagic.Scene({
//         duration: '200%',
//         triggerElement: '.about-title',
//         triggerHook: 0
//     })
//     .setPin('.about-title')
//     // .addIndicators()
//     .addTo(controller);
// }
// splitScroll();

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



var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
