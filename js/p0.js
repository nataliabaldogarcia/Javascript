let angle = 0;
function setup() {
  createCanvas(192, 157, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0, 0, 153);
  ambientLight(150);
  ambientMaterial(250);
  noStroke();
  push();
  fill(255, 102, 102);
  scale(0.7);
  rotate(-angle);
  ellipse(-56, 56, 55, 55);
  ellipse(56, 56, 55, 55);
  ellipse(56, -56, 55, 55);
  ellipse(-56, -56, 55, 55);
  pop();
  push();
  fill(255, 102, 102);
  scale(1.5);
  rotate(angle);
  ellipse(-56, 56, 55, 55);
  ellipse(56, 56, 55, 55);
  ellipse(56, -56, 55, 55);
  ellipse(-56, -56, 55, 55);
  pop();
   push();
  fill(51, 153, 255);
  scale(1.5);
  rotate(-angle);
  ellipse(-56, 56, 55, 55);
  ellipse(56, 56, 55, 55);
  ellipse(56, -56, 55, 55);
  ellipse(-56, -56, 55, 55);
  pop();
  push();
  fill(51, 153, 255);
  scale(0.7);
  rotate(angle);
  ellipse(-56, 56, 55, 55);
  ellipse(56, 56, 55, 55);
  ellipse(56, -56, 55, 55);
  ellipse(-56, -56, 55, 55);
  pop();
  push();
  fill(255, 102, 102);
  rotate(angle);
  scale(1);
  sphere(40);
  pop();
  push();
  fill(51, 153, 255);
  rotate(-angle);
  scale(1);
  sphere(40);
  pop();

  angle = angle + 1;
}
