// var for making sprites(without images);
 var playerName, title, country, boundry1, boundry2, back2, back3, start2;


 // var for making  game states
 var FORM = 1;
 var INTRO = 2;
 var INSTRUCT = 3;
 var INFINITE = 4;
 var PLAYINF = 5;
 var LEVEL = 6;
 var LEVEL_1 = 7;
 var gameState = 1;


 // var for loading iamge
 var startImg, insImg, infImg, levelImg, backImg, playImg,covidImg, coinsImg, bg4Img, playerImg, leftImg, rightImg, dropImg, shootImg, back2Img, sanitizerImg, maskImg;

 
 // var for adding Image
 var start, bg1, instruction, infinite, level, back, play, covid, coin, bg4, sanitizer,left, right, drop, shoot, mask ; 


 // var for making the scoring system.
 var score = 0;
 var Coins = 0;
 var Sanitizer = 0;




 function preload(){

  // for preloading images
  startImg = loadImage("Images/start.png");
  bg1Img = loadImage("Images/bg2.jpg");
  insImg = loadImage("Images/instructions.png");
  infImg = loadImage("Images/infinite.png");
  levelImg = loadImage("Images/levels.png");
  backImg = loadImage("Images/back.png");
  playImg = loadImage("Images/play.png");
  covidImg = loadImage("Images/covid.png");
  coinsImg= loadImage("Images/coinsss.png");
  bg4Img = loadImage("Images/bg4.jpeg");
  playerImg = loadImage("Images/boy.png");
  leftImg = loadImage("Images/leftArrow.png");
  rightImg = loadImage("Images/rightArrow.png");
  dropImg = loadImage("Images/greenDrop.png");
  shootImg = loadImage("Images/shoot.png");
  back2Img = loadImage("Images/back.png");
  sanitizerImg = loadImage("Images/sanitizer.png");
  maskImg = loadImage("Images/mask.png");
}




  function setup(){

  // Creating group
  CoinsGroup = new Group();
  DropGroup = new Group();
  CovidGroup = new Group();
  SanitizerGroup = new Group();


  // Creating canvas
  createCanvas(windowWidth-5,windowHeight-5);


  // Creating player nname input
  playerName = createInput("Name");
  playerName.position(670,235);


  // Creating title
  title = createElement('h1');
  title.html("✨COVID SHOOTER GAME✨");
  title.position(520,65);


  // Creating country input
  country = createInput("Country");
  country.position(670,415);


  // Creating start button
  start = createSprite(756,600);
  start.addImage(startImg);
  start.scale = 0.5;
  

  // Creating instruction button
  instruction = createSprite(1270,70);
  instruction.addImage(insImg);
  instruction.scale = 0.8;


  // Creating infinite button
  infinite = createSprite(1150,570);
  infinite.addImage(infImg);
  infinite.scale = 0.2;


  // Creating level button
  level = createSprite(370,570);
  level.addImage(levelImg);
  level.scale = 0.2

  
  // Creating back button
  back = createSprite(80,80);
  back.addImage(backImg);
  back.scale = 0.5;


  // Creating background forn playInf game state
  bg4 = createSprite(0,0);
  bg4.addImage(bg4Img);
  bg4.scale = 6+2;


  // Creating play button
  play = createSprite(740,540);
  play.addImage(playImg);
  play.scale = 0.3;


  // Creating player sprite
  player = createSprite(500,100);
  player.addImage(playerImg);
  player.scale = 0.5; 

  
  // Creating boundry 1
  boundry1 = createSprite(0,windowHeight-5,5,1500);


  // Creating boundry 2
  boundry2 = createSprite(1550,windowHeight-5, 5, 1500);


  // Creating left button
  left = createSprite(1400,60);
  left.addImage(leftImg);
  left.scale = 0.15;


  // Creating right button
  right = createSprite(1490,60);
  right.addImage(rightImg);
  right.scale = 0.11;

  // Creating back button in infinite game state
  back2 = createSprite(80,80);
  back2.addImage(back2Img);
  back2.scale = 0.5;


  // Creating back button in level game state
  back3 = createSprite(80,80);
  back3.addImage(back2Img);
  back3.scale = 0.5;


  // Creating start button in level game state
  start2 = createSprite(756,600);
  start2.addImage(startImg);
  start2.scale = 0.5;

}
 
  


