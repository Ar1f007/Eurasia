$(document).ready(function () {
  const arrowLeft = `<button class="slide-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>`;
  const arrowRight = `<button class="slide-arrow next-arrow active"><i class="fas fa-chevron-right"></i></button>`;

  $(".slider").slick({
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    prevArrow: arrowLeft,
    nextArrow: arrowRight,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});
