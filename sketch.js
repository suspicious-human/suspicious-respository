
function preload() {
   mybg = loadImage("download.png")
  play = loadSound("y2mate.mp3")
  play2=loadSound("y2mate2.mp3")
  play3=loadSound("yay.mp3")
}

function setup() {
  createCanvas(400, 400);
  b1=createButton("song1")
  b2=createButton("stop")
  b3=createButton("song2")
  b4=createButton("song3")
  s1=createSlider(0,1,0.1,0.1)
  b1.position(10,10)
  b2.position(10,35)
  b3.position(10,60)
  b4.position(10,85)
  b1.mousePressed(playsong)
  b2.mousePressed(stopsong)
  b3.mousePressed(playsong2)
  b4.mousePressed(playsong3)
  
  
}

function draw() {
  background(mybg);
  play.setVolume(s1.value())
  play2.setVolume(s1.value())
  play3.setVolume(s1.value())
}

function playsong(){
   play2.stop()
   play3.stop()
   play.play()
  
}

function playsong2(){
  play.stop()
  play3.stop()
  play2.play()
  
}

function stopsong(){
  play.stop()
  play2.stop()
  play3.stop()
}

function playsong3(){
 play.stop()
play2.stop()
play3.play()
}