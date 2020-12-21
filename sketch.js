
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree1, ground1, stone1,mango1,boy,sling;

function preload()
{
	boy = loadImage("Images/boy.png")
}
function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree1 = new Tree();
	ground1 = new Ground(600,590,1400,15)
	stone1 = new Stone(100,500);
	mango1 = new Mango(1000,200);
	mango2 = new Mango(800,200)
	mango3 = new Mango(600,200)
	mango4 = new Mango(700,200)
	mango5 = new Mango(900,250)
	mango6 = new Mango(1000,300)
	mango7 = new Mango(800,100)
	mango8 = new Mango(700,100)
	mango9 = new Mango(900,150)
	mango10 = new Mango(650,250)
	sling = new Slingshot(stone1.body,{x:100, y:400});
	Engine.run(engine);
  
}


function draw(){
  background("lightblue");
  tree1.display();
  ground1.display();
  image(boy,100,400,200,250);
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  sling.display();
  detectcollision(stone1,mango1);
  detectcollision(stone1,mango2);
  detectcollision(stone1,mango3);
  detectcollision(stone1,mango4);
  detectcollision(stone1,mango5);
  detectcollision(stone1,mango6);
  detectcollision(stone1,mango7);
  detectcollision(stone1,mango8);
  detectcollision(stone1,mango9);
  detectcollision(stone1,mango10);
}


function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}

function detectcollision(stone1,mango1){
	mango1BodyPosition=mango1.body.position
	stone1BodyPosition=stone1.body.position

	var distance = dist(stone1BodyPosition.x, stone1BodyPosition.y,mango1BodyPosition.x,mango1BodyPosition)
	if(distance <= mango1.r + stone1.r)
	{
		Matter.Body.setStatic(mango1.body,false)
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone1.body,{x:50, y:270})
	}
}