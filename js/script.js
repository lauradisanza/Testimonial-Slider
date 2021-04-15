/* 33 minutes https://www.youtube.com/watch?v=fZlPJxq0kbk */
const next = document.querySelector(".next");
const prev = document.querySelector(".previous");
const slide = document.querySelector(".testimonial");

function nextSlide() {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
}


/*  // Grabbing the whole testimonial sliders
const testimonialSlider = document.querySelector(".testimonials-container");

if (testimonialSlider != null) { //don't want to run this script if the slideshow is not present
  let slides = document.querySelector(".testimonial"), //grab all slides
  slideCount = slides.clientHeight, //count slides (2)
  currentSlide = 0, //give a starting place
  slideHeight = null,

  slides[0].classList.add(".active"); //on load, activate the first slide

  function moveToSlide(n) {
    slides[currentSlide].className = "testimonial";
    currentSlide = (n+slideCount)%slideCount;
    slides[currentSlide].className = "testimonial active";
  }
};

function nextSlide(e){
  moveToSlide(currentSlide+1);
  let code = e.keyCode;
  if( code == 39 ) { //right arrow key
    moveToSlide(currentSlide+1);
  }
};
function prevSlide(e){
  moveToSlide(currentSlide+-1);
  let code = e.keyCode;
  if( code == 37 ) { //left arrow key
    moveToSlide(currentSlide+-1);
  }
};

const slideHandlers = {
  nextSlide: function(element){
    document.querySelector(element).addEventListener('click',nextSlide);
    document.body.addEventListener('keydown',nextSlide, false); // if a key is pressed, attach a listener to find out which one
  },
  prevSlide: function(element){
    document.querySelector(element).addEventListener('click',prevSlide);
    document.body.addEventListener('keydown',prevSlide, false);
  }
}

slideHandlers.nextSlide("#next");
slideHandlers.prevSlide("#previous");

Got this from https://cheewebdevelopment.com/boilerplate-vanilla-javascript-content-slider/ */