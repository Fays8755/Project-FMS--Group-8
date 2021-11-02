function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  
}

function start2() {
  background('pink');
  
  //Buttons
  mainMenuButton();
  startButton();
  aboutButton();
  settingsButton();
  highScore();
} 

const colors = ['blue', 'red', 'yellow', 'green', 'purple', 
                'orange', 'black', 'grey', 'white', 'lime'];

var col1, col2;
var i2 = 0;
var timerValue = 2;

function game2() {
  background('pink');

  //Buttons
  mainMenuButton();
  submitButton();
  
  fill('#BBF291');
  rect(270, 30, 700, 60, 20);
  textFont('ABeeZee');
  fill('black');
  textSize(32);
  text("React accordingly to the following images:", 350, 70);

  callColor();

  fill(col1);
  rect(500, 150, 220, 220, 20);

  fill('pink');
  rect(440, 450, 120, 70, 20);
  fill(col1);
  text(col2, 460, 495);

  fill('pink');
  rect(640, 450, 120, 70, 20);
  fill(col2);
  text(col1, 660, 495);

  if (timerValue < 5) {
    fill('black');
    text(floor(timerValue), 200, 200);
  }
  setInterval(timer, 800);
}
  
function callColor() {
  while (i2 < 10) {
    let t1 = Math.floor(Math.random() * 10);
    col1 = colors[t1];
    let t2 = Math.floor(Math.random() * 10)
    col2 = colors[t2];
    i2++;
  }
}

function timer() {
  if (floor(timerValue) > 0) {
    timerValue-=0.01;
  }
}