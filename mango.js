class Mango{
    constructor(x,y){
    var options = {
        isStatic: true,
        restitution: 0,
        friction:1
    }
  this.radius = 30
  this.image = loadImage("Images/mango.png")
  this.body = Bodies.circle(x,y,30/2,options);
  World.add(world, this.body);
}
display(){
    var pos = this.body.position;
    var angle = this.body.angle

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("blue");
    imageMode(CENTER);
    ellipseMode(CENTER);
    image(this.image,0,0,30,30);
    pop();
}
}