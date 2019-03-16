$(document).ready(function(){

  $('h2').click(function(){
    $(this).css('background-color','#ff0000')
  })

  $('.js-nav-icon').click(function(){
    let nav = $('.main_nav');
    nav.slideToggle(200)
  })

});

function init() 
{
  let stage = new createjs.Stage("stage-canvas")
  let circle = new createjs.Shape();
  circle.graphics.beginFill("red");
  circle.graphics.drawCircle(0,0,30);
  circle.x = 50;
  circle.y = 80;
  stage.addChild(circle);
  stage.update();
}