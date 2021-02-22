
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var hammer;
var Ground;
var sand1, sand2, sand3, sand4, sand5, sand6;
var stone;
var rubber;
var iron;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(100,100)
	Ground = new ground(600, height, 1200,20)
	sand1 = new Sand(400,500, 3)
	sand2 = new Sand(400,500, 3)
	sand3 = new Sand(400,500, 3)
	sand4 = new Sand(400,500, 3)
	sand5 = new Sand(400,500, 3)
	sand6 = new Sand(400,500, 3)
	stone = new Stone(300,500)
	rubber = new Rubber(500,400,50)
	iron = new Iron(100,300)
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
  hammer.display();
  Ground.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  stone.display();
  rubber.display();
  iron.display();
  drawSprites();
 
}



