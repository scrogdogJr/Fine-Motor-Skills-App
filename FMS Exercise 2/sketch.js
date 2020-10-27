let img;

let x = 0;
let y = 0;

let targets = [];

function setup() {
  createCanvas(1000, 600);
  
  background(255);
  
  img = loadImage('fork2.png');
  
  for (i = 0; i < 4; i ++){
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
}

function draw() {
  background(255);
  
  imageMode(CENTER);
  
  image(img, 95, 300, 45, 250);
  
  
  for (i = 0; i < targets.length; i++){
    targets[i].display(95, 285 + (40 * i));
    }
  
  textSize(15);
  fill(0);
  text(x, 50, 550);
  text(y, 50, 565);
  
  if (mouseIsPressed){
    x = mouseX;
    y = mouseY;
  }
  
}