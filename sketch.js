function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background('pink');
  fill('gray');
  rect(50, 50, 1180, 70, 20);

  fill('yellow');
  rect(50, 150, 300, 200, 20);

  fill('yellow');
  rect(490, 150, 300, 200, 20);

  fill('yellow');
  rect(930, 150, 300, 200, 20);

  fill('orange');
  circle(50, 350, 75, 30);

  fill('orange');
  circle(490, 350, 75, 30);

  fill('orange');
  circle(930, 350, 75, 30);
  
  fill('red');
  rect(450, 450, 150, 100, 20);
  
  fill('gray');
  ellipse(750, 500, 140, 70);
}
