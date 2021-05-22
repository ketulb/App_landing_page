"use strict";

$(window).on('load', function () {
  $('.preloader').fadeOut('slow');
});
$(document).ready(function () {
  /* -----------    Nav Bar shrink ---------*/
  $(window).on('scroll', function () {
    if ($(this).scrollTop > 90) {
      $('.navbar').addClass('navbar-shrink');
    } else {
      $('.navbar').removeClass('navbar-shrink');
    }
  });
  /* --------------           video popup ----------------- */

  var videoSrc = $('#player-1').attr('src');
  $('.video-play-btn, .video-popup').on('click', function () {
    if ($('.video-popup').hasClass('open')) {
      $('.video-popup').removeClass('open');
      $('#player-1').attr('src', '');
    } else {
      $('.video-popup').addClass('open');

      if ($('#player-1').attr('src') == '') {
        $('#player-1').attr('src', videoSrc);
      }
    }
  });
  /* ------ features carousel ------------ */

  $('.features-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        item: 2
      },
      1000: {
        items: 3
      }
    }
  });
  $('.screenshots-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        item: 2
      },
      1000: {
        items: 4
      }
    }
  });
  $('.testimonials-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        item: 2
      },
      1000: {
        items: 3
      }
    }
  });
  $('.team-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        item: 2
      },
      1000: {
        items: 3
      }
    }
  });
  /* ------------- page scrolling - scrilit.js    ------- */

  $.scrollIt({
    topOffset: -50
  }); // navbar toggler

  $('.nav-link').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });
  /* ---- dark theme */

  function toggleTheme() {
    if (localStorage.getItem('rain-theme') !== null) {
      if (localStorage.getItem('rain-theme') === 'dark') {
        $('body').addClass('dark');
      } else {
        $('body').removeClass('dark');
      }
    }

    updateIcon();
  }

  toggleTheme();
  $('.toggle-theme').on('click', function () {
    $('body').toggleClass('dark');

    if ($('body').hasClass('dark')) {
      localStorage.setItem('rain-theme', 'dark');
    } else {
      localStorage.setItem('rain-theme', 'light');
    }

    updateIcon();
  });

  function updateIcon() {
    if ($('body').hasClass('dark')) {
      $('.toggle-theme i').removeClass('fa-moon');
      $('.toggle-theme i').addClass('fa-sun');
    } else {
      $('.toggle-theme i').removeClass('fa-sun');
      $('.toggle-theme i').addClass('fa-moon');
    }
  }
});
//# sourceMappingURL=main.dev.js.map
