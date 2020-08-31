
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,ground,dustbin2,dustbin3;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	Engine.run(engine);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    

	dustbin=new Dustbin(400,650,200,20);
	dustbin2=new Dustbin(490,590,20,100);
	dustbin3=new Dustbin(310,590,20,100);
	paper=new Paper(100,600,40,40);
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:100,y:-100});
	}
}


