/**
 * Defining fixed defination and movable defination to create the basic platform
 * This will enable us to make anything
 */
    const Engine=Matter.Engine;
    const World=Matter.World;
    const Bodies=Matter.Bodies;
    const Body=Matter.Body;

    var engine,world;

/**
 * Defining Drops as an array
 * Defining the umbrella
 */
    var drops=[];
    var umbrella;

/**
 * Defining maxDrop to make a loop to help create a rain effect
 */
   var maxDrops=100;

   var thunderCreatedFrame = 0;
   var rand;

   var thunder,thunder1,thunder2,thunder3,thunder4;

function preload(){
   thunder1 = loadImage("1.png");
   thunder2 = loadImage("2.png");
   thunder3 = loadImage("3.png");
   thunder4 = loadImage("4.png");
}

function setup(){
 //Creating the canvas
    createCanvas(400,700);   

 //Setting Up the Variables
    engine=Engine.create();
    world=engine.world;

 //Making the rain
    for(var i = 0; i<maxDrops;i++){
    drops.push(new Drops(random(0,400),random(0,400)))

 //Making Umbrella
      umbrella=new Umbrella(200,500);
 }

 swal({
    title:'Welcome',
    text:'This is an animation made using a JavaScript based physics engine called matter.js. This program is for demonstration purposes of my skill of handling JavaScript especially using libraries like p5.js and matter.js',
    icon:'success'
 })

}

function draw(){
   Engine.update(engine);
    background(0);

    for(var i=0;i<maxDrops;i++){
       drops[i].display();
       drops[i].reposition();
    }

    umbrella.display();

    rand = Math.round(random(1.4))
    if(frameCount%80===0){
        thunderCreatedFrame = frameCount
        thunder = createSprite(random(10,370),random(10,30),10,10)
        switch(rand){
            case 1: thunder.addImage(thunder1)
                break;
            case 2: thunder.addImage(thunder2)
                break;
            case 3: thunder.addImage(thunder3)
                break;
            case 4: thunder.addImage(thunder4)
                break;
                default: break;
        }
        thunder.scale = random(0.3,0.6)
    }
    if(thunderCreatedFrame+10===frameCount && thunder){
      thunder.destroy();
  }

    drawSprites();
}