function setup() {
  createCanvas(800,400);
  
  ball1 = createSprite(200,100,50,50);
  ball2 = createSprite(400,100,50,50);
  ball3 = createSprite(300,300,50,50);
  ball4 = createSprite(400,300,50,50);
  ball1.shapeColor = "green";
  ball2.shapeColor = "green";
  ball3.shapeColor = "green";
  ball4.shapeColor = "green";
  movingRect = createSprite(600,400,50,80);
  movingRect.shapeColor ="green";

  ball3.velocityX = 1;
  ball4.velocityX = -1;
  
}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
 if(isTouching(movingRect,ball1)){
   ball1.shapeColor = "red";
   movingRect.shapeColor = "red";
 }
 else{ 
   ball1.shapeColor = "green";
   
 }
 
 if(isTouching(movingRect,ball2)){
  ball2.shapeColor = "red";
  movingRect.shapeColor = "red";
}
else{ 
  ball2.shapeColor = "green";
  
}

bounceoff (ball3,ball4);
 
  drawSprites();
}

