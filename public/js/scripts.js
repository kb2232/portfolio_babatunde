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
  let rectShape2 = new createjs.Shape();
  let rectShape3 = new createjs.Shape();
  let rectShape4 = new createjs.Shape();

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
  rectShape.graphics.beginStroke("#F00");
  rectShape.graphics.setStrokeStyle(15); //pixels for width
  rectShape.graphics.drawRect(
    0, 0, //x, y
    210, 150 // width, height
  );
  rectShape.graphics.endStroke();
  rectShape.graphics.beginStroke("#00F");
  rectShape.graphics.setStrokeStyle(5); //pixels for width
  rectShape.graphics.drawRect(
    0, 0, //x, y
    210, 150 // width, height
  );
  rectShape.graphics.endStroke();
  rectShape.x = 8;
  rectShape.y = 8;
  stage2.addChild(rectShape);
  stage2.update();


  rectShape2.graphics.beginStroke("#F00");
  rectShape2.graphics.setStrokeStyle(15); //pixels for width
  rectShape2.graphics.drawRect(
    0, 0, //x, y
    210, 150 // width, height
  );
  rectShape2.graphics.endStroke();
  rectShape2.graphics.beginStroke("#0FF");
  rectShape2.graphics.setStrokeStyle(5); //pixels for width
  rectShape2.graphics.drawRect(
    0, 0, //x, y
    210, 150 // width, height
  );
  rectShape2.graphics.endStroke();
  rectShape2.x = 230;
  rectShape2.y = 8;
  stage2.addChild(rectShape2);
  stage2.update();
  

  rectShape4.graphics.beginStroke("#F00");
  rectShape4.graphics.setStrokeStyle(15); //pixels for width
  rectShape4.graphics.drawRect(
    0, 0, //x, y
    210, 120 // width, height
  );
  rectShape4.graphics.endStroke();
  rectShape4.graphics.beginStroke("#00F");
  rectShape4.graphics.setStrokeStyle(5); //pixels for width
  rectShape4.graphics.drawRect(
    0, 0, //x, y
    210, 120 // width, height
  );
  rectShape4.graphics.endStroke();
  rectShape4.x = 230;
  rectShape4.y = 170;
  stage2.addChild(rectShape4);
  stage2.update();


  rectShape3.graphics.beginStroke("#F00");
  rectShape3.graphics.setStrokeStyle(15); //pixels for width
  rectShape3.graphics.drawRect(
    0, 0, //x, y
    210, 120 // width, height
  );
  rectShape3.graphics.endStroke();
  rectShape3.graphics.beginStroke("#0FF");
  rectShape3.graphics.setStrokeStyle(5); //pixels for width
  rectShape3.graphics.drawRect(
    0, 0, //x, y
    210, 120 // width, height
  );
  rectShape3.graphics.endStroke();
  rectShape3.x = 8;
  rectShape3.y = 170;
  stage2.addChild(rectShape3);
  stage2.update();



}