class Tanker {
    constructor(x, y, width, height) {
        var options = {
        isStatic: true
       }
       this.body = Bodies.rectangle(x,y,width,height,options);  
       this.tankimg = loadImage("tanker.png");
       this.width = width;
       this.height = height;
       World.add(world, this.body);
      }
  
      fly(){
        this.sling.bodyA = null;
    }
    
      display(){
      var pos =this.body.position;
      image(this.tankimg,300,200,this.width,this.height);
      }
  }