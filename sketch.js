var canvas, bgrnd, backg,SKSSS, Goku, GOOKOO

var player1,enemy1
var phb1,phb2,phb3,phb5,phb6,phb7,phb8,phb9,phb10
var ehb1,ehb2,ehb3,ehb5,ehb6,ehb7,ehb8,ehb9,ehb10


var database
var gameState = 0 


function preload(){

 SKSSS = loadImage("images/SKSSS.jpg")
Goku = loadImage("images/Gokurbg.png")
Broly = loadImage("images/images.png")
}

function setup(){
canvas = createCanvas(1346,660)

bgrnd = createSprite(673,330,1346,660)
bgrnd.addImage(SKSSS,"bgrnd")
player1 = createSprite(300,330,20,20)
player1.addImage("player1",Goku)
player1.scale = 0.5
enemy1 = createSprite(1050,330,20,20)
enemy1.scale = 1.1
enemy1.addImage("enemy1",Broly)


phb1 = createSprite(50,60,10,30)
phb1.shapeColor = "green"
phb2 = createSprite(70,60,10,30)
phb2.shapeColor = "green"
phb3 = createSprite(90,60,10,30)
phb3.shapeColor = "green"
phb4 = createSprite(110,60,10,30)
phb4.shapeColor = "green"
phb5 = createSprite(130,60,10,30)
phb5.shapeColor = "green"
phb6 = createSprite(150,60,10,30)
phb6.shapeColor = "green"
phb7 = createSprite(170,60,10,30)
phb7.shapeColor = "green"
phb8 = createSprite(190,60,10,30)
phb8.shapeColor = "green"
phb9 = createSprite(210,60,10,30)
phb9.shapeColor = "green"
phb10 = createSprite(230,60,10,30)
phb10.shapeColor = "green"

ehb1 = createSprite(1290,60,10,30)
ehb1.shapeColor = "green"
ehb2 = createSprite(1270,60,10,30)
ehb2.shapeColor = "green"
ehb3 = createSprite(1250,60,10,30)
ehb3.shapeColor = "green"
ehb4 = createSprite(1230,60,10,30)
ehb4.shapeColor = "green"
ehb5 = createSprite(1210,60,10,30)
ehb5.shapeColor = "green"
ehb6 = createSprite(1190,60,10,30)
ehb6.shapeColor = "green"
ehb7 = createSprite(1170,60,10,30)
ehb7.shapeColor = "green"
ehb8 = createSprite(1150,60,10,30)
ehb8.shapeColor = "green"
ehb9= createSprite(1130,60,10,30)
ehb9.shapeColor = "green"
ehb10 = createSprite(1110,60,10,30)
ehb10.shapeColor = "green"


player1.velocityX = 0


}
function draw(){
background("white")

  
if(keyDown="UP_ARROW"){
  player1.x=player1.x+3
}
  
player1.display()
enemy1.display()

  drawSprites()


}


