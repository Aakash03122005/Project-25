
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,paperImg,groundObject	
var world;

function preload()
{
	//paperObject=loadImage("paper.png");

}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("black");

  //image(paperObject,200,450,40);

  textSize(25);
  fill("white");
  text("Press Space to Put the Paper in the  Dust Bin",50,50);
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  
 
}

function keyPressed() {
  	if (keyCode === 32) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}





