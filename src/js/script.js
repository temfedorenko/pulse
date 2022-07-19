$(document).ready(function () {
   $('.carousel__inner').slick({
      speed: 1200,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
      responsive: [
         {
            breakpoint: 992,
            settings: {
               dots: true,
               arrows: false
            }
         }
      ]
   });
});

// tiny-slader

// const slider = tns({
//    container: '.carousel__inner',
//    items: 1,
//    slideBy: 'page',
//    nav: false,
//    controls: false,
//    speed: 1200,
//    responsive: {
//       992: {
//         edgePadding: 20,
//         gutter: 20,
//       },
//       700: {
//         gutter: 30
//       }
//     }
//  });

//  document.querySelector('.prev').addEventListener('click', function () {
//    slider.goTo('prev');
//  });

//  document.querySelector('.next').addEventListener('click', function () {
//    slider.goTo('next');
//  });