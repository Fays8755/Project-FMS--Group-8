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

  fill('black');
  textFont("ABeeZee");
  textSize(32);
  text("FMS Development", 500, 95);

  textFont("ABeeZee");
  textSize(50);
  text("Game #1", 110, 265);
  text("Game #2", 550, 265);
  text("Game #3", 990, 265);

  //Down cloud
  fill('gray');
  stroke('black');
  arc(1070, 575, 50, 50, 0, PI);

  fill('gray');
  arc(1100, 573 , 60, 60, QUARTER_PI, HALF_PI + QUARTER_PI);

  fill('gray');
  arc(1130, 575, 50, 50, 0, PI);
  
  //Left clouds
  arc(1040, 550, 45, 45, HALF_PI, PI + HALF_PI + QUARTER_PI);
  arc(1040, 570, 45, 45, 0, PI + QUARTER_PI);
  
  //Up clouds
  arc(1070, 545, 50, 50, PI, 0);
  arc(1100, 545, 60, 60, PI + QUARTER_PI, PI + QUARTER_PI + HALF_PI);
  arc(1130, 545, 50, 50, PI, 0);
  
  //Right clouds
  arc(1160, 545, 45, 45, PI + QUARTER_PI, HALF_PI);
  arc(1160, 565, 45, 45, PI + HALF_PI + QUARTER_PI, HALF_PI + QUARTER_PI)
  
  stroke('gray');
  rect(1040, 540, 120, 38);
}

