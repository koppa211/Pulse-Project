$(document).ready(function () {
  $(".carousel__inner").slick({
    speed: 1200,
    /* adaptiveHeight: true, */
    /* autoplay: true,
    autospeed: 1200,
    fade: true,
    cssEase: "linear", */
    /* arrows: false, */
    prevArrow:
      '<button type="button" class="slick-prev"><img src="../img/icons/arrows.png"</button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="../img/icons/right-arrows.png"</button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});
