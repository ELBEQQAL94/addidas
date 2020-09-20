const slides = document.querySelectorAll('.slide');
const carousel = document.querySelector('.carousel');
const SLIDES_COUNT = slides.length;
const leftBtn = document.querySelector('.left__arrow');
const rightBtn = document.querySelector('.right__arrow');
let current_slide = 0;

function updateCarousel() {

};

rightBtn.addEventListener('click', () => {
  current_slide--;
  if(current_slide < 0) {
    current_slide = SLIDES_COUNT - 1;
  }
  updateCarousel();
});

leftBtn.addEventListener('click', () => {
  current_slide++;
  if(current_slide > SLIDES_COUNT - 1) {
    current_slide = 0;
  }
  updateCarousel();
});

function updateCarousel() {
  carousel.style.transform = `translateX(${-current_slide * slides[0].offsetWidth}px)`;
  document.body.style.background = slides[current_slide].getAttribute('data-bg');s
}
