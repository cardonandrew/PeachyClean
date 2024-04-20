jQuery(document).ready(function ($) {
  // Header fixed and Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
      $("#header").addClass("header-fixed");
    } else {
      $(".back-to-top").fadeOut("slow");
      $("#header").removeClass("header-fixed");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  // Initiate the wowjs
  new WOW().init();

  // Initiate superfish on nav menu
  $(".nav-menu").superfish({
    animation: {
      opacity: "show",
    },
    speed: 400,
  });

  // Mobile Navigation
  if ($("#nav-menu-container").length) {
    var $mobile_nav = $("#nav-menu-container").clone().prop({
      id: "mobile-nav",
    });
    $mobile_nav.find("> ul").attr({
      class: "",
      id: "",
    });
    $("body").append($mobile_nav);
    $("body").prepend(
      '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>'
    );
    $("body").append('<div id="mobile-body-overly"></div>');
    $("#mobile-nav")
      .find(".menu-has-children")
      .prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on("click", ".menu-has-children i", function (e) {
      $(this).next().toggleClass("menu-item-active");
      $(this).nextAll("ul").eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on("click", "#mobile-nav-toggle", function (e) {
      $("body").toggleClass("mobile-nav-active");
      $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
      $("#mobile-body-overly").toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smoth scroll on page hash links
  $('a[href*="#"]:not([href="#"])').on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($("#header").length) {
          top_space = $("#header").outerHeight();

          if (!$("#header").hasClass("header-fixed")) {
            top_space = top_space - 20;
          }
        }

        $("html, body").animate(
          {
            scrollTop: target.offset().top - top_space,
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".nav-menu").length) {
          $(".nav-menu .menu-active").removeClass("menu-active");
          $(this).closest("li").addClass("menu-active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }
        return false;
      }
    }
  });

  // Porfolio filter
  $("#portfolio-flters li").click(function () {
    $("#portfolio-flters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    var selectedFilter = $(this).data("filter");
    $("#portfolio-wrapper").fadeTo(100, 0);

    $(".portfolio-item").fadeOut().css("transform", "scale(0)");

    setTimeout(function () {
      $(selectedFilter).fadeIn(100).css("transform", "scale(1)");
      $("#portfolio-wrapper").fadeTo(300, 1);
    }, 300);
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
  });

  // custom code
});

// Get the modal
let calendarmodal = document.getElementById("calendarframe");

// Get the button that opens the modal
let btn = document.getElementById("btn-booking");

// Get the <span> element that closes the modal
let span = document.getElementById("closebtn");

let booknow = document.getElementById("booknowbtn");
let booknow2 = document.getElementById("booknowbtn2");
let booknow3 = document.getElementById("booknowbtn3");
let booknow5 = document.getElementById("booknowbtn5");
let booknow7 = document.getElementById("booknowbtn7");

booknow.onclick = function () {
  calendarmodal.style.height = "700px";
  btn.style.display = "none";
  span.style.display = "block";
};

booknow2.onclick = function () {
  calendarmodal.style.height = "700px";
  btn.style.display = "none";
  span.style.display = "block";
};

booknow3.onclick = function () {
  calendarmodal.style.height = "700px";
  btn.style.display = "none";
  span.style.display = "block";
};

booknow5.onclick = function () {
  calendarmodal.style.height = "700px";
  btn.style.display = "none";
  span.style.display = "block";
};
booknow7.onclick = function () {
  calendarmodal.style.height = "700px";
  btn.style.display = "none";
  span.style.display = "block";
};

btn.onclick = function () {
  calendarmodal.style.height = "700px";
  btn.style.display = "none";
  span.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  calendarmodal.style.height = "0px";
  btn.style.display = "block";
  span.style.display = "none";
};

//Gallery btns
//
//

// Get the modal
let gallmodal = document.getElementById("portfolio-wrapper");

// Get the button that opens the modal
let gallbtn = document.getElementById("btn-gall");

// Get the <span> element that closes the modal
let gallspan = document.getElementById("closegallbtn");

gallbtn.onclick = function () {
  gallmodal.style.height = "100%";
  gallmodal.style.display = "flex";
  gallbtn.style.display = "none";
  gallspan.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
gallspan.onclick = function () {
  gallmodal.style.height = "0px";
  gallmodal.style.display = "none";
  gallbtn.style.display = "block";
  gallspan.style.display = "none";
};

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 2;
  }
  if (n < 1) {
    slideIndex = x.length;
    console.log(slideIndex);
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

//
//
//

let scroll_pos = 0;
let section_pos = 2400;
let toofar = 2900;

let slider1 = document.getElementById("slider");
let sliderimg = document.getElementById("img-2");

window.addEventListener("scroll", function (e) {
  scroll_pos = window.scrollY;
  if (scroll_pos > section_pos && scroll_pos < toofar) {
    // // Start the animation -> startAnimation
    slider1.style.animation = "anim 2s 1s normal forwards";
    sliderimg.style.animation = "imganim 2s 1s normal forwards";
  }
});
