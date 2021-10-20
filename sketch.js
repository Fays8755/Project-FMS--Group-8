function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function mainMenu()
{
  background('pink');
  
  //Heading
  fill('gray');
  strokeWeight(1);
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
  text("Typing", 130, 265);
  text("React", 580, 265);
  text("Trace", 1020, 265);

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
  
  //About button
  fill('CornSilk');
  rect(90, 500, 175, 100, 20);

  fill('black');
  textSize(32);
  text("About", 135, 560);

  //Registration button
  fill('Violet');
  rect(535, 450, 175, 100, 20);

  fill('black');
  textSize(32);
  text("Login/", 575, 490);
  text("Registration", 545, 530);

  //Settings button
  fill('gray');
  circle(1100, 555, 120, 70);

  fill('black');
  textSize(32);
  text("Settings", 1050, 565);
}

function mainMenuButton() {
  fill('lemonChiffon');
  strokeWeight(1);
  rect(20, 20, 100, 70, 20);
  textFont("ABeeZee");
  fill('black');
  textSize(28);
  text("Main", 40, 51);
  textSize(28);
  text("Menu", 38, 75);
}

let state = "mainMenu";

function draw() {
  if (state == "mainMenu") { mainMenu(); }
  else if (state == "game1") { game1() }
  else if (state == "game2") { game2() }
  else if (state == "game3") { game3() }
  else if (state == "settings") {settings()}
  else if (state == "login") {login()}
  else if (state == "registration") {registration()}
  else if (state == "about") {about()}
  else { background(255); text("ERROR OUCCURRED", 500, 500);}
}

function game1() {
  background('pink');

  //Main menu button
  mainMenuButton();

  fill('#BBF291');
  rect(270, 120, 700, 60, 20);
  textFont('ABeeZee');
  fill('black');
  textSize(32);
  text("Type the following sentence:", 440, 160);

  fill('#BBF291');
  rect(320, 240, 600, 60, 20);
  textFont('ABeeZee');
  fill('black');
  textSize(32);
  text("(Sentence PlaceHolder)", 460, 280);
}

function game2() {
  background('pink');

  //Main menu button
  mainMenuButton();
  
  fill('#BBF291');
  rect(270, 120, 700, 60, 20);
  textFont('ABeeZee');
  fill('black');
  textSize(32);
  text("React accordingly to the following images:", 350, 160);

  fill('#BBF291');
  rect(500, 240, 220, 220, 20);
  textFont('ABeeZee');
  fill('black');
  textSize(32);
  text("(Image", 550, 330);
  text("PlaceHolder)", 530, 370);
}

function game3() {
  background('pink');

  //Main menu button
  mainMenuButton();
  
  fill('#BBF291');
  rect(270, 120, 700, 60, 20);
  textFont('ABeeZee');
  fill('black');
  textSize(32);
  text("Trace the following image:", 440, 160);

  fill('#BBF291');
  rect(500, 240, 220, 220, 20);
  textFont('ABeeZee');
  fill('black');
  textSize(32);
  text("(Image", 550, 330);
  text("PlaceHolder)", 530, 370);
}

function settings() {
  background('pink');

  //Main menu button
  mainMenuButton();
}

function login() {
  background('pink');

  //Main menu button
  mainMenuButton();

  //Login Heading
  fill('SandyBrown');
  rect(300, 80, 660, 70, 20);
  textSize(40);
  fill('black');
  text("Login", 580, 127);

  //Username
  fill('SandyBrown');
  rect(360, 220, 130, 50);
  textSize(35);
  fill('black');
  text("User:", 385, 256);
  fill('white');
  rect(560, 220, 330, 50);

  //Password
  fill('SandyBrown');
  rect(360, 310, 130, 50);
  textSize(35);
  fill('black');
  text("Pass:", 385, 346);
  fill('white');
  rect(560, 310, 330, 50);

  //Login button
  fill('SandyBrown');
  rect(560, 410, 100, 30);
  fill('black');
  textSize(25);
  text("Login", 580, 433);

  //Registration text
  fill('black');
  textSize(35);
  text("Not Registered?", 500, 520);
  fill('pink');
  strokeWeight(0);
  rect(450, 550, 320, 35)
  fill('black');
  textSize(43);
  text("Create an account!", 450, 580);
  strokeWeight(2);
  line(455, 584, 767, 584);
}

