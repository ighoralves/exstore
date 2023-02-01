// import Swiper JS
// import Swiper from "swiper";
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

var swiper = new Swiper(".mySwiper", {
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
  slidesPerView: 1,
  spaceBetween: 10,
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    // clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
