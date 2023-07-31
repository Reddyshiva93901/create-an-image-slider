let slideIndex = 0;
const slides = document.querySelectorAll(".slider img");

function showSlide(index) {
  slides.forEach((slide) => (slide.style.transform = `translateX(-${index * 100}%)`));
}

function changeSlide(n) {
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

// Automatically change slide every 3 seconds
setInterval(() => changeSlide(1), 3000);