function draw(){

  // For setting background image
  background(bg1Img);


  // WHEN GAME STATE IS FORM
  if(gameState === 1){

    // making text
    stroke("black");
    fill("black");
    textSize(20);
    text("Enter Your Name Here 👇👇",640,200);
    text("Enter Your Country Name Here 👇👇",610,380);

    // to hide buttons
    instruction.visible = false;
    infinite.visible = false;
    level.visible = false;
    back.visible = false;
    play.visible = false;
    bg4.visible = false;
    player.visible = false;
    boundry1.visible = false;
    boundry2.visible = false;
    right.visible = false;
    left.visible = false;
    back2.visible = false;
    back3.visible = false;
    start2.visible = false;
   
  }



  // gameState changing from FORM to INTRO
  if(mousePressedOver(start) && gameState === 1){
    gameState = 2;
  }



  // gameState changong from INTRO to INSTRUCT
  if(mousePressedOver(instruction) && gameState === 2){
    gameState = 3;
  }



  // gameState changong back from INSTRUCT to INTRO
  if(mousePressedOver(back) && gameState === 3){
    gameState = 2;
  }



  // gameState changing from INTRO to INFINITE
  if(mousePressedOver(infinite) && gameState === 2){
    gameState = 4;
  }



  // gameState changing from INFINITE to PLAYINF
  if(mousePressedOver(play) && gameState === 4){
    gameState = 5;
  }



  // game state changing from INTRO to LEVEL
  if(mousePressedOver(level) && gameState === 2 ){
    gameState = 6;
  }



  // game state changing from INFINTE to INTRO
  if(mousePressedOver(back2) && gameState === 4){
    gameState = 2;
  }



  // game state changiNg from LEVEL to INTRO
  if(mousePressedOver(back3) && gameState === 6){
    gameState = 2;
  }



  // game state changing from LEVEL to LEVEL_1
  if(mousePressedOver(start2) && gameState === 6){
    gameState = 7;
  }



  // WHEN GAME STATE IS PLAYINF
  if(gameState === 5){
    
    // to set velocity of covid and coins
    CovidGroup.setVelocityYEach(-15);
    CoinsGroup.setVelocityYEach(-15);

    // to hide things
    play.visible = false;  
    back2.visible = false;
    back3.visible = false;
    start2.visible = false;
    
    // to show things
    bg4.visible = true;
    player.visible = true;
    right.visible = true;
    left.visible = true;

    // to spawn covids;
    spawnCovid();

    // to spawn coins;
    spawnCoins();

    // to spawn sanitizer
    spawnSanitizer();
    
    // to move the player with right arrow keys
    if(keyDown("RIGHT_ARROW") || mousePressedOver(right) && gameState === 5){
      player.x = player.x+35;
    }

    // to move player with left aroow keys
    if(keyDown("LEFT_ARROW") || mousePressedOver(left) && gameState === 5){
      player.x = player.x-35;
    }

    // making player collide with boundry
    player.collide(boundry1);
    player.collide(boundry2);

    // to make drops
    if(keyWentDown("space") && gameState === 5){
      spawnDrop();    
    } 
  
    // To define that what will happen when player will touch covid
    if(player.isTouching(CoinsGroup)){
     CoinsGroup.destroyEach();
     Coins = Coins+1;
    }   
    
    // To define that waht will happen when Drop will touch covid
    if(DropGroup.isTouching(CovidGroup)){
      CovidGroup.destroyEach();
      score = score+1;
    } 

    // To define that what will happen when Player will touch coins
    if(player.isTouching(SanitizerGroup)){
      SanitizerGroup.destroyEach();
      Sanitizer = Sanitizer + 1;
    }
    
    
 }




   // WHEN GAME STATE IS LEVEL_1
   if(gameState === 7){
    
    // to hide button
    start2.visible = false;
    back3.visible = false;

    // to show things
    bg4.visible = true;
    player.visible = true;
    right.visible = true;
    left.visible = true;

    // to spawn covids;
    spawnCovid();

    // to spawn coins
    spawnCoins();
    
    // to move the player with right arrow key
    if(keyDown("RIGHT_ARROW") || mousePressedOver(right) && gameState === 7){
      player.x = player.x+25;
    }

    // To move the player with left arrow key
    if(keyDown("LEFT_ARROW") || mousePressedOver(left) && gameState === 7){
      player.x = player.x-25;
    }

    // making player collide with boundry
    player.collide(boundry1);
    player.collide(boundry2);

    // to make drops
    if(keyWentDown("space") && gameState ===7){
      spawnDrop();    
      
     }

    

  }
  



  drawSprites();


  // WHEN GAME STATE IS INTRO
  if(gameState === 2){

    // to hide form options
    hiding();

    // making the things invisible
    start.visible = false;
    back.visible = false;
    play.visible = false;
    bg4.visible = false;
    player.visible = false;
    back2.visible = false;
    back3.visible = false;
    start2.visible = false;

    // to tell the player story of game
    stroke("black");
    fill("black");
    textSize(20);
    textFont("algerian");
    text("your  country  is  in  danger !!  there  is  a  deadly  virus🎇🎇",450,200);
    text("which  is  continuously  killing  many  residents  of  your  country",420,250);
    text("you  are  warrior  and  i  am  pretty  sure you  will  save  your  country",390,300);
    text("so  let's  do  this  mission👐",630,350);
    
    // to tell the players about modes
    stroke("red");
    fill("red")
    textSize(20);
    textFont("comic sans");
    text("Choose any one mode",670,470);

    // to make the buttons visible
    instruction.visible = true;
    infinite.visible = true;
    level.visible = true;
 
  }




  // WHEN GAME STATE IS INSTRUCT
  if(gameState === 3){
    
    // to hide intro button
    instruction.visible = false;
    infinite.visible = false;
    level.visible = false;
    play.visible = false;
    bg4.visible = false;
    player.visible = false;
    play.visible = false;
    back2.visible = false;
    back3.visible = false;
    start2.visible = false;

    // to tell that it is instruction mode
    stroke("black");
    fill("black");
    textSize(50);
    textFont("algerian");
    text("INSTRUCTIONS",640,100);

    // to tell the instruction
    stroke("blue");
    fill("blue");
    textSize(39);
    textFont("monotype corsiva");
    text("1. Use  right  and  left  arrow  key  to  move.",200,200);
    text("2. Complete the target given to you to defeat the virus.",200,250);
    text("3. Don't collide with virus !!",200,300);
    text("4. Collect coins 📀",200,350);
    text("5. There will be 2 modes of game 'levels' and 'infinite'.",200,400);
    text("Its you choice you can choose any mode😃",500,500);

    // to make the button visible
    back.visible = true;
    
  }




  // WHEN GAME STATE IS INFINITE
  if(gameState === 4){
    
    // to hide buttons
    instruction.visible = false;
    infinite.visible = false;
    level.visible = false;
    bg4.visible = false;
    player.visible = false;
    back3.visible = false;
    start2.visible = false;
    
    // to show things
    play.visible = true;
    back2.visible = true;

    // to tell what to do
    stroke("black");
    fill("black");
    textSize(25);
    text("1. Either use right and left arrow keys or use right and left button to move.",200,100);
    text("2. Either use space key or use space button to shoot covid.",200,150);
    text(" Press start button to play the game",520,350);
  
  }




  // WHEN GAME STATE IS PLAYINF
  if(gameState === 5){

    // for making score function;
    stroke("black");
    fill("black");
    textSize(20);
    textFont("comic sans");
    text("Score :" + score,10,20);
    text("Coins :" + Coins,10,50);
    text("Sanitizer :" + Sanitizer,10,80);

    // for making infinite text
    stroke("red");
    fill("red");
    textSize(30);
    textFont("algerian");
    text("infinite mode",600,30);


  }




  // WHEN GAME STATE IS LEVEL
  if(gameState === 6){
    // for hiding buttons
    instruction.visible = false;
    level.visible = false;
    infinite.visible = false;
    back2.visible = false;

    // to show button
    back3.visible = true;
    start2.visible = true;

    // to tell the story for the first level
    stroke("black");
    fill("black");
    textSize(25);
    textFont("algerian");
    text("Oh  we  have  discovered  a  new  virus  'covid 19' ",450,100);
    text("its  very  dangerous  and  harming  our  lungs" ,460,150);
    text("as  you  are  a  good  shooter  you  must  save  your  country",380,200);

    stroke("red");
    fill("red");
    textFont("comic sans");
    textSize(30);
    text("Complete  the  given  target  to  overcome  this  1st  wave :--",400,320);

    stroke("green");
    fill("green");
    textSize(20);
    text("- SHOOT 20 VIRUS",400,390);
    text("- COLLECT 10 COINS",400,430);
    text("- COLLECT 2 BOTTLES OF SANITIZER",400,470);
  }

  

  
}

