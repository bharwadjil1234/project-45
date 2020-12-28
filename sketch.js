var background, backgroundImage;
var zombie, zombieImage;
function preload(){
    backgroundImage = loadImage("background image.jpg");
    zombieImage = loadImage("zombie image (1).png");
}

function setup(){
    var canvas = createCanvas(600,600);
    background = createSprite(300,300);
    background.addImage(backgroundImage);
    background.scale = 2;
    zombie = createSprite(300,300,30,50);
    zombie.addImage(zombieImage);
}

function draw(){
    drawSprites();
}