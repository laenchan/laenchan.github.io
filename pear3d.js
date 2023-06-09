let peary;
let UV;

function preload() {
  peary = loadModel('/docs/assets/peary333d.obj', true);
  UV = loadImage('/docs/assets/UVPEAR.png');
}
function setup() {
  createCanvas(320, 370, WEBGL); 
  pixelDensity(0.4);
}
function draw() {
  stroke(0);
  strokeWeight(0);
  background(250, 245, 235);
  orbitControl(5,5,0);
  scale(1.5);
  rotateY(frameCount * 0.025);
 
  rotateX(3.1);
  rotateY(4);
 
  texture(UV);
  model(peary);
}
