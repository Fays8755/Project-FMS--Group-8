function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

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
  
    fill('#BBF291');
    rect(500, 240, 220, 220, 20);
    textFont('ABeeZee');
    fill('black');
    textSize(32);
    text("(Image", 550, 330);
    text("PlaceHolder)", 530, 370);
  }
  
  function start2() {
    background('pink');
  
    //Buttons
    mainMenuButton();
    startButton();
    aboutButton();
    settingsButton();
    highScoreButton();
  } 