function registration() {
  background('pink');

  //Main menu button
  mainMenuButton();

  //Registration heading
  fill('SandyBrown');
  rect(300, 40, 660, 70, 20);
  textSize(40);
  fill('black');
  text("Registration", 530, 87);

  //Email
  fill('SandyBrown');
  rect(360, 160, 130, 50);
  textSize(35);
  fill('black');
  text("Email:", 375, 196);
  fill('white');
  rect(560, 160, 330, 50);

  //Username
  fill('SandyBrown');
  rect(360, 260, 130, 50);
  textSize(35);
  fill('black');
  text("User:", 385, 296);
  fill('white');
  rect(560, 260, 330, 50);

  //Password
  fill('SandyBrown');
  rect(360, 360, 130, 50);
  textSize(35);
  fill('black');
  text("Pass:", 385, 396);
  fill('white');
  rect(560, 360, 330, 50);

  //Re-enter Password
  fill('SandyBrown');
  rect(360, 460, 130, 50);
  textSize(21);
  fill('black');
  text("Re-enter Pass:", 367, 493);
  fill('white');
  rect(560, 460, 330, 50);

  //Finish button
  fill('SandyBrown');
  rect(550, 560, 100, 30);
  fill('black');
  textSize(25);
  text("Finish", 570, 583);
}

function about() 
{
  background('pink');
  //main menu button
  mainMenuButton();

  fill('white');
  rect(270, 200, 760, 270, 20);

  fill('black');
  textSize(25);
  text("Credit to Jake Swartzmiller, Sumit Patel, and Faysel Bekri", 300, 300);
  text("FSE100-93750, Group #8", 300, 350);
  text("Project FMS: Gaming", 300, 400);
}

function mousePressed()
{
  //Main page
  if (state == "mainMenu") {
    let d = dist(mouseX, mouseY, 1100, 555);
    //Going to Game#1 page
    if (mouseX > 50 && mouseX < 350 && mouseY > 150 && mouseY < 350) {state = "game1";}
    //Going to Game#2 page
    else if (mouseX > 490 && mouseX < 790 && mouseY > 150 && mouseY < 350) {state = "game2";}
    //Going to Game#3 page
    else if (mouseX > 930 && mouseX < 1230 && mouseY > 150 && mouseY < 350) {state = "game3";}
    //Going to settings page
    else if (d<60) {
      if (d<60) {state = "settings";}
    }
    //Going to login page 535, 450, 175, 100
    else if (mouseX > 535 && mouseX < 710 && mouseY > 450 && mouseY < 550) {state = "login";}
    //Going to about page
    else if (mouseX > 90 && mouseY > 500 && mouseX < 265 && mouseY < 600) {state = "about"}
  }

  //Game 1 Page
  else if (state == "game1") {
    //Going to main menu page
    if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {state = "mainMenu";}
  }

  //Game 2 page
  else if (state == "game2") {
    //Going to main menu page
    if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {state = "mainMenu";}
  }

  //Game 3 page
  else if (state == "game3") {
    //Going to main menu page
    if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {state = "mainMenu";}
  }

  //Settings page
  else if (state == "settings") {
    //Going to main menu page
    if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {state = "mainMenu";}
  }

  //Login page
  else if (state == "login") {
    //Going to main menu page
    if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {state = "mainMenu";}
    //Going to the registration page
    if (mouseX > 450 && mouseX < 770 && mouseY > 550 && mouseY < 585) {state = "registration"}
  }

  //registration page
  else if (state == "registration") {
    //Going to main menu page
    if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {state = "mainMenu";}
  }

  //about page
  else if (state == "about") {
    //Going to main menu page
    if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {state = "mainMenu";}
  }
}
