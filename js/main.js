$(window).on("load", function () {
  $(".loader")
    .delay(200)
    .fadeOut(2000, function () {
      $("body").css("overflow", "auto");
    });
});



$(document).ready(function () {
  "use strict";

  let isRtl = $('html[lang="ar"]').length > 0;

  // select-2 without search
  $(".select-plugin").select2({
    dir: isRtl ? "rtl" : "ltr",
    minimumResultsForSearch: Infinity,
  });

  $(".select").select2({
    dir: isRtl ? "rtl" : "ltr",
  });

    // toggle icon-password
    $(".password-group i").click(function () {
      $(this).toggleClass("active");
      if ($(this).hasClass("active")) {
          $(this).siblings(".main-input").attr("type", "text");
      } else {
          $(this).siblings(".main-input").attr("type", "password");
      }
    });

  // intlTelInput

  if(document.querySelector("#TelInput")){
    var input = document.querySelector("#TelInput");
    window.intlTelInput(input, ({
    }));
  }


  $(':input[type="number"]').on("input", function () {
    var nonNumReg = /[^0-9]/g;
    $(this).val($(this).val().replace(nonNumReg, ""));
  });

  $(".sidebar-anchors li a").each(function () {
    if (window.location.href.includes($(this).attr("href"))) {
      $(this).parent("li").addClass("active");
    }
  });

  // click on navbar-btn to hide sidebar
  $(".navbar-btn").on("click", function () {
    $(".sidebar-menu").toggleClass("move");
    $(".content").toggleClass("move");
    $(".top-nav").toggleClass("move");
  });

  $(".close-ic").on("click", function () {
    $(".sidebar-menu").removeClass("move");
  });

  // click to open form
  $(".responsive-icon-search").click(function () {
    $(".nav-search").addClass("active");
  });

  // click to close form
  $(".nav-search .responsive-filter-x").click(function () {
    $(".nav-search").removeClass("active");
  });

  $(document).on("click", ".stati-card", function () {
    $(".stati-card").removeClass("active");
    $(this).addClass("active");
  });

});
