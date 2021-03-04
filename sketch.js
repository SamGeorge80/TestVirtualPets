//Create variables here

var dog;
var happyDog;
var database;
var foodS;
var foodStock;
function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(800,500);
  database = firebase.database();

  dog=createSprite(width/2,250,10,10);
  dog.addImage("dog",dogImg);
  dog.scale=0.3;

  happyDog= createSprite(width/2,250,10,10);
  happyDog.addImage("happydog",happyDogImg);
  happyDog.scale=0.3;

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  text("Press up arrow to feed dog");
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }
  drawSprites();
  //add styles here
  textSize(25);
  fill("white");
  stroke("white");

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}


