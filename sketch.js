var bg;
var multi, multiImg;
var single, singleImg;
var quiz, quizImg;
var logoImg;
var turtle,turtleImg;

function preload(){
bg=loadImage("images/bg.jpg")
singleImg=loadImage("images/single_player.png")
multiImg=loadImage("images/multiplayer.png")
quizImg=loadImage("images/quiz.png")
logoImg = loadImage("images/logo.png")
turtleImg = loadImage("images/turtle.gif")

}


function setup() {
  createCanvas(displayWidth-150,displayHeight-180);
  logo = createSprite(displayWidth/2-400,displayHeight/2-150);
  logo.addImage(logoImg);
  logo.scale = 0.6;
  
  turtle = createSprite(displayWidth/2+310,displayHeight/2-100);
  turtle.addImage(turtleImg);
  turtle.scale = 0.75;

}



function draw() {
  background(bg);  



drawSprites();
}