// making function hiding
function hiding(){
  playerName.hide();
  title.hide();
  country.hide();

}



// making a function to spawn coins
function spawnCoins(){
  if(frameCount % 100 ===0){

    // to create covid sprite
    coins = createSprite(200,windowHeight-5);
    coins.addImage(coinsImg);
    coins.scale = 0.1;

    // Setting its veloctiy and x position(random);
    coins.x = random(40,1200);
    coins.velocityY = -10;

    // to avoid memory leak
    coins.lifetime = 100;

    // to add coins sprite in CoinsGroup
    CoinsGroup.add(coins);

  }
  
}



// making function to sapwn covid
function spawnCovid(){
  if(frameCount % 50 === 0){

    // Creating covid sprite
    covid = createSprite(200,windowHeight-5,50,50);
    covid.addImage(covidImg);
    covid.scale = 0.1

    // giving it velocity and x position(random)
    covid.velocityY = -10;
    covid.x = random(20,1300);

    // to avoid memory leak
    covid.lifetime = 100;

    // to add it in CovidGroup
    CovidGroup.add(covid);

    
  }
  
  
}



// Making a function for spawning drops
 function spawnDrop(){

  // Making drop sprite
  drop = createSprite(200,200,20,20);
  drop.addImage(dropImg);
  drop.scale = 0.050;

  // giving it velocity and random x position
  drop.x = player.x;
  drop.velocityY= 15;

  // to avoid memory leak
  drop.lifetime = 50;
    
  // to add it in DropGroup
  DropGroup.add(drop);


  
}


// making a function for spawning sanitizer
 function spawnSanitizer(){

  if(frameCount % 200 === 0){
  // making sanitizer sprite
  mask = createSprite(200,windowHeight-5,20,20);
  mask.addImage(maskImg);
  mask.scale = 0.1;

  // giving it velocity and random x position
  mask.velocityY = -10;
  mask.x = random(50,1100);
  
  // to avoid memory leak
  mask.lifetime = 100;

  // to add it in the group
  SanitizerGroup.add(mask);

   }
 }

 



  





  







  

  
  
  
  
  
  
  
  
  
  
 