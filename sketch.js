var PLAYING = 1;

var END = 0;

var gamestate = PLAYING;
//criar as variaveis
var trex; 

var trexAnimation;

var ground;

var groundImage;

var groundInvisible;

var cloudImage;

var pontuation;

var obstaclesGang;

var cloudsGang;
//função para precarregar imagens, sons e animações
function preload()
{
  trexAnimation = loadAnimation("trex1.png","trex3.png","trex4.png");

  groundImage = loadImage("ground2.png");

  cloudImage = loadImage("cloud.png");

  Obstacle1 = loadImage("obstacle1.png");

  Obstacle2 = loadImage("obstacle2.png");

  Obstacle3 = loadImage("obstacle3.png");

  Obstacle4 = loadImage("obstacle4.png");

  Obstacle5 = loadImage("obstacle5.png");

  Obstacle6 = loadImage("obstacle6.png");
}


//função para criação de tela, personagens e outros
function setup()
{
  createCanvas(600,200);
  
  console.log("batata");
  trex = createSprite(50,150,50,50);
  trex.addAnimation("Dinosarlinho",trexAnimation);
  trex.scale = 0.5;

  ground = createSprite(50,160,10,10);
  ground.addImage(groundImage);
  
  groundInvisible = createSprite(50,170,100,10);
  
  groundInvisible.visible = false;

  obstaclesGang = new Group();
  
  cloudsGang = new Group();

  pontuation = 0;
}


//função para fazer as coisas funcionarem dentro da tela
function draw()
{
  background("white");
  text("Score: " + pontuation,10,20);
  pontuation = pontuation + Math.round(getFrameRate()/30);
  
  ground.velocityX = -5;
  //console.log(trex.y);
  
  if (ground.x<0){
    //  if(ground.x<0){ground.x = ground.width/2; = chão infinito
    ground.x = ground.width/2;
  }
  
  if (keyDown("space") && trex.y>135){
    trex.velocityY = -10;
  }
  //gravidade
  trex.velocityY = trex.velocityY +0.5;
  trex.collide(groundInvisible);

  createCloud();
  createObstacle();
  drawSprites();
}

function createCloud()
{
if (frameCount %60===0){
  var Nuvem = createSprite(580,20,10,10);
  Nuvem.addImage(cloudImage);
  Nuvem.velocityX = -5;
  Nuvem.y = Math.round(random(1,60))
  Nuvem.lifetime = 120;
  Nuvem.depth = trex.depth;
  trex.depth = trex.depth + 1;
  cloudsGang.add(Nuvem);
}

}
function createObstacle()
{
if (frameCount %60===0){
  var Obstacle = createSprite(580,150,20,10);
  Obstacle.velocityX = -5;
  Obstacle.lifetime = 120;
  Obstacle.scale = 0.7;
  obstaclesGang.add(Obstacle);
  var rand = Math.round(random(1,6));
  switch(rand){
    case 1: Obstacle.addImage(Obstacle1);
    break;
    case 2: Obstacle.addImage(Obstacle2);
    break;
    case 3: Obstacle.addImage(Obstacle3);
    break;
    case 4: Obstacle.addImage(Obstacle4);
    break;
    case 5: Obstacle.addImage(Obstacle5);
    break;
    case 6: Obstacle.addImage(Obstacle6);
    break;
    default: break;
  }
  }
}







