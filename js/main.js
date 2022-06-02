"use strict";
/* let menu_selector = ".main-menu"; 
function onScroll(){
	let scroll_top = $(document).scrollTop();
	$(menu_selector + " li").each(function(){
		let hash = $(this).attr("href");
		let target = $(hash);
		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
			$(menu_selector + " a.active").removeClass("active");
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
} */

$(document).ready(function () {
  // Menu Scroll
  var nav = $('.header-wrapp');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      nav.addClass("sticky");
      $('.section-banner').addClass('scroll'); //$('.header-wrapp').removeClass('header-fixed');
    } else {
      nav.removeClass("sticky");
      $('.section-banner').removeClass('scroll'); //$('.header-wrapp').addClass('header-fixed');
    }
  }); // ANCOR

  $(".main-menu a[href*='#']").bind("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 150
    }, 1000);
    e.preventDefault();
    $('.button-menu').removeClass('active');
    $('.box-main-menu').removeClass('open');
    return false;
  });
  /* $(document).on("scroll", onScroll);
  $('.main-menu a[href^="#"]').on( 'click', function(e){
  e.preventDefault();
  $(document).off("scroll");
  $(menu_selector + 'a.active').removeClass("active");
  $(this).addClass("active");
  let hash = $(this).attr("href");
  let target = $(hash);
  $("html, body").animate({
    scrollTop: target.offset().top
  }, 500, function(){
  window.location.hash = hash;
  $(document).on("scroll", onScroll);
  });
  }); */
  // SHOW MAIN MENU

  $('.button-menu').click(function (e) {
    $(this).toggleClass('active');
    $('.box-main-menu').toggleClass('open');
    e.stopPropagation();
    e.preventDefault();
  });
  $('.close-menu, .box-main-menu').click(function () {
    $('.button-menu').removeClass('active');
    $('.box-main-menu').removeClass('open');
  }); // gallery works

  $('[data-fancybox="gallery"]').fancybox(); // mask phone

  $.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

  $(".form-control").click(function () {
    $(this).setCursorPosition(6);
  }).mask("+380 (99)-999-99-99");
  $(".form-control .form-control--phone").mask("+380 (99)-999-99-99");
});