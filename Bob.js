class Bob{
    constructor(x,y,radius) {
     
      var options = {
          'isStatic':false,
          'density':0.1,
          'restitution':1.2,
         'friction' : 0
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      strokeWeight(5);
      stroke("yellow");
      fill("red");
      push()
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,this.radius,this.radius);
      pop()
    }
};