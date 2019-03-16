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
  circle.graphics.beginFill("#f1c40f");
  circle.graphics.drawCircle(0,0,15);
  circle.graphics.endFill();
  circle.x = 30;
  circle.y = 100;
  stage.addChild(circle);
  createjs.Tween.get(circle, { loop: true })
    .to( { x: 250 }, 2000, createjs.Ease.getPowInOut(4))
    .to( { y: 50 }, 1000, createjs.Ease.getPowInOut(2))
    .to( { x: -5 }, 2000, createjs.Ease.getPowInOut(4))
    .to( { y: 150 }, 1000, createjs.Ease.getPowInOut(2))
  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", stage);
}