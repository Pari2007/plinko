const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var plinko=[];
var particle=[];
var division=[];
var divheight=150;
var width=10;
function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(400,400,800,20);
  // divisions
  for(var k=0;k<=width;k=k+80){
    division.push(new Divisions(k,height-divheight/2,10,divheight));
  }
  // plinkos
  for(var j=40;j<=width;j=j+50){
    plinko.push(new Plinko(j,75,15));
  }
  for(var a=40;a<=width-10;a=a+50){
    plinko.push(new Plinko(a,125,15));
  }
   for(var z=40;z<=width-10;z=z+50){
     plinko.push(new Plinko(z,175,15));
   }
  //  particles
  console.log(frameCount);
  // if(frameCount%100===0){
  //   particle.push(new Particles(random(width/2-10,width/2+10),10,10));
  // }
  
}
function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();
for(var k=0;k<division.length;k++){
  division[k].display();
}
for(var j=0;j<plinko.length;j++){
  plinko[j].display();
}
for(var z=0;z<plinko.length;z++){
  plinko[z].display();
}
for(var a=0;a<plinko.length;a++){
  plinko[a].display();
}
if(frameCount%100===0){
  particle.push(new Particles(random(width/2-10,width/2+10),10,10));
}
 for(var b=0;b<particle.length;b++){
  particle[b].display();
 }

  
  
  drawSprites();
}