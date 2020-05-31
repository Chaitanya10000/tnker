class Shootball {
  constructor(bodyA, pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length: 10
    }
    image = loadImage('ball.jpg');
    
    this.pointB = pointB;
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
}
attach(body){
    this.sling.bodyA = body;
}

display(){
    if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        pop();
    }
}
}
