// Initialize Swiper Slider
// Set Landing Page Slider
new Swiper(".swiper-landing", {
  parallax: true,
  effect: "fade",
  centeredSlides: true,
  loop: true,
  spaceBetween: 10,
  speed: 1400,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".pagination",
    clickable: true,
  },
});

new Swiper(".product-slider", {
  slidesPerView: 1,
  spaceBetween: 21,
  loop: true,
  speed: 1300,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    720: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
