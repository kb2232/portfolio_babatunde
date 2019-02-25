$(document).ready(function(){

  $('h2').click(function(){
    $(this).css('background-color','#ff0000')
  })

  $('.js-nav-icon').click(function(){
    let nav = $('.main_nav');
    nav.slideToggle(200)
  })

});