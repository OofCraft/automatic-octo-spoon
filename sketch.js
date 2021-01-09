//Create variables here
var dog,doge
var hdog, hdoge

var database, foodS, foodStock;

function preload()
{
  //load images here
  doge = loadImage("images/dogImg1.png")
  hdog = loadImage("images/dogImg.png")

}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog = createSprite(250,350,50,50);
  dog.addImage("doge", doge);
  dog.scale = 0.15;
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)

}


function draw() {  
  background(46,193,87);
  if (keyDown("UP_ARROW")){
    writeStock(foodS);
    //Food=Food-1
    dog.addImage(hdog);
  }

  drawSprites();
  //add styles here
  text(foodStock,20,20);
}

function readStock(data){
  foodS=data.val();

}

function writeStock(x){
  database.ref('/').update({Food:x})

}