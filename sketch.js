function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

let state = "game2";
var jkl2 = 0;
function draw() {
  if (state == "mainMenu") { mainMenu();}
  else if (state == "start1") { start1()}
  else if (state == "game1") { game1()}
  else if (state == "result1") {result1()}
  else if (state == "about1") {about1()}
  else if (state == "start2") { start2()}
  else if (state == "game2") { game2()}
  else if (state == "about2") {about2()}
  else if (state == "start3") { start3()}
  else if (state == "game3") { game3()}
  else if (state == "about3") {about3()}
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
  state = "settings";
}

function mousePressed() {
  //Main page
  if (state == "mainMenu") {
    let d = dist(mouseX, mouseY, 1100, 555);
    //Going to Game#1 start page
    if (mouseX > 50 && mouseX < 350 && mouseY > 150 && mouseY < 350) {state = "start1";}
    //Going to Game#2 start page
    else if (mouseX > 490 && mouseX < 790 && mouseY > 150 && mouseY < 350) {state = "start2";}
    //Going to Game#3 page
    else if (mouseX > 930 && mouseX < 1230 && mouseY > 150 && mouseY < 350) {state = "start3";}
    //Going to settings page
    else if (d<60) {
      if (d<60) {state = "settings";}
    }
    //Going to login page
    else if (mouseX > 535 && mouseX < 710 && mouseY > 450 && mouseY < 550) {state = "login";}
    //Going to about page
    else if (mouseX > 90 && mouseY > 500 && mouseX < 265 && mouseY < 600) {state = "about"}
  }

  //Game 1 Start Page
  else if (state == "start1") {
    let d = dist(mouseX, mouseY, 1100, 555);
    //Going to main menu page
    if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {state = "mainMenu";}
    //Going to game 1 page
    else if (mouseX > 550 && mouseX < 650 && mouseY > 200 && mouseY < 280) {state = "game1";}
    //Going to settings page
    else if (d<60) {
      if (d<60) {state = "settings";}
    }
    //Going to about page
    else if (mouseX > 90 && mouseY > 500 && mouseX < 265 && mouseY < 600) {state = "about1";}
  }

  //Game 1 Page
  else if (state == "game1") {
    //Going to main menu page
    if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {state = "mainMenu";}
    //After hitting submit button
    if (mouseX > 1000 && mouseX < 1120 && mouseY > 500 && mouseY < 580) {i1=1;j1=1;state = "result1";h5.remove();input.remove();}
  }

  //About 1 Page
  else if (state == "about1") {
    //Going to main menu page1080, 20, 100, 70, 20
    if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {state = "mainMenu";}
    //Going back to game 1 page
    if (mouseX > 1080 && mouseX < 1180 && mouseY > 20 & mouseY < 90) {state = "start1";}
  }

  //Game 1 result
  else if (state == "result1") {
    let d = dist(mouseX, mouseY, 1100, 555);
    //Going to main menu page
    if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {n1=1;k1=1;state = "mainMenu";disp1.remove();displ1.remove();}
    //Going to settings page
    else if (d<60) {
      if (d<60) {n1=1;k1=1;state = "settings";disp1.remove();displ1.remove();}
    }
    //Going to about page
    else if (mouseX > 90 && mouseY > 500 && mouseX < 265 && mouseY < 600) {n1=1;k1=1;state = "about1";disp1.remove();displ1.remove();}
    //Going to game 1 page again
    else if (mouseX > 535 && mouseX < 655 && mouseY >500 && mouseY < 580) {n1=1;k1=1;state = "game1";disp1.remove();displ1.remove();}
  }

  //Game 2 start page
  else if (state == "start2") {
    let d = dist(mouseX, mouseY, 1100, 555);
    //Going to main menu page
    if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {state = "mainMenu";}
    //Going to game 2 page
    else if (mouseX > 550 && mouseX < 650 && mouseY > 200 && mouseY < 280) {state = "game2";}
    //Going to settings page
    else if (d<60) {
      if (d<60) {state = "settings";}
    }
    //Going to about page
    else if (mouseX > 90 && mouseY > 500 && mouseX < 265 && mouseY < 600) {state = "about2";}
  }

  //Game 2 Page
  else if (state == "game2") {
    //Going to main menu page
    if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {i2 =  1; state = "mainMenu";}
    //Clicking on options for game2
    else if ((mouseX > 440 && mouseX < 560 && mouseY > 450 && mouseY < 520) || 
      (mouseX > 640 && mouseX < 760 && mouseY > 450 && mouseY < 550)) {
          state = "game2";
            jkl2++;
      }
  }

  //About 2 Page
  else if (state == "about2") {
    //Going to main menu page
    if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {state = "mainMenu";}
    //Going back to game 1 page
    if (mouseX > 1080 && mouseX < 1180 && mouseY > 20 & mouseY < 90) {state = "start2";}
  }

  //Game 3 start page
  else if (state == "start3") {
    let d = dist(mouseX, mouseY, 1100, 555);
    //Going to main menu page
    if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {state = "mainMenu";}
    //Going to game 2 page
    else if (mouseX > 550 && mouseX < 650 && mouseY > 200 && mouseY < 280) {state = "game3";}
    //Going to settings page
    else if (d<60) {
      if (d<60) {state = "settings";}
    }
    //Going to about page
    else if (mouseX > 90 && mouseY > 500 && mouseX < 265 && mouseY < 600) {state = "about3";}
  }

  //Game 3 page
  else if (state == "game3") {
    //Going to main menu page
    if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {state = "mainMenu";}
  }

  //About 3 Page
  else if (state == "about3") {
    //Going to main menu page
    if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {state = "mainMenu";}
    //Going back to game 1 page
    if (mouseX > 1080 && mouseX < 1180 && mouseY > 20 & mouseY < 90) {state = "start3";}
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

  //Registration page
  else if (state == "registration") {
    //Going to main menu page
    if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {state = "mainMenu";}
  }

  //About page
  else if (state == "about") {
    //Going to main menu page
    if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {state = "mainMenu";}
  }
}
