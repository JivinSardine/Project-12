var runner, runner_running;
var path;
var wallleft, wallright;



function preload(){
  //pre-load images
  runner_running = loadImage("Runner");
  path = loadImage("path");

}

function setup(){
  createCanvas(400,400);
  //create sprites here

  runner = createSprite(50,160,20,50);
  runner.addAnimation(runner_running);
  runner.scale = 0.5;

  //moving background
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

}

function draw() {
  background(0);

  if (keyDown("left")) {
    runner.velocityX = -10;
  }
  if (keyDown("right")) {
    runner.velocityX = +10;
  }

  

  if(path.y > 400){
    path.y = height / 2;
  }
  drawSprites();
}
