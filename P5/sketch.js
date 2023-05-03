/*
 final project by Loverta Brown 
 this project is going to have different slides with different images and a part  of the wheels on the bus song to go aling with it. 
 
 song: https://www.youtube.com/watch?v=e_04ZrNroTo
 

*/

//variables
var busImage, busopenImage, wheels1Image, wheels2Image, wipersImage;
var begining, wheels, doors, wipers;
var r = 0;
var rr = 0; //rotate for wipers since using the "r" for wheels doesn't work with the wipers
var rSpeed = 0.005;
var paragraph="Hello, Press a, b, c, or d to hear the music and see the images. Press spacebar to see the door open and shut after you press c.";

/*
different images and what they are supposed to be doing:
0: this is the begining of the song we want the bus moving across the screen
1: this is the wheels make it rotate 
2: this is the doors so i need to make it open and shut so a interval in which is switches between busImage and busopenImage.
3: this is the wipers just make them move side by side. 
*/

//images and sound
function preload() {
  busImage = loadImage("bus.jpg");
  busopenImage = loadImage("busopen.jpg");
  wheels1Image = loadImage("wheels1.jpg");
  wheels2Image = loadImage("wheels2.jpg");
  wipersImage = loadImage("Wipers.jpg");
  begining = loadSound("begining.mp3");
  wheels = loadSound("wheels.mp3");
  doors = loadSound("doors.mp3");
  wipers = loadSound("wipers.mp3");
}

function setup() {
  createCanvas(600, 600);

  var saveImageButton = createButton("Save Image");
  saveImageButton.mousePressed(saveImage);
  saveImageButton.position(260, height - 80);


}

function saveImage() {
  save("project.jpg");
}

function keyPressed() {
  if (keyCode === 65) {
    if (begining.isPlaying()) {
      //a
      begining.stop();
    } else {
      begining.play();
    }
  } else if (keyCode === 66) {
    if (wheels.isPlaying()) {
      //b
      wheels.stop();
    } else {
      wheels.play();
    }
  } else if (keyCode === 67) {
    if (doors.isPlaying()) {
      //c
      doors.stop();
    } else {
      doors.play();
    }
  } else if (keyCode === 68) {
    if (wipers.isPlaying()) {
      //d
      wipers.stop();
    } else {
      wipers.play();
    }
  }
}

function draw() {
  background(220);


  if (begining.isPlaying()) {
    background("deeppink");
    image(busImage, frameCount, 250, 200);
  }
  if (frameCount == 400) {
    frameCount = frameCount - 450;
  }

  if (doors.isPlaying()) {
    background("orange");
    if (keyIsPressed && keyCode === 32) {
      //spacebar
      image(busopenImage, 100, 250);
    } else {
      image(busImage, 100, 250);
    }
    
  }
  // this text shows up for the begining and for the doors opening but not for the ones that rotate
    var margin = 20;
  textSize(30);
  textAlign(CENTER);
  fill("blue");
  text(paragraph, 20, 20, width - margin*2);
  
  
  if (wheels.isPlaying()) {
    push();
    background("lightgreen");
    translate(width - 400, height - 350);
    rotate(r);
    image(wheels1Image, 0, 0);
    r += PI * rSpeed;
    pop();
    translate(width - 150, height / 2);
    rotate(r);
    image(wheels2Image, 0, 0);
    r += PI * rSpeed;
  }
 
  if (wipers.isPlaying()) {
    background("#607D8B");
    translate(width - 400, height - 500);
    rotate(rr);
    image(wipersImage, 0, 0);
    rr += PI * rSpeed;
    if (rr > HALF_PI || rr < 0) {
      rSpeed *= -1;
    }
  }
  
}
