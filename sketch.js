function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background('pink');
  fill('gray');
  rect(50, 50, 270, 50);

  fill('yellow');
  rect(50, 150, 70, 50);

  fill('yellow');
  rect(150, 150, 70, 50);

  fill('yellow');
  rect(250, 150, 70, 50);

  fill('orange');
  circle(50, 200, 30, 30);

  fill('orange');
  circle(150, 200, 30, 30);

  fill('orange');
  circle(250, 200, 30, 30);
  
  fill('red');
  rect(140, 575, 70, 50);
  
  fill('gray');
  circle(1250, 600, 70, 10);
}
