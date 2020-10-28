var car;
var wall;
var speed;
var weight;
 var deformation;

function setup() {
  createCanvas(800,400);
  speed=random(40,70);
  weight=random(400,1500);


  car=createSprite(50, 200, 50, 50);
  wall=createSprite(700,200,50,height/2);
  
  car.velocityX=speed;

deformation=0.5*weight*speed*speed/22500;

}

function draw() {
  background("black");  
  
if(wall.x-car.x < (wall.width+car.width)/2){
 car.velocityX=0

if(deformation===100||deformation<100){
  car.shapeColor=color(0, 255, 0)
}

if(deformation<180){
  car.shapeColor=color(255, 0, 0)
}

if(deformation<100 && deformation>180){
  car.shapeColor=color(230, 230, 0)
}




}




  drawSprites();
}