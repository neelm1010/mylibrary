
var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200,200,50,80);
  fixedRect.shapeColor="blue";
  movingRect=createSprite(200, 200, 80, 30);
  movingRect.shapeColor="blue";
}

function draw() {
  background(0,0,0); 
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

   isTouching(movingRect,fixedRect);
//bounceOff(movingRect,fixedRect);
  drawSprites();
}




