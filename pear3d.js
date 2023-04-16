let peary;

function preload() {
  peary = loadModel('/docs/assets/PEAR3D.obj');
}
function setup() {
  createCanvas(500, 500, WEBGL);
  //pixelDensity(0.3);
}
function draw() {
  background(250, 245, 235);
  orbitControl(5,5,0);
  scale(30);
  rotateY(2.5);
  model(peary);
}
