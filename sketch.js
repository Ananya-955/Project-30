const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand, stand2;
var box1, box2, box3, box4, box5, box6, box7;
var box8, box9, box10,box11, box12, box13,box14, box15, box16, box17, box18 ; 
var polygon,slingshot;


function setup() {
  //createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;



  stand = new Ground(500,350,400,10);
  stand2= new Ground(1000,300,400,10);

//stand2 level 3 
box1= new Box(880,225,30,40);
//box8.shapeColor("blue");
box2 = new Box(910,225,30,40);
box3 = new Box(940,225,30,40);
box4 = new Box(970,225,30,40);
box5 = new Box(1000,225,30,40);
//stand2 level 2
box6 = new Box(910,145,30,40);
box7 = new Box(940,195,30,40);
box8= new Box(970,195,30,40);
//stand2 top level
box9 = new Box(940,155,30,40);
  

  
  //stand level 3 
  box10= new Box(350,235,30,40);
  //box8.shapeColor("blue");
  box11 = new Box(380,235,30,40);
  box12 = new Box(410,235,30,40);
  box13 = new Box(440,235,30,40);
  box14 = new Box(470,235,30,40);
  //stand level 2
  box15 = new Box(380,195,30,40);
  box16 = new Box(410,195,30,40);
  box17= new Box(440,195,30,40);
  //stand top level
  box18 = new Box(410,155,30,40);

 polygon= new Polygon(50,160);

slingshot= new SlingShot(polygon.body, {x:50, y: 160});

  
  

}


function draw() {
  background("white"); 
  Engine.update(engine); 
  strokeWeight(4);

  stand.display();
  stand2.display();

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
  box18.display();
  box17.display();

  polygon.display();
  slingshot.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition (polygon.body, {x:mouseX, y:mouseY});
}

function mouseReleased (){
  slingshot.fly();
}
function keyPressed(){
  if (keyCode===32){
    slingshot.attach(polygon.body);
    Matter.Body.setPosition(polygon.body,{x:50, y:160});
  }

}
