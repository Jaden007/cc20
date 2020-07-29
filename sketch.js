var fixedrect,movingrect;
function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(400, 100, 50, 80);
  fixedrect.shapeColor="green";
  movingrect=createSprite(400,800,80,30);
  movingrect.shapeColor="green";
  movingrect.velocityY=-5;
  fixedrect.velocityY=5;
}

function draw() {
  background(0);  
  if (movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
    &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
      movingrect.velocityY=-(moving.velocityY);
    fixedrect.velocityY=-(fixedrect.velocityY);
    }

  drawSprites();
}