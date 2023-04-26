$(function () {
      $('ul.tabs li').click(function () {
        let tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('active');
        $('.tab_content').removeClass('show');

        $(this).addClass('active');
        $('#' + tab_id).addClass('show');
      });
    });

    // swiper
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      loop: true,
      effect: "fade",
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });

    var swiper2 = new Swiper(".mySwiper2", {
      slidesPerView: 1,
      loop: true,
      effect: "fade",
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });

    var swiper3 = new Swiper(".mySwiper3", {
      slidesPerView: 1,
      loop: true,
      effect: "fade",
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });

    var swiper4 = new Swiper(".mySwiper4", {
      slidesPerView: 1,
      loop: true,
      effect: "fade",
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });