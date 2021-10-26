/*
NAVIGATING THROUGH FUNCTIONS
setup()
mainMenu() - mainmenu page 
mainMenuButton() - Button to return to main menu page on game pages, settings, about, and login pages
game1() - Game1 page
game2() - Game2 page
game3() - Game3 page
settings() - Settings page
login() - Login page
registration() - Registration page
about() - About page
draw() - Draw function
mousePressed() - Commands when mouse is pressed
*/

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

/*const sentence = ["Fish and visitors stink after three days", 
"My wallet is like an onion, opening it make sme cry", 
"Friends buy you food. Best friends eat your food", 
"My winodws aren't dirty, my dog is painting", 
"Every day is a gift, that's why they call it a present", 
"I love my job only when I am on vacation",
"Don't give up your dreams so soon, sleep longer", 
"I'm not lazy, I'm on power saving mode",
"Never judge a book by its movie",
"He who wakes up early, yawns all day long"];*/

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
  if (state == "mainMenu") { mainMenu();}
  else if (state == "game1") { game1()}
  else if (state == "game2") { game2()}
  else if (state == "game3") { game3()}
  else if (state == "settings") {settings()}
  else if (state == "login") {login()}
  else if (state == "registration") {registration()}
  else if (state == "about") {about()}
  else if (state == "playSound") {play()}
  else { background(255); text("ERROR OUCCURRED", 500, 500);}
}

var hello;

function play() {
  hello = new Audio('wrong.mp3');
  hello.play();
  state = "settings"
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
    //Sound button
    if (mouseX > 400 && mouseX < 500 && mouseY > 150 && mouseY <220) {state = "playSound"}
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
