$(document).ready(function() {
$('html').on('DOMMouseScroll mousewheel', function (e) {
  if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) { 
     console.log('Down');
    $( "#header-nav" ).addClass( "hide-nav-bar" );
  } else {
    console.log('Up');
    $( "#header-nav" ).removeClass( "hide-nav-bar" );
  }
});
  $('body').addClass('js');
  var $menu = $('#menu'),
    $menulink = $('.menu-link'); 
$menulink.click(function() {
  $menulink.toggleClass('active');
  $menu.toggleClass('active');
  return false;
});
var toggled = 0;
$('.menu-link').click(function(){
  if(toggled == 0){
  $('.bar3').stop().transition({rotate: "45", "margin-top": "13px"});
  $('.bar2').stop().transition({opacity: "0"}, "fast");
  $('.bar1').stop().transition({rotate: "-45", "margin-top": "13px"});
    toggled++;
    console.log("toggled down")
  }
  else{
  $('.bar3').stop().transition({rotate: "+=135", "margin-top": "3px"});
  $('.bar2').transition({opacity: "1"}, "fast");
  $('.bar1').stop().transition({rotate: "-=135", "margin-top": "23px"});
  toggled--;
   console.log("Togged Up")
  }
});
  });