function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

const colors = ['blue', 'red', 'yellow', 'green', 'purple', 
                'orange', 'black', 'grey', 'white', 'saddlebrown'];
var col;
var i2 = 1;
function game2() {
    background('pink');
  
    //Buttons
    mainMenuButton();
    submitButton();
    
    fill('#BBF291');
    rect(270, 120, 700, 60, 20);
    textFont('ABeeZee');
    fill('black');
    textSize(32);
    text("React accordingly to the following images:", 350, 160);

    callColor();

    fill(col);
    rect(500, 240, 220, 220, 20);
  }
  
  function callColor() {
    while (i2 == 1) {
      let t1 = Math.floor(Math.random() * 10);
      col = colors[t1];
      i2 = 2;
    }
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