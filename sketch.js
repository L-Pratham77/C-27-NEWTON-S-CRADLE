const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof;
var bob1,bob2,bob3,bob4;
var rope1,rope2,rope3,rope4;
function preload(){}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	roof=new Roof(400,150,600,50);
	
	
	bob1=new Bob(50,450,50);
	bob2=new Bob(300,500,50);
	bob3=new Bob(400,500,50);
	bob4=new Bob(500,500,50);
  bob5=new Bob(600,490,50);
  
    rope1 = new Rope(bob1.body,roof.body,-200,-20);
    rope2 = new Rope(bob2.body,roof.body,-100,-20);
    rope3 = new Rope(bob3.body,roof.body,0,20);
    rope4 = new Rope(bob4.body,roof.body,100,20);
    rope5= new Rope(bob5.body,roof.body,200,20);
}
function draw() {
  rectMode(CENTER);
Engine.update(engine);
  background(0);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  strokeWeight(5);
  stroke("cyan");
textSize(24);
fill(0);
  text("MADE BY : PRATHAM SHARMA",230 ,160);
}
function keyPressed(){
	if(keyCode==UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:-20});
  }
}



