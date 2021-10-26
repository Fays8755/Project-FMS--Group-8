function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

const sentences = ["Fish and visitors stink after three days", 
  "My wallet is like an onion, opening it makes me cry", 
  "Friends buy you food. Best friends eat your food", 
  "My winodws aren't dirty, my dog is painting", 
  "Every day is a gift, that's why they call it a present", 
  "I love my job only when I am on vacation",
  "Don't give up your dreams so soon, sleep longer", 
  "I'm not lazy, I'm on power saving mode",
  "Never judge a book by its movie",
  "He who wakes up early, yawns all day long"];

function sentence() {
  let t = Math.floor(Math.random() * 10);
  let sen = sentences[t];
  let h5 = createElement('h5', sen);
  h5.position(460, 280);
}

function sentStop() {
  console.log();
}

var i = 1;

function game1() {
  background('pink');

  //Buttons
  mainMenuButton();
  submitButton();

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

  while (i == 1) {
    sentence();
    i = 2;
  }
}

function start1() {
  background('pink');

  //Buttons
  mainMenuButton();
  startButton();
  aboutButton();
  settingsButton();
  highScoreButton();
} 