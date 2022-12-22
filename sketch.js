let cav;
let p5Element = document.querySelector("#p5Element");
let canvasWidth = p5Element.offsetWidth;
let canvasHeight = document.body.scrollHeight;
let p5Width = canvasWidth;
let p5Height = canvasHeight;

let x = 0;
let y = 0;
let speedX = 0;
let speedY = 0;
let size;

function setup() {
  cav = createCanvas(p5Width, p5Height);
  cav.parent("p5Element");
  size = p5Width * 0.04;
  if (width <= 414) size = p5Width * 0.1;
  x = random(width);
  y = random(height);
  speedX = random(-10, 6);
  speedY = random(-8, 12);
  noStroke();
}

function draw() {
  background("#1f2227");
  // background(100);
  fill(255);
  move();
  circle(x, y, size);
}

function move() {
  // if (x > width - size / 2 || x < size / 2) speedX *= -1;
  // if (y >= height - size / 2 || y <= size / 2) speedY *= -1;
  if (x > width || x < 0) speedX *= -1;
  if (y > height || y < 0) speedY *= -1;
  x += speedX;
  y += speedY;
}

function windowResized() {
  //  setup();
  canvasWidth = p5Element.offsetWidth;
  p5Width = canvasWidth;
  p5Height = canvasHeight;
  resizeCanvas(p5Width, p5Height);
}
