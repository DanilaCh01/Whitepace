import './scss/main.scss';

import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  slidesPerView: 1,
  spaceBetween: 50,
  initialSlide: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 1.5,
      spaceBetween: 0,
      initialSlide: 0,
      enabled: false,
    },
    1152: {
      slidesPerView: 3,
      spaceBetween: 0,
      enabled: false,
    },
  },
});

const review = new Swiper('.review', {
  modules: [Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 50,
  initialSlide: 2,
  speed: 600,

  navigation: {
    nextEl: '.review-btn-next',
    prevEl: '.review-btn-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  centeredSlides: true,

  // DRY: Avoid code duplication by defining common settings outside of breakpoints
  breakpoints: {
    768: {
      slidesPerView: 2.05,
      spaceBetween: 0,
      initialSlide: 2,
      enabled: true,
    },
    1152: {
      slidesPerView: 3.08,
      spaceBetween: 4,
      initialSlide: 2,
      centeredSlides: true,
      pagination: {
        enabled: false,
      },
      navigation: {
        enabled: true,
      },
    },

    1440: {
      slidesPerView: 2.93,
      spaceBetween: 0,
      initialSlide: 1,
      enabled: true,
      centeredSlides: true,
      pagination: {
        enabled: false,
      },
      navigation: {
        enabled: true,
      },
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 0,
      initialSlide: 1,
      enabled: true,
      centeredSlides: true,
      pagination: {
        enabled: false,
      },
      navigation: {
        enabled: true,
      },
    },
  },
});
