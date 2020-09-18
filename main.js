const slides = document.querySelectorAll('.slide');
const carousel = document.querySelector('.carousel');
const SLIDES_COUNT = slides.length;
const leftBtn = document.querySelector('.left__arrow');
const rightBtn = document.querySelector('.right__arrow');
let current_slide = 0;

function updateCarousel() {

};

leftBtn.addEventListener('click', () => {
  current_slide--;
  if(current_slide < 0) {
    current_slide = SLIDES_COUNT - 1;
  }
  updateCarousel();
});

rightBtn.addEventListener('click', () => {
  current_slide++;
  if(current_slide > SLIDES_COUNT - 1) {
    current_slide = 0;
  }
  updateCarousel();
});


