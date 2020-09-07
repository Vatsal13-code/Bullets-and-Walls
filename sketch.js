var wall, bullet,bulletRightEdge;
var speed, weight,thickness;


function setup() {
  createCanvas(1600,400);
bullet = createSprite(50,200,50,50);
thickness = random(22,83)
wall=createSprite(1500,200,thickness,200);
wall.shapeColor = color(80,80,80)
speed=random(223,321)
bullet.velocityX=speed;
weight=random(30,52)
}

function draw() {
  background(255,255,255); 
  if(hasCollided(bullet,wall)) {
    var damage = 0.5*weight*speed*speed/thickness*thickness*thickness

    if(damage>10) {
      wall.shapeColor = "green"
    }
    if(damage<10) {
      wall.shapeColor = "red";
    }
  }
  console.log(bulletRightEdge)
  console.log(wall.leftEdge)
  drawSprites();
} 

function hasCollided(bullet,wall) {
  bulletRightEdge = bullet.x+bullet.width
  wallLeftEdge = wall.x
  if(bulletRightEdge>=wallLeftEdge) {
    return true;
  }
  return false;
}