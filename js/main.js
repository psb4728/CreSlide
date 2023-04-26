$(function () {
  $('ul.tabs li').click(function () {
    let tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('active');
    $('.tab_content').removeClass('show');

    $(this).addClass('active');
    $('#' + tab_id).addClass('show');
  });

  // 성별
  $('ul.gender_tab1 li').click(function () {
    let gender_id = $(this).attr('data-gender');

    $('ul.gender_tab1 li').removeClass('active');
    $('.swiper.swiper1').removeClass('show');

    $(this).addClass('active');
    $('#' + gender_id).addClass('show');
  });

  $('ul.gender_tab2 li').click(function () {
    let gender_id = $(this).attr('data-gender');

    $('ul.gender_tab2 li').removeClass('active');
    $('.swiper.swiper2').removeClass('show');

    $(this).addClass('active');
    $('#' + gender_id).addClass('show');
  });

  $('ul.gender_tab3 li').click(function () {
    let gender_id = $(this).attr('data-gender');

    $('ul.gender_tab3 li').removeClass('active');
    $('.swiper.swiper3').removeClass('show');

    $(this).addClass('active');
    $('#' + gender_id).addClass('show');
  });

  $('ul.gender_tab4 li').click(function () {
    let gender_id = $(this).attr('data-gender');

    $('ul.gender_tab4 li').removeClass('active');
    $('.swiper.swiper4').removeClass('show');

    $(this).addClass('active');
    $('#' + gender_id).addClass('show');
  });

  $('ul.gender_tab5 li').click(function () {
    let gender_id = $(this).attr('data-gender');

    $('ul.gender_tab5 li').removeClass('active');
    $('.swiper.swiper5').removeClass('show');

    $(this).addClass('active');
    $('#' + gender_id).addClass('show');
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

var swiper4 = new Swiper(".mySwiper5", {
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