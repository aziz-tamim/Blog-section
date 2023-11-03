$(document).ready(function () {
  var $grid = $(".portfolio-active").isotope({
    itemSelector: ".grid-item",
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 4,
    },
  });
  var $grid = $(".portfolio-act").isotope({
    itemSelector: ".grid-item",
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 3,
    },
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true
        }
    }
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {  
    '1024': {
      slidesPerView: 3,
      spaceBetween: 20,
  },
    '667': {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    '480': {
      slidesPerView: 1,
      spaceBetween: 20,},
  },
});

var swiper = new Swiper(".amySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {  
    '1024': {
      slidesPerView: 3,
      spaceBetween: 20,
  },
    '667': {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    '480': {
      slidesPerView: 1,
      spaceBetween: 20,},
  },
});


});
