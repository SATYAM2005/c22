const Engine = Matter.Engine;//name spacing.
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world,ball,ground;
function setup() {
  createCanvas(400,400);
 engine = Engine.create();
 world = engine.world;

var options = {isStatic: true};
 ground = Bodies.rectangle(200,380,400,10,options);
 World.add(world,ground);
 console.log (ground);
 
 var op = {restitution: 1};
 ball = Bodies.circle(200,100,10,op);
 World.add(world,ball);
}

function draw() {
  background(150,0,100); 
  Engine.update(engine);
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10)
}