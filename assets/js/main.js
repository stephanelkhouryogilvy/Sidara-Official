jQuery(function ($) {
  //alert('here tested and it is updating correctly');
  ///////////////////////////////////////////////////////////////   START DOCUMENT READY  ///////////////////////////////////////////////////////////////

  $(document).ready(function () {

    $(".dropdown-menu").click(function (e) {
      e.stopPropagation();
    })
    $('.first-level button.next').click(function () {
      $('.second-level').addClass('visibility-visible')
    })

    $('.second-level button.next').click(function () {
      $('.third-level').addClass('visibility-visible')
    })
    $('.go-back').click(function () {
      if ($('.third-level').hasClass('visibility-visible')) {
        $('.third-level').removeClass('visibility-visible')
      } else {
        if ($('.second-level').hasClass('visibility-visible')) {
          $('.second-level').removeClass('visibility-visible')
        }
        else {
          $('.my-dropdown-button.show').dropdown('toggle');
        }
      }
    })
    $('.fixed-height-mobile').on('hide.bs.dropdown', function (e) {
      if (e.clickEvent) {
        e.preventDefault();
      }
    });
    $('.close-search-btn').click(function () {
      $('.search-dropdown').dropdown('toggle');
      $('.navbar-collapse').removeClass('blur-filter')
    })
    $('#search-btn-mobile').click(function () {
      if ($('#search-mobile-dropdown').hasClass('show')) {
        $('.navbar-collapse').addClass('blur-filter')
      }
      else {
        $('.navbar-collapse').removeClass('blur-filter')
      }
    })
    $('.dropdown-toggle').click(function () {
      $('.second-level').removeClass('visibility-visible')
      $('.third-level').removeClass('visibility-visible')
    })
    $('.nav-pills button.active').siblings().addClass('lime-text')
    $('.nav-pills button').click(function () {
      $('.nav-pills button.active').siblings().addClass('lime-text')
    })
    $(".navbar-toggler").click(function () {
      $('header').toggleClass("h-100vh")
      $(this).toggleClass("open");
      if ($(".navbar-toggler").hasClass("open")) {
        $(".fixed-height-mobile").addClass("dark-grey-bg-2")
        $(".fixed-height-mobile").removeClass("bg-transparent")
        $("header").addClass("dark-grey-bg-2")
        $("header").removeClass("bg-transparent-1")
        $(".mobile-lower-header").addClass("visibility-visible-1")
        if (document.getElementById("target") !== null) {
          $(".fixed-height-mobile").removeClass("bg-transparent")
        }
      }
      else {
        $(".fixed-height-mobile").addClass("bg-transparent")
        $("header").addClass("bg-transparent-1")
        $(".mobile-lower-header").removeClass("visibility-visible-1")
        if (document.getElementById("target") == null) {
          $(".fixed-height-mobile").removeClass("bg-transparent")
        }
      }
    })
    $('button.next').click(function () {
      $('button.next').removeClass('active')
      $('.nav-pills button.next').siblings().addClass('text-white')
      $(this).addClass('active')
      $(this).siblings().removeClass('text-white')
      $(this).siblings().addClass('lime-text')
    })
    if (document.getElementById("target") !== null) {
      $(window).scroll(function () {
        var targt = $(".target").offset().top + 80;
        if ($(document).scrollTop() > targt) {
          $('header').addClass('scrolled');
          $('header').removeClass('scrolled-back');
        }
        else {
          $('header').addClass('scrolled-back');
        }
      });
    }
    if (document.getElementById("home-page") !== null) {
      $(window).scroll(function () {
        if ($(window).scrollTop() >= $('#home-section-1').offset().top - 80) {
          $('.hidden-numbers').addClass('number-animation')
        }
        else {
          if ($(window).scrollTop() <= $('#home-section-1').offset().top - $(window).height()) {
            $('.hidden-numbers').removeClass('number-animation')
          }
        }
        if ($(window).scrollTop() >= $('#home-section-4').offset().top - 80) {
          $('#home-section-4 .mask1').addClass('mask1-animation');
          $('#home-section-4 .mask2').addClass('mask2-animation');
          $('#home-section-4 .mask3').addClass('mask3-animation');
        }
        else {
          if ($(window).scrollTop() <= $('#home-section-4').offset().top - $(window).height()) {
            $('#home-section-4 .mask1').removeClass('mask1-animation');
            $('#home-section-4 .mask2').removeClass('mask2-animation');
            $('#home-section-4 .mask3').removeClass('mask3-animation');
          }
        }
      })
    }
    // if (document.getElementById("careers-page") !== null) {
    //   runSwiper1();
    //   runSwiper2();
    //   runSwiper3();
    //   runSwiper4();
    // }
    if (document.getElementById("article-page") !== null) {
      runSwiper1();
      runSwiper2();
      runSwiper3();
      runSwiper4();
    }
    if (document.getElementById("expertise-inside-page") !== null) {
      runSwiper1();
      runSwiper2();
      runSwiper3();
      runSwiper4();
      runSwiper5();
      runSwiper6();
    }
    // if (document.getElementById("projects-inside-page") !== null) {
    //   runSwiper1();
    //   runSwiper2();
    //   runSwiper3();
    //   runSwiper4();
    //   runSwiper5();
    //   runSwiper6();
    // }
    if(document.getElementById("impact-page") != null){
      $(window).scroll(function () {
      if ($(window).scrollTop() >= $('#impact-section-3').offset().top - 130) {
        if(!$('#third-link').hasClass('active')){
          $('#first-link').removeClass('active')
          $('#second-link').removeClass('active')
          $('#third-link').addClass('active')
        }
      }else{
        if ($(window).scrollTop() >= $('#impact-section-2').offset().top - 130) {
          if(!$('#second-link').hasClass('active')){
          $('#first-link').removeClass('active')
          $('#third-link').removeClass('active')
          $('#second-link').addClass('active')
          }
        }
        else{
          if ($(window).scrollTop() >= $('#impact-section-1').offset().top - 130) {
            if(!$('#first-link').hasClass('active')){
            $('#third-link').removeClass('active')
            $('#second-link').removeClass('active')
            $('#first-link').addClass('active')
            }
            }
        }
      }
    });
    }
    if (document.getElementById("collaborative-page") !== null) {
      const el = document.querySelector("#brands-section");
      const stickyTop = parseInt(window.getComputedStyle(el).top);
      const currentTop = el.getBoundingClientRect().top;
      $('#brand-toggle').click(function () {
        if ($(this).hasClass('collapsed')) {
          $('#brands-section .top-brands-logo .brands-logo').removeClass('visibility-hidden')
          $('#brands-section .top-brands-logo .brands-logo').addClass('visibility-visible')
          $('#brands-section').removeClass('h-100vhClass')
          $('html,body').removeClass('stop-scrolling')
          var offTop = $('#brands-section').offset().top - 65;
          $([document.documentElement, document.body]).scrollTop(offTop, { duration: 0 });
        }
        else {
          $('#brands-section .top-brands-logo .brands-logo').addClass('visibility-hidden')
          $('#brands-section .top-brands-logo .brands-logo').removeClass('visibility-visible')
          $('#brands-section').addClass('h-100vhClass')
          if (currentTop === stickyTop) {
            $('html,body').addClass('stop-scrolling')
          } else {
            var offTop = $('#brands-section').offset().top - 65;
            $([document.documentElement, document.body]).scrollTop(offTop, { duration: 0 });
            $('html,body').addClass('stop-scrolling')
          }
        }
      })
    }
    $('.logo-link').on('click', function () {
      // $('html,body').removeClass('stop-scrolling')
      $("#brandCollapsed").collapse("hide");
      $('#brands-section').removeClass('h-100vhClass')
      $('#brands-section .top-brands-logo .brands-logo').removeClass('visibility-hidden')
      $('#brands-section .top-brands-logo .brands-logo').addClass('visibility-visible')
      var page = $(this).attr('href');
      var speed = 200;
      var offset = 130;
      $('html, body').animate({
        scrollTop: $(page).offset().top - offset
      }, speed);
      return false;
    });
    $('#load-more').on('click', function () {
      $('.hidden-mobile').toggleClass('showing-mobile')
    })
    $('#load-more-1').on('click', function () {
      $('.hidden-mobile-1').toggleClass('showing-mobile')
    })
    $('.impact-link').on('click', function () {
      $('.impact-link').removeClass('active')
      $(this).addClass('active')
      var page = $(this).attr('href');
      var speed = 200;
      var offset = 130;
      $('html, body').animate({
        scrollTop: $(page).offset().top - offset
      }, speed);
      return false;
    });


    /////////////////////////////////// Accessibility START /////////////////////////////////////////
    //DESCREASE/ INCREASE FONT SIZE
    $(".form-range").on("input", function () {
      var font = 16 + ($(this).val() * 1.2);
      $('html').css("font-size", font + "px");
    });

  })
  /////////////////////////////////// Accessibility END /////////////////////////////////////////


  ///////////////////////////////////////////////////////////////   START DATA SCROLL  ///////////////////////////////////////////////////////////////

  $.fn.moveIt = function () {
    var $window = $(window);
    var instances = [];

    $(this).each(function () {
      instances.push(new moveItItem($(this)));
    });

    window.addEventListener('scroll', function () {
      var scrollTop = $window.scrollTop();
      instances.forEach(function (inst) {
        inst.update(scrollTop);
      });
    }, { passive: true });
  }
  var moveItItem = function (el) {
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
  };
  moveItItem.prototype.update = function (scrollTop) {
    this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
    this.el.css('margin-bottom', -(scrollTop / this.speed) + 'px');
  };
  $(function () {
    $('[data-scroll-speed]').moveIt();
  });


  ///////////////   END DATA SCROLL  ///////////////
})

  ///////////////   PASSWORD  ///////////////
// Check if the user has already entered the password today
if (localStorage.getItem('pageAccessGranted') !== 'true') {
    var password = prompt("Enter password to view this page", "");
    if (password == "sidara") {
        // Set access granted token in localStorage
        localStorage.setItem('pageAccessGranted', 'true');
 
        // Store the current date
        var currentDate = new Date();
        localStorage.setItem('pageAccessDate', currentDate.toDateString());
    } else {
        // Incorrect password action, for example:
        window.location.href = 'http://www.google.com/';
    }
} else {
    // Check if it has been more than a day since the password was last entered
    var storedDate = new Date(localStorage.getItem('pageAccessDate'));
    var currentDate = new Date();
 
    if (currentDate.toDateString() !== storedDate.toDateString()) {
        // If dates do not match, it means a day has passed
        // So, clear the localStorage items
        localStorage.removeItem('pageAccessGranted');
        localStorage.removeItem('pageAccessDate');
    }
}
 