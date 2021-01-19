var dog, dog_img, happyDog, happyDog_img;
var foodS,foodStock;
var database;

function preload()
{
  dog_img=loadImage("images/dog1.png");
  happydog_img=loadImage("images/dog2.png")
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog=createSprite(250,400);
  dog.addImage(dog_img);
  dog.scale=0.3;
 

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(49,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
  
    dog.addImage("happydog",happydog_img);
  }

  drawSprites();
  textSize(40);
  text("Milk Stock: "+ foodS,250,100);

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  
  })
}



