$(document).ready(function () {
  const arrowLeft = `<button class="slide-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>`;
  const arrowRight = `<button class="slide-arrow next-arrow active-arrow"><i class="fas fa-chevron-right"></i></button>`;

  // Promotions
  $(".slider-img").slick({
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,

    prevArrow:
      '<button class="slide-arrow-prom prev-arrow-prom"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button class="slide-arrow-prom next-arrow-prom active-arrow"><i class="fas fa-chevron-right"></i></button>',

    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // Trending brands
  $(".slider").slick({
    arrows: true,
    speed: 1000,
    autoplay: true,
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

  //Gallery section
  $(document).ready(function () {
    $(".gallery-slider").slick({
      autoplay: true,
      arrows: true,
      speed: 1000,
      slidesToShow: 2,
      variableWidth: true,
      prevArrow: arrowLeft,
      nextArrow: arrowRight,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          },
        },
      ],
    });
  });
});

// All categories
const hiddenColumns = document.querySelectorAll(".hidden");

const showBtn = document.querySelector(".show-all-btn");

showBtn.addEventListener("click", () => {
  hiddenColumns.forEach((col) => {
    if (col.classList.contains("hidden-col")) {
      col.classList.remove("hidden-col");
      document.querySelector(".less").style.display = "block";
      document.querySelector(".more").style.display = "none";
    } else {
      col.classList.add("hidden-col");
      document.querySelector(".more").style.display = "block";
      document.querySelector(".less").style.display = "none";
    }
  });
});
// End of All categories
