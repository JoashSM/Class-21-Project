
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide, rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	var balloptions = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.

    groundObj = new Ground (width/2, 670, width, 20);
	leftSide = new Ground (500,610,20,100);
	rightSide=new Ground (620,610,20,100);

	ball = Bodies.circle(150,100,20,balloptions);
	World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  
  ellipse(ball.position.x, ball.position.y,20);

  groundObj.display();
  leftSide.display();
  rightSide.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0}, {x:0.7,y:0})
	}
}



