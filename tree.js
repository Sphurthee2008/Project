class Tree{
    constructor(x,y,width,height)
    {
        var options = {
            isStatic: true,
            density: 1
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image = loadImage("Images/tree.png")
        World.add(world,this.body);
    } 
    display(){

        var pos = this.body.position;

        push();
        rect(pos.x,pos.y,this.width,this.height);
        imageMode(CENTER)
        image(this.image,800,320,550,550);
        pop();
    }





}