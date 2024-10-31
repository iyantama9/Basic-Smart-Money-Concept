document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slide");
  let currentIndex = 0;

  function slideShow(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  document.querySelector(".prev").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slideShow(currentIndex);
  });

  document.querySelector(".next").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % slides.length;
    slideShow(currentIndex);
  });

  slideShow(currentIndex);
});