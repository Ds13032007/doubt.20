const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var bgSprite;
var witch, theif;

function preload(){
    backgroundImg = loadImage("Spr/BG.jpg")
}
                                                                                              
function setup(){
                    
    var canvas = createCanvas(6000,4000);
    console.log(backgroundImg.width);
    engine = Engine.create();
    world = engine.world;
     bgSprite = createSprite(1000,1000)
     bgSprite.addImage("img",backgroundImg);
    
    


}
function draw()
{
    

    
    

    drawSprites();  
}