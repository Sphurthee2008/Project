class Stone{
    constructor(x,y){
        var options = {
            isStatic:true,
            restitution: 0,
            friction:1,
            density :1.2
        }
      this.radius = 35
      this.image = loadImage("Images/stone.png")
      this.body = Bodies.circle(x,y,35/2,options);
      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle
  
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("blue");
        imageMode(CENTER)
        image(this.image,0,0,this.radius,this.radius);
        pop();
      }




}