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
  let circle = new createjs.Shape();

  let stage2 = new createjs.Stage("stage2-canvas");
  let rectShape = new createjs.Shape();
  let circleFillStrokeShape = new createjs.Shape();

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
  rectShape.graphics.beginFill("#2c3e50");
  rectShape.graphics.drawRect(-100,-100,200,200);
  rectShape.graphics.endFill();
  rectShape.x = stage2.canvas.width*0.5;
  rectShape.y = stage2.canvas.height*0.5;
  stage2.addChild(rectShape);
  stage2.update();

  circleFillStrokeShape.graphics.beginStroke("#ecf0f1");
  circleFillStrokeShape.graphics.setStrokeStyle(25);
  circleFillStrokeShape.graphics.beginFill("#c0392b");
  circleFillStrokeShape.graphics.drawCircle(0,0,100);
  circleFillStrokeShape.alpha = 0.5;
  circleFillStrokeShape.graphics.endFill();
  circleFillStrokeShape.graphics.endStroke();
  circleFillStrokeShape.x = rectShape.x;
  circleFillStrokeShape.y = rectShape.y;
  stage2.addChild(circleFillStrokeShape);
  stage2.update();

  let messageText2 = new createjs.Text("Click anywhere within the canvas for position coordinates","16px Arial","#000");
  messageText2.y= 10;
  stage2.addChild(messageText2);
  stage2.update();

  let messageText = new createjs.Text("...waiting for click...","18px Arial","#000");
  messageText.y= stage2.canvas.height - messageText.getMeasuredHeight()-5;
  stage2.addChild(messageText);
  stage2.update();

  stage2.addEventListener("stagemousedown",(e)=>{
    messageText.text = `x:${e.stageX} | y:${e.stageY} `;
    stage2.update();
  })

}