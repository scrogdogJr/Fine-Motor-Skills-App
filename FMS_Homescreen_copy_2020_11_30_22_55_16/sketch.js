

let activity1BoxWidth = 87.5;
let activity1BoxHeight = 100;
let runActivity = 0;

let activity2BoxWidth = 87.5;
let activity2BoxHeight = 100;
let activity3BoxWidth = 87.5;
let activity3BoxHeight = 100;

let name = "Fine Motor Skill Enhancer";
let description = "Fine motor skills are how we use our hands and coordinate the small muscles that control our fingers. Those skills, along with other arm functions such as reaching and grasping, can be affected by stroke. Things like buttoning a shirt, tying shoe laces, cutting food, etc. use fine motor skills. These activities are encouraged and practiced. After rehab, it’s important to keep doing things that encourage fine motor skills, like dressing and feeding, as independently as possible.Fine motor skills are how we use our hands and coordinate the small muscles thatFine motor skills are how we use our hands and coordinate the small muscles that control our fingers. Those skills, along with other arm functions such as reaching and grasping, can be affected by stroke. Things like buttoning a shirt, tying shoe laces, cutting food, etc. use fine motor skills. These activities are encouraged and practiced. After rehab, it’s important to keep doing things that encourage fine motor skills, like dressing and feeding, as independently as possible. The following activities will immerse you in a therapeutic experience to revitalize your fine motor skills. We hope to stimulate you while you better yourself and your ability to interact."

let contactReached = false;

let startButtonX = 200;

let startButtonY = 70;

let startTextSize = 30;

let utensilsReady = false;

let fork;

let forkX = 95;
let forkY = 300;

let targets = [];
let fingers = [];

let numOfFingersDragged = 0;

let isForkDragged = false;

let forkPractice = false;

let isFingersLocked = false;

let startTimer = 5;

let playTimer = 0;

let goSize = 100;

let isPancake = false;

let pancakeX = 0;

let pancakeY = 0;

let isPancakeDragged = false;

let score = 0;

let ding;

let music;

let musicTimer = 0;

let startMusic = false;

let highScore = 0;

let newHighScore = false;

var count = 0;

let timer = 60;

let backButtonX = 100;

let backButtonY = 60;

let backTextSize = 20;


function preload(){
  ding = loadSound("Ding-Sound-Effect.mp3");
  music = loadSound("Background Music.mp3");
}

function setup() {
  createCanvas(1000, 600);

  background(204, 255, 255);
  
  frameRate(60);
  
  
  
  fork = loadImage('fork2.png');
  pancake = loadImage('pancake.PNG');
  
  for (i = 0; i < 4; i++){
    
    targets[i] = {
      
      x: 0,
      y: 0,
      
      display: function(x, y) {
      
        this.x = x;
        this.y = y;
        
        fill("red");
        stroke("red");
        circle(this.x, this.y, 10);  
      }
    }
  }
  
  for (i = 0; i < 4; i++){
    fingers[i] = {
      
      x: 0,
      y: 0,
      isDragged: false,
      isLocked:  false,
      
      display: function(x, y) {
      
        this.x = x;
        this.y = y;
        
        noFill();
        strokeWeight(2);
        stroke("red");
        circle(this.x, this.y, 20);  
      }
    }
  }
  
  alerts = {
    
    pressKey: function(key) {
      stroke('black');
         fill("white");
         rect(430, 345, 300, 180);
         textSize(35);
         textStyle(BOLD);
         textAlign(LEFT, BASELINE);
         fill("black");
         noStroke();
         text("Press and hold          to lock in the finger!", 430, 355, 275, 150);
         fill(0, 255, 0);
         textSize(37);
         text("\"" + key + "\"", 295, 352);
    },
    
    base: function(alert, size, lineSpacing) {
      fill('white');
      stroke("black");
      rectMode(CENTER);
      rect(430, 345, 350, 180);
      textSize(size);
      textLeading(lineSpacing);
      textStyle(BOLD);
      fill("blue");
      noStroke();
      textAlign(CENTER, CENTER);
      text(alert, 430, 345, 350, 180);
    }
  }
}

