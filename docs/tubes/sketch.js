let com;
let UV;

function preload() {
  com = loadModel('computoer.obj', true);
  UV = loadImage('uvmappa.png');
 
}
function setup() {
  createCanvas(320, 320, WEBGL); 
  //pixelDensity(0.4);
}
function draw() {
  stroke(0);
  strokeWeight(0);
  background(250, 245, 235, 0);
  orbitControl(5,5,0);
  scale(1);
  rotateY(frameCount * 0.025);
 
  rotateX(3.1);
  rotateY(4);
  texture(UV);
  model(com);
}