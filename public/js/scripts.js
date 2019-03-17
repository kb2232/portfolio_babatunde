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
  let stage = new createjs.Stage("stage-canvas");
  let stage2 = new createjs.Stage("stage2-canvas");
  let circle = new createjs.Shape();
  let rectShape = new createjs.Shape();

  circle.graphics.beginRadialGradientFill(
    ["#F00","#FCD440"],
    [0,1],
    0,
    0,
    5,
    0,
    0,
    25
  );
  circle.graphics.drawCircle(0,0,15);
  circle.graphics.endFill();
  circle.x = 30;
  circle.y = 150;
  stage.addChild(circle);
  const titleText = new createjs.Text(
    "WELCOME TO MY PORTFOLIO",
    "bold 26px Lato",
    "#f1c40f"
    );
    titleText.regX = titleText.getMeasuredWidth() / 2;
    titleText.regY = titleText.getMeasuredHeight() / 2;
    titleText.x = 225;
    titleText.y = 80;
    titleText.shadow = new createjs.Shadow("#000",5,5,10);
  stage.addChild(titleText);
  createjs.Tween.get(titleText, {loop:true})
    .to( { rotation: 360 }, 5000, createjs.Ease.bounceOut)
    .wait(2000)
    .to( { rotation: 0 }, 5000, createjs.Ease.quintIn)
    .wait(2000)
  createjs.Tween.get(circle, { loop: true })
    .to( { x: 420 }, 2000, createjs.Ease.bounceOut)
    .to( { y: 75 }, 1000, createjs.Ease.quintIn)
    .wait(2000)
    .to( { x: 15 }, 2000, createjs.Ease.elasticIn)
    .to( { y: 75 }, 1000, createjs.Ease.getPowInOut(4))
  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", stage);

  /*
  ------------------CANVAS 2-------------------
  */
 rectShape.graphics.beginStroke("red");
 rectShape.graphics.setStrokeStyle(25);
 rectShape.graphics.drawRect(
   0, 0, //x, y
   150, 150 // width, height
 );
 rectShape.graphics.endStroke();
 rectShape.x = stage2.canvas.width*0.5 - 75;
 rectShape.y = stage2.canvas.height*0.5 - 75;
 stage2.addChild(rectShape);
 stage2.update();

}