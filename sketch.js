
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var Dustbin1,Dustbin2,Dustbin3;
var paper1;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(400,650,800,20);
	Dustbin1= new Dustbin(515,590,20,100);
	Dustbin2= new Dustbin(600,630,150,20);
	Dustbin3= new Dustbin(665,590,20,100);
    paper1= new Paper(200,600,20);

	Engine.run(engine);
}


function draw() {

  background("skyblue");
  
  Engine.update(engine);

  paper1.display();
  ground.display();
  Dustbin1.display();
  Dustbin2.display();
  Dustbin3.display();
}
function keyPressed(){
if(keyCode=== UP_ARROW){

Body.applyForce(paper1.body,paper1.body.position,{x:10,y:-30});

}


}


