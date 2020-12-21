class Slingshot{
    constructor(body1,point1){
        var options ={
            bodyA: body1,
            pointB: point1,
            stiffness: 0.04,
            length: 100
        }
        this.bodyA = body1
        this.pointB = point1
        this.slingshot = Constraint.create(options)
        World.add(world, this.slingshot)
    }

    fly(){
        this.slingshot.bodyA = null
    }

display(){
    if(this.slingshot.bodyA){
    var pointA = this.slingshot.bodyA.position
    var pointB = this.slingshot.pointB
    push()
    strokeWeight(4)
    line(pointA.x, pointA.y, pointB.x, pointB.y)
    pop()
}
}









}