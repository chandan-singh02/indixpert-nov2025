// Bootstrap + Swiper CSS are loaded via CDN <link> tags in index.html
// (kept ahead of our own styles in the cascade so our overrides always win).
//
// Our SCSS is imported here (not linked as a static .css file) so Vite
// compiles it automatically as part of `npm run dev` / `npm run build` —
// no separate `sass --watch` process needed. The old approach of linking
// a pre-generated src/assets/css/main.css only worked if that file had
// already been compiled by hand, which is why the page rendered unstyled.
import '../scss/main.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Swiper } from 'swiper';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// ---- Doctor's Expertise carousel ------------------------------------------
new Swiper('.expertise-swiper', {
  modules: [Navigation, Pagination, A11y],
  spaceBetween: 24,
  slidesPerView: 1.1,
  navigation: { nextEl: '.expertise-next', prevEl: '.expertise-prev' },
  pagination: { el: '.expertise-pagination', clickable: true },
  breakpoints: {
    576: { slidesPerView: 1.3 },
    768: { slidesPerView: 2.2 },
    992: { slidesPerView: 3.3 }
  }
});

// ---- Testimonials carousel -------------------------------------------------
new Swiper('.testimonials-swiper', {
  modules: [Navigation, Pagination, A11y],
  spaceBetween: 24,
  slidesPerView: 1,
  navigation: { nextEl: '.testimonials-next', prevEl: '.testimonials-prev' },
  pagination: { el: '.testimonials-pagination', clickable: true },
  breakpoints: {
    992: { slidesPerView: 2 }
  }
});

// ---- Blog carousel -----------------------------------------------------------
new Swiper('.blog-swiper', {
  modules: [Navigation, Pagination, A11y],
  spaceBetween: 24,
  slidesPerView: 1.1,
  navigation: { nextEl: '.blog-next', prevEl: '.blog-prev' },
  pagination: { el: '.blog-pagination', clickable: true },
  breakpoints: {
    576: { slidesPerView: 1.3 },
    768: { slidesPerView: 2.2 },
    992: { slidesPerView: 3.2 }
  }
});
