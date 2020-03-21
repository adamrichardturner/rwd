/* jshint esversion:6 */
$(document).ready(function() {
  $('#about').waypoint(function() {
    $('#man').addClass('animated fadeInRight');
  }, {
    offset: '50%'
  });
  $('#contact-trigger').waypoint(function() {
    $('#contact').addClass('animated fadeInLeft');
  }, {
    offset: '50%'
  });
});

$('.navTrigger').click(function() {
  $(this).toggleClass('active');
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.nav').addClass('affix');
  } else {
    $('.nav').removeClass('affix');
  }
});

$(document).ready(function() {
  setTimeout(function() {
    $("#cookieConsent").fadeIn(0.5);
  }, 100);
  $("#closeCookieConsent, .cookieConsentOK").click(function() {
    $("#cookieConsent").fadeOut(200);
  });
});