/* Слик слайдер - альтернатива $(document).ready(function () {
  $(".carousel__inner").slick({
    speed: 1200,
     adaptiveHeight: true, 
     autoplay: true,
    autospeed: 1200,
    fade: true,
    cssEase: "linear", 
     arrows: false, 
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
}); */
$(document).ready(function () {
  const slider = tns({
    container: ".carousel__inner",
    items: 1,
    slideBy: "page",
    autoplay: false,
    controls: false,
    nav: false,
  });

  document.querySelector(".prev").addEventListener("click", function () {
    slider.goTo("prev");
  });

  document.querySelector(".next").addEventListener("click", function () {
    slider.goTo("prev");
  });
  $("ul.catalog__tabs").on(
    "click",
    "li:not(.catalog__tab_active)",
    function () {
      $(this)
        .addClass("catalog__tab_active")
        .siblings()
        .removeClass("catalog__tab_active")
        .closest("div.container")
        .find("div.catalog__content")
        .removeClass("catalog__content_active")
        .eq($(this).index())
        .addClass("catalog__content_active");
    }
  );

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog-item__content")
          .eq(i)
          .toggleClass("catalog-item__content_active");
        $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
      });
    });
  }

  toggleSlide(".catalog-item__link");
  toggleSlide(".catalog-item__back");
  // Modal

  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn("slow");
  });
  $(".modal__close").on("click", function () {
    $(".overlay, #consultation, #thanks, #order").fadeOut("slow");
  });

  $(".button_mini").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
      $(".overlay, #order").fadeIn("slow");
    });
  });

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: "Пожалуйста, введите своё имя",
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Не правильно введён адрес почты",
        },
      },
    });
  }

  validateForms("#consultation-form");
  validateForms("#order form");
  validateForms("#consultation form");

  $("input[name=phone]").mask("+7 (999) 999-9999");

  //Smooth scroll and page up
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $(".pageup").fadeIn();
    } else {
      $(".pageup").fadeOut();
    }
  });

  $("a[href^='#up']").clock(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });

  new WOW().init();
});
