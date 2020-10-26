
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,paper1,dustbin1;

/*function preload()
{
	
}*/

function setup() 
{
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new paper(50,650,30);
	ground1 = new ground(400,690,800,20);
	dustbin1 = new dustbin(600,680);

	Engine.run(engine);
}

function draw() 
{
  rectMode(CENTER);
  background("grey");

  paper1.display();
  dustbin1.display();
  ground1.display();
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:30,y:-40})
	}
}

