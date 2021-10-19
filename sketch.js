function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function mainMenu()
{
  background('pink');
  
  fill('gray');
  rect(50, 50, 1180, 70, 20);
  fill('black');
  textFont("ABeeZee");
  textSize(32);
  text("FMS Development", 500, 95);

  //Games button
  fill('yellow');
  rect(50, 150, 300, 200, 20);
  fill('yellow');
  rect(490, 150, 300, 200, 20);
  fill('yellow');
  rect(930, 150, 300, 200, 20);

  textSize(50);
  fill('black');
  text("Game #1", 110, 265);
  text("Game #2", 550, 265);
  text("Game #3", 990, 265);

  //High score
  fill('orange');
  circle(50, 350, 75, 30);
  fill('orange');
  circle(490, 350, 75, 30);
  fill('orange');
  circle(930, 350, 75, 30);
  
  fill('black');
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
  
  fill('red');
  rect(450, 450, 150, 100, 20);
  
  //Settings button
  fill('gray');
  circle(1100, 555, 120, 70);

  fill('black');
  textSize(32);
  text("Settings", 1050, 565);
}

let state = "mainMenu";

function draw() {
  if (state == "mainMenu") { mainMenu(); }
  else if (state == "game1") { game1() }
  else if (state == "game2") { game2() }
  else if (state == "game3") { game3() }
  else if (state == "settings") { settings()}
  else { background(255); text("ERROE OUCCURRED", 500, 500);}
}

function game1() {
  background('blue');

  //Main menu button
  fill('gray');
  rect(20, 20, 100, 70, 20);
  textFont("ABeeZee");
  fill('black');
  textSize(26);
  text("Main", 44, 51);
  textSize(28);
  text("Menu", 38, 75);
}

function game2() {
  background('green');

  //Main menu button
  fill('gray');
  rect(20, 20, 100, 70, 20);
  textFont("ABeeZee");
  fill('black');
  textSize(26);
  text("Main", 44, 51);
  textSize(28);
  text("Menu", 38, 75);
}

function game3() {
  background('black');

  //Main menu button
  fill('gray');
  rect(20, 20, 100, 70, 20);
  textFont("ABeeZee");
  fill('black');
  textSize(26);
  text("Main", 44, 51);
  textSize(28);
  text("Menu", 38, 75);
}

function settings() {
  background('white');

  //Main menu button
  fill('gray');
  rect(20, 20, 100, 70, 20);
  textFont("ABeeZee");
  fill('black');
  textSize(26);
  text("Main", 44, 51);
  textSize(28);
  text("Menu", 38, 75);
}


function mousePressed()
{
  //Main page
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
  }

  //Game 1 Page
  else if (state == "game1") {
    if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {
      state = "mainMenu";
    }
  }

  //Game 2 page
  else if (state == "game2") {
    if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {
      state = "mainMenu";
    }
  }

  //Game 3 page
  else if (state == "game3") {
    if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {
      state = "mainMenu";
    }
  }

  //Settings page
  else if (state == "settings") {
    if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {
      state = "mainMenu";
    }
  }
}
