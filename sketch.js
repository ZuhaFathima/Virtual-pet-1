var pet,petimg,petimg2;
var database,foodS;

function preload()
{
  petimg = loadImage("images/dogImg.png");
 petimg2 = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  food =foodstockref;
  createCanvas(500, 500);
  pet = createSprite(250,350,5,5);
  pet.addImage(petimg);
  pet.scale =0.25;
  
var foodstockref = database.ref("food");
 foodstockref.on("value",readStock);

}


function draw() {  
background(0,0,0);
  drawSprites();

if(keyWentDown(UP_ARROW)){
   pet.addImage(petimg2)
   pet.scale=3
       foodS = foodS-1;
    writeStock(foodS);
}

text("note:Press UP_ARROW key to feed Drago Milk",150,50);

text("food remaining:"+foodS,150,100);

}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref("/").update({
    food:x
  })
 
}

