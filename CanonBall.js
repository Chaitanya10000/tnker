class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06,
    }

    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.image = loadImage("canonBall.png");
    World.add(world, this.body);
    
  }

  display(){
    var pos = this.body.position;
    translate(pos.x,pos.y);
    image(this.image,300,200,this.width,this.height);
    fill("black");
   
  }
}