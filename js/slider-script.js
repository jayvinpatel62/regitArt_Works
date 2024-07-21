
const swiperSlider1 = new Swiper('.swiper-slider-1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoHeight: false,
  cssMode:true,
  slidesPerView: 1,
  spaceBetween: 35,
 //autoplay: {
    //delay: 2500,
    //disableOnInteraction: true,
 //},                           /*25-02-2023Toral*/
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    480: {
    slidesPerView: 2
    },
    // when window width is >= 768px
    768: {
    slidesPerView: 2
    },
    // when window width is >=1024px
    1024: {
      slidesPerView: 3
    },
    // when window width is >=1200px
    1200: {
      slidesPerView: 4
    }
}, 
  // Navigation arrows
  navigation: {
    nextEl: '.custom-swiper-ctrl.swiper-button-next',
    prevEl: '.custom-swiper-ctrl.swiper-button-prev',
  },

});

  const installationSlider = new Swiper('.installation-slider', {
     // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoHeight: false,
  cssMode:true,
  slidesPerView: 1,
  spaceBetween: 110,
 //autoplay: {
    //delay: 2500,
    //disableOnInteraction: true,
 //},                           /*25-02-2023Toral*/
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    320: {
    slidesPerView: 1
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1400: {
      slidesPerView: 2,
      spaceBetween: 110,
    },
}, 
  // Navigation arrows
  navigation: {
    nextEl: '.custom-swiper-ctrl.swiper-button-next',
    prevEl: '.custom-swiper-ctrl.swiper-button-prev',
  },
});

const ProductSlider = new Swiper('.product-swiper-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoHeight: false,
  cssMode:true,
  centeredSlides: true,
slidesPerView: 'auto',
  lazy: true,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
   // Navigation arrows
  navigation: {
    nextEl: '.custom-swiper-ctrl.swiper-button-next',
    prevEl: '.custom-swiper-ctrl.swiper-button-prev',
  },
});


// $('.product-swiper-slider .custom-swiper-ctrl').hide();
// $('.product-swiper-slider').hover(function() {
//   $('.custom-swiper-ctrl').toggle();
// });

$('.installation-toggle').click(function() {
  $('.installation-wrapper').toggle();
});
  