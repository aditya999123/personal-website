
/* globals $:false */
/* globals console:false */
/* globals document:false */
/*global window: false */

$(window).on('scroll', function () {
  var scrollTop = $(this).scrollTop();
  if (scrollTop > 0) {
    $("nav").css('background-color', 'rgba(28, 108, 175, 0.2)');
  } else {
    $("nav").css('background-color', 'transparent');
  }
});

$(document).ready(function () {
  'use strict';
  $("nav").width = $(window).width();
  if ($(window).width() <= 768) {
    $(".navbar-toggle").on('click', function () {
      $("nav").toggleClass('add-bgd');
    });
  }
  $("ul.navbar-nav").find('a').on('click', function () {
    var $href = $(this).attr('href');
    var $anchor = $($href).offset();
    $('body').animate({ scrollTop: $anchor.top });
    return false;
  });

  $(".arrow").on('click', function() {
    var $href = "#about"
    var $anchor = $($href).offset();
    $('body').animate({ scrollTop: $anchor.top });
    return false;
  })
});
