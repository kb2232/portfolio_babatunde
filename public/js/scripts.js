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
  circle.graphics.drawCircle(0,0,25);
  circle.graphics.endFill();
  circle.x = 30;
  circle.y = 70;
  stage.addChild(circle);
  createjs.Tween.get(circle, { loop: true })
    .to({ x: 300 }, 2000, createjs.Ease.getPowInOut(4));
  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", stage);
}