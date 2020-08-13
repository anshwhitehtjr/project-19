var ball,img,paddle,paddle_img;
function preload() {
 img=loadImage("ball.png");
 paddle_img=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   ball=createSprite(70,200,10,10);
  ball.addImage("img",img);
  paddle=createSprite(370,200,5,30);
  paddle.addImage(paddle_img);

   ball.velocityX=6;
   ball.velocityY=6;
}

function draw() {
  background(205,153,0);
  edges = createEdgeSprites();
  ball.bounceOff(paddle,explotion);
//,randomVelocity
  
  paddle.collide(edges);
  explotion();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);

  if(keyDown(UP_ARROW))
  {
    paddle.velocityY = paddle.velocityY-5;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY = paddle.velocityY+5;
  }
  drawSprites();
  
}

function explotion()
{
 ball.velocityY=random(-8,8);
}

