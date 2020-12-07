
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  engine,world,dustbin,p;
var ground,groundSprite;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor="yellow";
	//Create the Bodies Here.
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	
	rb1=createSprite(700,680,150,20);
	rb1.shapeColor="white";
	rb2=createSprite(630,610,20,120);
	rb2.shapeColor="white";
	rb3=createSprite(770,610,20,120);
	rb3.shapeColor="white";
	p=new Paper(90,500,50);
	ground=new Ground(400,690,800,10);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  p.display();
  ground.display();
  drawSprites()
  }
  function keyPressed(){
	  if(keyCode === UP_ARROW){
		  Matter.Body.applyForce(p.body,p.body.position,{x:85,y: -85});
		  
	  }
  }


