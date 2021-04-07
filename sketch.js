const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7;
var hero,monster,rope,ground;

var boxes=[];
var y=200;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,400,200);
  rope = new Rope(hero.hero, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);

  for(var i=0 ; i<10 ; i++){
    boxes[i]=new Box(750,y,70,70)
    y+=70;
  }

}

function draw() {
  background(bg);
  Engine.update(engine);

  for(var i=0 ; i<boxes.length ; i++){
  boxes[i].display();
  }

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()

  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
  Matter.Body.setPosition(hero.hero,{x:mouseX,y:mouseY});
}