"use strict";

$(document).ready(function () {
  $(".multiple-items").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>'
  });

  function updatemenu() {
    if (document.getElementById("responsive-menu").checked == true) {
      document.getElementById("menu").style.borderBottomRightRadius = "0";
      document.getElementById("menu").style.borderBottomLeftRadius = "0";
    } else {
      document.getElementById("menu").style.borderRadius = "10px";
    }
  }

  $(".single-item").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});
//# sourceMappingURL=app.js.map