function draw(){
  
  switch (runActivity){
      
    case 0:
  
  rectMode(CORNER);
      
  textAlign(LEFT, BASELINE);
  
  createCanvas(1000, 600);
  //Resets background for moving objects
 background(204, 255, 255);
  
  //Makes Title Box
  stroke(0);
  fill(255);
  rect(22, 22, 350, 35);
  
  //Puts title in box
  fill(0);
  textSize(23);
  text(name, 36, 28, 350, 35);
  
  //Makes description box
  strokeWeight(3);
  fill("white");
  stroke(255, 230, 238);
  rect(22, 78, 956, 150);
  
  strokeWeight(1);
  stroke("black");
  fill("black");
  
  textSize(14);
  text(description, 35, 97, 940, 134);
  
  
  //Makes activities title box
  fill("white");
  noStroke();
  rect(22, 250, 350, 35);
  
  stroke("black");
  
  //Puts in the Activities title in box
  textSize(23);
  fill(0);
  text("Activities", 35, 258, 350, 35);
  
  rectMode(RADIUS);
  
  //Makes Activity 1 box
  fill("white");
  rect(109.5, 320, 87.5, 20);
  
  
  //Puts in Activity 1 title in box
  textSize(15);
  textStyle(NORMAL);
  fill(0);
  text("Activity 1-", 77, 304, 175, 40);
  text("Putting in Contacts", 47, 323, 175, 40);
  
  
  //Make the box bigger when the mouse is rolled over the box.
  if (mouseX > 22 && mouseX < 22 + 175 && mouseY > 350 && mouseY < 350 + 200){
    activity1BoxWidth = 87.5 * 1.1;
    activity1BoxHeight = 100 * 1.1;
    
    if (mouseIsPressed){
      runActivity = 1;
    }
  }
  
  else{
    activity1BoxWidth = 87.5;
    activity1BoxHeight = 100;
  }
  
  
  //Makes Activity 1 Box with picture
  fill("tan");
  rect(109.5, 450, activity1BoxWidth, activity1BoxHeight);
  
  //Create eye picture
  fill("white"); 
  circle(138, 406, 80);
  fill('#663300');
  ellipse(103, 406, 10.6, 39.75);
  
  //Create contact picture
  fill('#CCFFFF');
  ellipse(59, 481, 26.5, 53);

  
  //Makes Activity 2 box
  fill("white");
  rect(500, 320, 87.5, 20);
  
  //Puts in Activity 2 title in box
  textSize(15);
  textStyle(NORMAL);
  fill(0);
  text("Activity 2-", 468, 304, 175, 40);
  text("Using Utensils", 453, 323, 175, 40);
  
  //Make the box bigger when the mouse is rolled over the box.
  if (mouseX > 412.5 && mouseX < 500 + 87.5 && mouseY > 350 && mouseY < 350 + 200){
    activity2BoxWidth = 87.5 * 1.1;
    activity2BoxHeight = 100 * 1.1;
    
    if (mouseIsPressed)
      runActivity = 2;
  }
  
  else{
    activity2BoxWidth = 87.5;
    activity2BoxHeight = 100;
  }
  
  //Make Activity 2 picture box
  fill(255, 221, 153);
  rect(500, 450, activity2BoxWidth, activity2BoxHeight);
  
  imageMode(CENTER);
      
  image(fork, 500, 450, 22.5, 150);
  
  //Makes Activity 3 box
  fill("white");
  rect(890.5, 320, 87.5, 20);
  
  //Puts in Activity 3 title in box
  textSize(15);
  textStyle(NORMAL);
  fill(0);
  text("Activity 3-", 859, 304, 175, 40);
  text("Typing", 867, 323, 175, 40);
  
  if (mouseX > 890.5 - 87.5 && mouseX < 890.5 + 87.5 && mouseY > 350 && mouseY < 350 + 200){
    activity3BoxWidth = 87.5 * 1.1;
    activity3BoxHeight = 100 * 1.1;
    
    if (mouseIsPressed)
      runActivity = 3;
  }
  
  else{
    activity3BoxWidth = 87.5;
    activity3BoxHeight = 100;
  }
  
  fill(125);
  rect(890.5, 450, activity3BoxWidth, activity3BoxHeight);
      
  fill('white');
  textStyle(BOLD);
  strokeWeight(7);
  textSize(60);
  textAlign(CENTER, CENTER);
  text("ABC", 890.5, 450);
     
  break;
      
  case 1:
     

  stroke(1);
  rectMode(CORNER);
   //Non-moving objects
   
    createCanvas(900, 500);
    background("white");
      
    if (mouseIsPressed && mouseX > 700 && mouseX < 700 + 20 && mouseY > 150 && mouseY < 150 + 75 && keyIsDown(81) && keyIsDown(90)){
    contactReached = true;
  }
      
    if (contactReached){
      fill(0);
      textSize(45);
      textAlign(CENTER, CENTER);
      text("Good Job!", width/2, height/2);
      
      if(mouseIsPressed)
        contactReached = false;
      
    }
      
    textAlign(LEFT, BASELINE);
  
    //Title box
    fill(255);
    rect(330, 35, 250, 30);
    //Title text
    fill(0);
    textSize(25);
    textStyle(BOLD);
    text("Putting in Contacts", 340, 40, 500);
  
    if (mouseIsPressed) { 
    }
    else{
      //Explanation box will appear as soon as the user enters the page
      //Explanation box
      fill("light gray");
      rect(300, 150, 300, 200);
      fill(0);
      //Explanation Text  
      textSize(15);
      text("In this exercise you will be using the left mouse button and keyboard to click on, drag over, and insert the contact into the eye while holding the eye open using the 'q' and 'z' keys on your keyboard. ", 310, 160, 275);
      //User will be able to click off of the explanation box when they have read the instructions 
    }
  
  
  //Moving objects
  
  
    //Eye
    //The eye will have an object "eyelid" over the top that will have to be held open in order       to put the contact in
    fill("white"); 
    circle(765, 150, 150);
    fill('#663300');
    ellipse(700, 150, 20, 75);
  
    //"Table"
    //Purely aesthetic
    fill("tan");
    rect(0, 450, 900, 500);
  
    //Contact + contact mechanics
    //Contact must be clicked and moved to the eye
    if (mouseIsPressed) {
      fill('#CCFFFF');
      ellipse(mouseX, mouseY, 50, 100);
    }
    else {
      fill('#CCFFFF');
      ellipse(100, 450, 50, 100);
    }
  
    //eyelid mechanics
    if (keyIsDown(81)) {
      //open top eyelid
      fill("black");
      rect(675, 0, 200, 100);
    }
    else {
      //closed top eyelid
      fill("black");
      rect(675, 50, 200, 100);
    }
    if (keyIsDown(90)) {
      //open bottom eyelid
      fill("black");
      rect(675, 200, 200, 100);
    }
    else {
      //closed bottom eyelid
      fill("black");
      rect(675, 150, 200, 100);
    }
    
    //Back Button
    rectMode(CENTER);
    stroke("black");
    strokeWeight(2);
    fill('red');
    rect(60, 40, backButtonX, backButtonY);
      
    textAlign(CENTER, CENTER);
    fill('black');
    noStroke();
    textSize(backTextSize)
    text("Back", 60, 40);
  
    if (mouseX > 60 - backButtonX/2 && mouseX < 60 + backButtonX/2 && mouseY > 40 - backButtonY/2 && mouseY < 40 + backButtonY/2){
      backButtonX = 80 * 1.1;
      backButtonY = 40 * 1.1;
      backTextSize = 21 * 1.1;
    
      if (mouseIsPressed){
        runActivity = 0;
        break;
      }
    }
  
    else{
      backButtonX = 80;
      backButtonY = 40;
      backTextSize = 21;
    }     

      break;
  
  //Using Utensils Activity code
  case 2:
      
  
      
  createCanvas(1000, 600);
  background(255, 221, 153);

  noStroke();
  fill("white");
  circle(860, 300, 200);
  
  image(fork, forkX, forkY, 45, 250);
  
  if (playTimer == 0 && startTimer == 5){
    fill('white');
    stroke('black');
    strokeWeight(4);
    rectMode(CENTER);
    rect(width/2, height/2, 900, 500);
    fill('green');
    rect(width/2, 485, startButtonX, startButtonY);
    fill('black');
    textSize(70);
    textAlign(CENTER, CENTER);
    noStroke();
    text("Using Utensils", width/2, 95);
    textSize(30);
    textLeading(45);
    textStyle(BOLD);
    text("  In this exercise, drag each of the four red circles \(fingers\) to their corresponding red target on the fork. When prompted, press the correct key to lock the finger in place. Once all the fingers are locked, the fork can be dragged. You will have 5 seconds to prepare, then 60 seconds to drag as many pancakes as possible to the plate.", width/2, height/2, 850, 350);
    fill('white');
    textSize(startTextSize)
    text("Start", width/2, 485);
    
    if (!mouseIsPressed)
      utensilsReady = true;
      
  
    if (mouseX > width/2 - startButtonX/2 && mouseX < width/2 + startButtonX/2 && mouseY > 485 - startButtonY/2 && mouseY < 485 + startButtonY/2){
      startButtonX = 200 * 1.1;
      startButtonY = 70 * 1.1;
      startTextSize = 30 * 1.1;
    
      if (mouseIsPressed && utensilsReady){
        playTimer = 60;
        startMusic = true;
      }
    }
  
    else{
      startButtonX = 200;
      startButtonY = 70;
      startTextSize = 30;
    }
  }   
  
  if (musicTimer == 0 && startMusic){
    music.play();
    musicTimer = 123;
  }
  
  for (i = 0; i < fingers.length && playTimer > 0; i++){
    
    targets[i].display(forkX, forkY - 15 + (40 * i));
    
    //If the mouse is in the bounds of any of the fingers and pressed and 
    //if there are no fingers currently being dragged, then set the
    //isDragged variable to true to allow the finger to follow
    //the mouse position and record that a finger is being dragged to
    //prevent other fingers from being dragged simultaineously.
    
    if (mouseIsPressed && numOfFingersDragged < 1 && mouseX > fingers[i].x - 9.5 && mouseX < fingers[i].x + 9.5 && mouseY > fingers[i].y - 9.5 && mouseY < fingers[i].y + 9.5){
      
      fingers[i].isDragged = true;
      numOfFingersDragged = 1;
    }
    
    //If the mouse is released and the isDragged variable is true,
    //indicating that a finger was being dragged, set the isDragged
    //variable to false to prevent any finger from following the mouse
    //and record that no fingers are being dragged to allow another to be
    //dragged.
    
    else if (!mouseIsPressed && fingers[i].isDragged == true){
      numOfFingersDragged = 0;
      fingers[i].isDragged = false;
    }
    
    if (fingers[i].isLocked == true)
      fingers[i].display(forkX, forkY - 15 + (40 * i));
    
    //If the isDragged variable is true, then allow the finger to be 
    //dragged by the mouse.
    
    else if (fingers[i].isDragged)
      fingers[i].display(mouseX, mouseY);
    
    
    //Else revert the finger back to its original position.
    else
    fingers[i].display(720, 285 + (40 * i));

    
    
     if (targets[i].x > fingers[i].x - 7 && targets[i].x < fingers[i].x + 7 && targets[i].y > fingers[i].y - 7 && targets[i].y < fingers[i].y + 7){
    
       if (i == 0 && !keyIsDown(65)){
         alerts.pressKey("A");
         fingers[i].isLocked = false;
       }
       
       if (i == 1 && !keyIsDown(83)){
         alerts.pressKey("S");
         fingers[i].isLocked = false;
       }
              
       if (i == 2 && !keyIsDown(68)){
         alerts.pressKey("D");
         fingers[i].isLocked = false;
       }
       
       if (i == 3 && !keyIsDown(70)){
         alerts.pressKey("F");
         fingers[i].isLocked = false;
       }
       
       
       if (i == 0 && keyIsDown(65))
         fingers[i].isLocked = true;
       
       if (i == 1 && keyIsDown(83))
         fingers[i].isLocked = true;
       
       if (i == 2 && keyIsDown(68))
         fingers[i].isLocked = true;
       
       if (i == 3 && keyIsDown(70))
         fingers[i].isLocked = true;
      
    } 
  
  
 
  if (fingers[0].isLocked && fingers[1].isLocked && fingers[2].isLocked && fingers[3].isLocked){
    
    isFingersLocked = true;
    
    if (mouseIsPressed && mouseX < forkX + 15 && mouseX > forkX - 15 && mouseY < forkY + 125 && mouseY > forkY - 42){
      isForkDragged = true;
    
    }
    
    else if (!mouseIsPressed)
      isForkDragged = false;
    
    
    if (isForkDragged){
      
      forkX = mouseX;
      forkY = mouseY;
      
      if (mouseX + 22.5 >= width)
        forkX = width - 22.5;
      else if (mouseX - 22.5 <= 0)
        forkX = 0 + 22.5;
      else if (mouseY + 125 >= height)
        forkY = 600 - 125;
      else if (mouseY - 125 <= 0)
        forkY = 125;
        
      
    }
    
    else if (!forkPractice)
    alerts.base("Click on the fork handle to drag it!", 35, 48);
    
    if (startTimer == 0 && playTimer > 58.5){
      forkPractice = true;
      textAlign(CENTER, CENTER);
      fill('green');
      noStroke();
      textStyle(BOLD);
      textSize(goSize);
      text("GO!", width/2, height/2);
      
      if (playTimer > 59.5)
        goSize += 3.5;
        
    }
    
    else if (startTimer > 0){
      fill("black");
      noStroke();
      textSize(35);
      textAlign(CENTER, CENTER);
      text("Starting in: \n" + startTimer, width/2, 100);
    }
    
    
    
    if (forkPractice && !isPancake){
      pancakeX = random(80, 819);
      pancakeY = random(70, 301);
      isPancake = true;
    }
    
    if (forkPractice && forkX - 22.5 > pancakeX - 70 && forkX + 22.5 < pancakeX + 70 && forkY - 150 < pancakeY - 20)
      isPancakeDragged = true;
    
    if (isPancakeDragged){
      pancakeX = forkX;
      pancakeY = forkY - 130;
    }
    
    if (pancakeX - 70 > 750 && pancakeX + 70 < 970 && pancakeY - 70 > 190 && pancakeY + 70 < 410){
      ding.play();
      score ++;
      isPancake = false;
      isPancakeDragged = false;
    }

  }
  
    else{ 
      isForkDragged = false;
      isFingersLocked = false;
    } 
   
    if (forkPractice)
      image(pancake, pancakeX, pancakeY, 160,   140);
  }
  
  if (frameCount % 60 == 0 && musicTimer > 0){// if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    musicTimer --;
  }
  
  if (isFingersLocked && frameCount % 60 == 0 && startTimer > 0) { 
    startTimer --;
  } 
  
  if (forkPractice && frameCount % 30 == 0 && playTimer > 0){
    playTimer -= 0.5;
  }

  
  if (playTimer == 0 && startTimer == 0){
    fill('white');
    stroke('black');
    strokeWeight(4)
    rect(width/2, height/2, 900, 500);
    fill('red');
    noStroke();
    textSize(70);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("Game Over!", width/2, 100);
    fill('black');
    textSize(40);
    text("Your Score: " + score, 460, height/2  - 50);
    if (score > highScore)
      newHighScore = true;
    
    if (newHighScore){
      highScore = score;
      if (frameCount % 60 <= 30)
        fill("gold");
      textSize(60);
      text("NEW HIGH SCORE!!!", width/2, 410);
    }
    
    fill("black");
    textSize(40);
    text("High Score: " + round(highScore), 460, height/2 + 10);
    
    fill('red');
    stroke('black');
    strokeWeight(4);
    rect(width/2, 500, startButtonX, startButtonY);
    
    fill('white');
    textSize(startTextSize);
    noStroke();
    text("Replay", width/2, 500);
  
    if (mouseX > width/2 - startButtonX/2 && mouseX < width/2 + startButtonX/2 && mouseY > 500 - startButtonY/2 && mouseY < 500 + startButtonY/2){
      startButtonX = 200 * 1.1;
      startButtonY = 70 * 1.1;
      startTextSize = 30 * 1.1;
    
      if (mouseIsPressed){
        forkX = 95;
        forkY = 300;
        score = 0;
        forkPractice = false;
        goSize = 50;
        newHighScore = false;
        startTimer = 5;
        playTimer = 60;
        
      }
    }
  
    else{
      startButtonX = 200;
      startButtonY = 70;
      startTextSize = 30;
    }
  }
  
  else if (playTimer > 0){
  textSize(25);
  fill('black');
  noStroke();
  textStyle(BOLD);
  textAlign(LEFT, BASELINE);
  text("Score: " + score, 50, 500);
  text("High Score: " + highScore, 50, 530);
  if (playTimer <= 10 && frameCount % 60 <= 30)
    fill('red');
  text("Time Remaining: " + round(playTimer), 50, 560);
  }
      
    //Back Button
    rectMode(CENTER);
    stroke("black");
    strokeWeight(2);
    fill('red');
    rect(60, 40, backButtonX, backButtonY);
      
    textAlign(CENTER, CENTER);
    fill('black');
    noStroke();
    textSize(backTextSize)
    text("Back", 60, 40);
  
    if (mouseX > 60 - backButtonX/2 && mouseX < 60 + backButtonX/2 && mouseY > 40 - backButtonY/2 && mouseY < 40 + backButtonY/2){
      backButtonX = 80 * 1.1;
      backButtonY = 40 * 1.1;
      backTextSize = 21 * 1.1;
    
      if (mouseIsPressed){
        runActivity = 0;
        utensilsReady = false;
        forkX = 95;
        forkY = 300;
        score = 0;
        forkPractice = false;
        goSize = 50;
        newHighScore = false;
        startTimer = 5;
        playTimer = 0;
        musicTimer = 0;
        startMusic = false;
        music.stop();
        break;
      }
    }
  
    else{
      backButtonX = 80;
      backButtonY = 40;
      backTextSize = 21;
    }  
      
  break;
   
  //Typing Exercise code
  case 3:

  createCanvas(875, 750);
  background(125);
  
  rectMode(CORNER);    
  textAlign(LEFT, BASELINE);
  
  fill(225);
  rect(285, 50, 300, 140);
  fill(0);
  textSize(15);
  text("In this excersise practice pressing the keys on your keyboard without looking down at your hands while typing, while doing so, make sure not to press to hard as your score will increase! You have 60 seconds, better get going!", 300, 55, 275);
  
  fill(225);
  rect(175, 195, 550, 50);
  fill(0);
  textSize(25);
  text("a b c d e f g h i j k l m n o p q r s t u v w x y z", 200, 230);
  
  fill(225);
  rect(350, 300, 200, 100);
  fill(0);
  textSize(30);
  text("Key Pressed", 365, 330);
  
  fill(225);
  rect(350, 485, 200, 100);
  fill(0);
  textSize(15);
  text("Try and keep the score as low as possible while typing through the complete alphabet.", 360, 500, 200);
  
  fill(225);
  rect(100, 350, 200, 100);
  fill(0);
  textSize(30);
  text("Timer", 160, 385);
  fill(0);
  textSize(40);
  text(timer, 180, 445);
  if (frameCount % 60 == 0 && timer > 0) {
    timer --;
  }
  if (timer == 0) {
    alerts.base("Time's Up!", 45, 0);
  }
      
  
  rectMode(CORNER);
  textAlign(LEFT, BASELINE);
  fill(225);
  rect(350, 600, 200, 100);
  fill(0);
  textSize(30);
  text("Score", 410, 630);
  fill(0);
  textSize(40);
  text(count, 420, 690);
  if(keyIsPressed === true && timer > 0) {
    count++;  
  }
  
  if (keyIsDown(65)) {
    fill("red");
    textSize(25);
    text("a", 200, 210);
    
    fill("red");
    textSize(50);
    text("a", 440, 375);
    }
  if (keyIsDown(66)) {
    fill("red");
    textSize(25);
    text("b", 220, 210);
    
    fill("red");
    textSize(50);
    text("b", 440, 375);
    }
  if (keyIsDown(67)) {
    fill("red");
    textSize(25);
    text("c", 242, 210);
    
    fill("red");
    textSize(50);
    text("c", 440, 375);
    }
  if (keyIsDown(68)) {
    fill("red");
    textSize(25);
    text("d", 261, 210);
    
    fill("red");
    textSize(50);
    text("d", 440, 375);
    }
  if (keyIsDown(69)) {
    fill("red");
    textSize(25);
    text("e", 282, 210);
    
    fill("red");
    textSize(50);
    text("e", 440, 375);
    }
  if (keyIsDown(70)) {
    fill("red");
    textSize(25);
    text("f", 302, 210);
    
    fill("red");
    textSize(50);
    text("f", 440, 375);
    }
  if (keyIsDown(71)) {
    fill("red");
    textSize(25);
    text("g", 316, 210);
    
    fill("red");
    textSize(50);
    text("g", 440, 375);
    }
  if (keyIsDown(72)) {
    fill("red");
    textSize(25);
    text("h", 338, 210);
    
    fill("red");
    textSize(50);
    text("h", 440, 375);
    }
  if (keyIsDown(73)) {
    fill("red");
    textSize(25);
    text("i", 358, 210);
    
    fill("red");
    textSize(50);
    text("i", 440, 375);
    }
  if (keyIsDown(74)) {
    fill("red");
    textSize(25);
    text("j", 370, 210);
    
    fill("red");
    textSize(50);
    text("j", 440, 375);
    }
  if (keyIsDown(75)) {
    fill("red");
    textSize(25);
    text("k", 383, 210);
    
    fill("red");
    textSize(50);
    text("k", 440, 375);
    }
  if (keyIsDown(76)) {
    fill("red");
    textSize(25);
    text("l", 402, 210);
    
    fill("red");
    textSize(50);
    text("l", 440, 375);
    }
  if (keyIsDown(77)) {
    fill("red");
    textSize(25);
    text("m", 416, 210);
    
    fill("red");
    textSize(50);
    text("m", 440, 375);
    }
  if (keyIsDown(78)) {
    fill("red");
    textSize(25);
    text("n", 443, 210);
    
    fill("red");
    textSize(50);
    text("n", 440, 375);
    }
  if (keyIsDown(79)) {
    fill("red");
    textSize(25);
    text("o", 464, 210);
    
    fill("red");
    textSize(50);
    text("o", 440, 375);
    }
  if (keyIsDown(80)) {
    fill("red");
    textSize(25);
    text("p", 485, 210);
    
    fill("red");
    textSize(50);
    text("p", 440, 375);
    }
  if (keyIsDown(81)) {
    fill("red");
    textSize(25);
    text("q", 505, 210);
    
    fill("red");
    textSize(50);
    text("q", 440, 375);
    }
  if (keyIsDown(82)) {
    fill("red");
    textSize(25);
    text("r", 526, 210);
    
    fill("red");
    textSize(50);
    text("r", 440, 375);
    }
  if (keyIsDown(83)) {
    fill("red");
    textSize(25);
    text("s", 542, 210);
    
    fill("red");
    textSize(50);
    text("s", 440, 375);
    }
  if (keyIsDown(84)) {
    fill("red");
    textSize(25);
    text("t", 561, 210);
    
    fill("red");
    textSize(50);
    text("t", 440, 375);
    }
  if (keyIsDown(85)) {
    fill("red");
    textSize(25);
    text("u", 575, 210);
    
    fill("red");
    textSize(50);
    text("u", 440, 375);
    }
  if (keyIsDown(86)) {
    fill("red");
    textSize(25);
    text("v", 596, 210);
    
    fill("red");
    textSize(50);
    text("v", 440, 375);
    }
  if (keyIsDown(87)) {
    fill("red");
    textSize(25);
    text("w", 616, 210);
    
    fill("red");
    textSize(50);
    text("w", 440, 375);
    }
  if (keyIsDown(88)) {
    fill("red");
    textSize(25);
    text("x", 640, 210);
    
    fill("red");
    textSize(50);
    text("x", 440, 375);
    }
  if (keyIsDown(89)) {
    fill("red");
    textSize(25);
    text("y", 660, 210);
    
    fill("red");
    textSize(50);
    text("y", 440, 375);
    }
  if (keyIsDown(90)) {
    fill("red");
    textSize(25);
    text("z", 680, 210);
    
    fill("red");
    textSize(50);
    text("z", 440, 375);
    }
      
  //Back Button
    rectMode(CENTER);
    stroke("black");
    strokeWeight(2);
    fill('red');
    rect(60, 40, backButtonX, backButtonY);
      
    textAlign(CENTER, CENTER);
    fill('black');
    noStroke();
    textSize(backTextSize)
    text("Back", 60, 40);
  
    if (mouseX > 60 - backButtonX/2 && mouseX < 60 + backButtonX/2 && mouseY > 40 - backButtonY/2 && mouseY < 40 + backButtonY/2){
      backButtonX = 80 * 1.1;
      backButtonY = 40 * 1.1;
      backTextSize = 21 * 1.1;
    
      if (mouseIsPressed){
        runActivity = 0;
        timer = 60;
        break;
      }
    }
  
    else{
      backButtonX = 80;
      backButtonY = 40;
      backTextSize = 21;
    }  
      
    break;
      
  }     
}
