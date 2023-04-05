// Перевірка підтримки webp, додавання класа webp чи no-webp для HTML
// export function isWebp() {
//   // Перевірка підтримки webp
//   function testWebP(callback) {
//     let webP = new Image();
//     webP.onload = webP.onerror = function () {
//       callback(webP.height == 2);
//     };
//     webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
//   }
//   // Додавання класу _webp чи _no-webp для HTML
//   testWebP(function (support) {
//     let className = support === true? 'webp' : 'no-webp';
//     document.documentElement.classList.add(className);
//   });
// }

export function pageWidth() {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

$('select').niceSelect();

// Меню
$("#openbtn").click(function () {
  $('.header').toggleClass('--active');
});

// Polylang
var selected = $('.lang .current-lang img').attr('src');
$('.lang-chose img').attr('src', selected);

$('.lang-chose').click(function(event) {
    $('.lang ul').slideToggle(500);
    event.preventDefault();
    return false;
});

$(document).bind('click', function(e) {
  var $clicked = $(e.target);
  if (! $clicked.parents().hasClass("lang"))
  $(".lang ul").hide();
});

$(".menu-item-has-children").click(function () {
  $(this).children().toggleClass('active');
});

// Слайдери
if ($(window).width() > 992){
  if(document.querySelector('[data-it]')){
    const it_sl = new Swiper('[data-it]', {
      slidesPerView: 5,
      spaceBetween: 92,
      autoHeight: false,
      loop: true,
      speed: 800,
      navigation: {
        prevEl: '.it .it__sl-arrow-prev',
        nextEl: '.it .it__sl-arrow-next',
      },
    });
  };
} else {
  $(".it__sl-item").slice(0, 4).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".it__sl-item:hidden").slice(0, 4).slideDown();
    if($(".it__sl-item:hidden").length == 0) {
      $("#loadMore").hide();
    }
  });
}
if(document.querySelector('[data-whyus]')){
  const whyus_sl = new Swiper('[data-whyus]', {
    slidesPerView: "auto",
    spaceBetween: 0,
    autoHeight: false,
    loop: false,
    speed: 800,
    navigation: false,
    pagination: false,
    // breakpoints: {
    //   // when window width is >= 320px
    //   992: {
    //     slidesPerView: 'auto',
    //     spaceBetween: 0,
    //     slideToClickedSlide: true,
    //   }
    // }
  });
};


if ($(window).width() < 992){
  $(".wwo__item").slice(0, 4).show();
  $("#loadMore_wwo").on("click", function(e){
    e.preventDefault();
    $(".wwo__item:hidden").slice(0, 4).slideDown();
    if($(".wwo__item:hidden").length == 0) {
      $("#loadMore_wwo").hide();
    }
  });

  $(".industries__item").slice(0, 6).show();
  $("#loadMore_ind").on("click", function(e){
    e.preventDefault();
    $(".industries__item:hidden").slice(0, 6).slideDown();
    if($(".industries__item:hidden").length == 0) {
      $("#loadMore_ind").hide();
    }
  });
}

$(".vacancies__item").slice(0, 9).css('display', 'flex');
$("#more_vacancies").on("click", function(e){
  e.preventDefault();
  $(".vacancies__item:hidden").slice(0, 3).slideDown().css('display', 'flex');
  if($(".vacancies__item:hidden").length == 0) {
    $("#more_vacancies").hide();
  }
});

$(".news__item").slice(0, 8).css('display', 'flex');
$("#more_news").on("click", function(e){
  e.preventDefault();
  $(".news__item:hidden").slice(0, 2).slideDown().css('display', 'flex');
  if($(".news__item:hidden").length == 0) {
    $("#more_news").hide();
  }
});

$(".members-item__more").on("click", function(e){
  e.preventDefault();
  $(this).parent().toggleClass('--active')
});
// Form validator
// $( "#login_form" ).validate({
//   errorElement: "span",
//   rules: {
//     login_email: {
//       required: true,
//       email: true,
//     },
//     login_password: {
//       required: true,
//       minlength: 6,
//     }
//   },
//   messages: {
//     login_email: {
//       required: "Error text",
//       email: "Error text",
//     },
//     login_password: {
//       required: "Error text",
//       minlength: "Error text",
//     }
//   }
// });

// Маска телефону
// $("#form_tel").inputmask({"mask": "+38 (999) 999-99-99"});