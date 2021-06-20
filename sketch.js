
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var leftside,rightside

function preload()
{
	
}

function setup() {
	createCanvas(800, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
      isStatic: false,
	  restitution:0.3,
	  friction:0,
	  density:1.2
	}
   
	ball = Bodies.circle(100,100,20,ball_options);
	World.add(world,ball);

	Engine.run(engine);

	ground = new Ground (width/2,670,width,20)
	leftside = new Ground (1100,600,20,120)
	rightside = new Ground (1350,600,20,120)

  
}


function draw() {
  rectMode(CENTER);
  background("black");

  ellipse(ball.position.x,ball.position.y,20);
  
  ground.show();
  leftside.show();
  rightside.show();
 
}



