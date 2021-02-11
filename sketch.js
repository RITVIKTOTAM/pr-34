const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hero1,monster1,ground1,background1,backgroundImage,log1,chain1,log2,log3,log4,log5,log6,log7,log8,log9,log10,log11,log12,log13,log14,log15,log16,log17,log18,log19;

function preload(){

  backgroundImage = loadImage("background.png");
  

}

function setup() {
  createCanvas(600, 600);

  engine = Engine.create();
  world = engine.world;  

  hero1 = new Hero(100,200,100,70);
  monster1 = new Alien(400,150,70,80);
  log1 = new Log1(100,100,100,10);
  log2 = new Log1(250,290,100,10);
  log3 = new Log(270,140,20,30);
  log4 = new Log(210,240,20,30);
  log5 = new Log(230,240,20,30);
  log6 = new Log(250,240,20,30);
  log7 = new Log(270,240,20,30);
  log8 = new Log(290,240,20,30);
  log9 = new Log(240,90,20,30);
  log10 = new Log1(300,595,600,10);
  log11 = new Log(220,190,20,30);
  log12 = new Log(240,190,20,30);
  log13 = new Log(260,190,20,30);
  log14 = new Log(280,190,20,30);
  log15 = new Log(260,90,20,30);
  log16 = new Log1(400,170,20,10);
  log17 = new Log(230,140,20,30);
  log18 = new Log(250,140,20,30);
  log19 = new Log1(595,300,10,600);
  chain1 = new Chain(log1.body,hero1.body);
  
 
}

function draw() {
  background(backgroundImage);

  Engine.update(engine);



 
 hero1.display();
 log1.display();
 log2.display();
 log3.display();
 log4.display();
 log5.display();
 log6.display();
 log7.display();
 log8.display();
 log9.display();
 log10.display();
 log11.display();
 log12.display();
 log13.display();
 log14.display();
 log15.display();
 log19.display();
 log17.display();
 log18.display();
 monster1.display();
 chain1.display();
 

 
  
}

function keyPressed(){
  if  (keyCode == 32){
    Matter.Body.applyForce(hero1.body,hero1.body.position,{x:20009,y:-20009});
  }
}
