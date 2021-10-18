function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function mainMenu()
{
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

  fill('gray');
  circle(1100, 555, 120, 70);

  textFont("ABeeZee");
  fill('black');
  textSize(32);
  text("Settings", 1050, 565);
    
  textSize(20);
  text("High", 30, 345);
  textSize(22);
  text("Score", 27, 365);

  textSize(20);
  text("High", 470, 345);
  textSize(22);
  text("Score", 467, 365);

  textSize(20);
  text("High", 910, 345);
  textSize(22);
  text("Score", 907, 365);


}

let state = "mainMenu";

function draw() {
  if (state == "mainMenu") { mainMenu(); }
  else if (state == "game1") { game1() }
  else if (state == "game2") { game2() }
  else if (state == "game3") { game3() }
  else if (state == "settings") { settings()}
  else { background(255); text("HI SUMIT", 500, 500);}
}

function game1() {
  background('blue');
}

function game2() {
  background('green');
}

function game3() {
  background('black');
}

function settings() {
  background('white');
}

function mousePressed()
{
  if (state == "mainMenu") {
    let d = dist(mouseX, mouseY, 1100, 555);
    if (mouseX > 50 && mouseX < 350 && mouseY > 150 && mouseY < 350) {
      state = "game1";
    }
    else if (mouseX > 490 && mouseX < 790 && mouseY > 150 && mouseY < 350) {
      state = "game2";
    }
    else if (mouseX > 930 && mouseX < 1230 && mouseY > 150 && mouseY < 350) {
      state = "game3";
    }
    else if (d<60) {
      if (d<60) {
        state = "settings";
      }
    }
    //else if ()
  }

  else if (state == "game1") {
    // back button code 
    state = "mainMenu";
  }

  else if (state == "game2") {
    // back button code 
    state = "mainMenu";
  }

  else if (state == "game3") {
    // back button code 
    state = "mainMenu";
  }

  else if (state == "settings") {
    // back button code 
    state = "mainMenu";
  }
}
