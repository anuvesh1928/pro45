var bgimg;
var spaceshipimg;
var spaceship;

function preload(){
bgimg = loadImage("assets/space.jpg");
spaceshipimg = loadImage("assets/rocket-19697.png");
}

function setup(){
createCanvas(windowWidth,windowHeight);

bg = createSprite(displayWidth/2-20,displayHeight/2-40,500,50);
bg.addImage(bgimg)
bg.scale = 0.5;

spaceship = createSprite(displayWidth-700,displayHeight-300,40,40);
spaceship.addImage(spaceshipimg);
spaceship.scale = 0.25;
}

function draw(){
background("white");
 
if(keyDown("RIGHT_ARROW"))
{
    spaceship.x=spaceship.x+10;
}

if(keyDown("LEFT_ARROW"))
{
    spaceship.x=spaceship.x-10;
}


drawSprites();
}

