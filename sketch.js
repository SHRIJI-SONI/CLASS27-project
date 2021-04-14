const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,230,25);
	bob1 = new Bob(320,300,20);
	bob2 = new Bob(360,300,20);
	bob3 = new Bob(400,300,20);
	bob4 = new Bob(440,300,20);
	bob5 = new Bob(480,300,20);
    
	// All the chains
	rope1=new Rope(bob1.body,roof.body,-80, 0)
	rope2=new Rope(bob2.body,roof.body,-40, 0)
	rope3=new Rope(bob3.body,roof.body,0, 0)
	rope4=new Rope(bob4.body,roof.body,40, 0)
	rope5=new Rope(bob5.body,roof.body,80, 0)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("green");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  keyPressed();
  drawSprites();
}

function keyPressed() {
	if (keyCode===UP_ARROW) {
	 return Matter.Body.position(bob5.body,{y:280})
	}
}