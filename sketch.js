var cake1,cake2,candle; 

function setup() {
  createCanvas(400,400);
       cake1= createSprite(250,200,100,50);
       cake1.shapeColor=color("pink");
        
       cake2=createSprite(250,150,70,50);
       cake2.shapeColor=color("lightblue");

       candle=createSprite(250,100,10,30);
       candle.shapeColor=("black")
  
}

function draw() {
  background(255,255,255);
  
  drawSprites();
}
