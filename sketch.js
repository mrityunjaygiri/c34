const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var box1,box2,box3,box4,box5,box6;
var box7,box8,box9, box10,box11,box12,box13,box14;
var box15,box1116,box117,box18,box19,box20, box21,box22;

var ball;

var slingShot;



function setup(){
    var canvas = createCanvas(1500,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,700,1300,30);

    box1 = new Box(700,100,80,80);
    box2 = new Box(700,100,80,80);
    box3 = new Box(700,100,80,80);
    box4 = new Box(700,100,80,80);
    box5 = new Box(700,100,80,80);
    box6 = new Box(700,100,80,80);
   
    box7 = new Box(850,100,80,80);
    box8 = new Box(850,100,80,80);
    box9 = new Box(850,100,80,80);
    box10 = new Box(850,100,80,80);
    box11 = new Box(850,100,80,80);
    box12 = new Box(850,100,80,80);
    box13 = new Box(850,100,80,80);
    box14 = new Box(850,100,80,80);

    box15 = new Box(1000,100,80,80);
    box16 = new Box(1000,100,80,80);
    box17 = new Box(1000,100,80,80);
    box18 = new Box(1000,100,80,80);
    box19 = new Box(1000,100,80,80);
    box20 = new Box(1000,100,80,80);
    box21 = new Box(1000,100,80,80);
    box22 = new Box(1000,100,80,80);
    
    ball = new Ball(200,200,80);
   slingshot = new SlingShot(ball.body,{x:500, y:50});
}

function draw(){
    background("lightgreen");
    Engine.update(engine);

    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
   
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
   
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();

    ball.display();
     

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


