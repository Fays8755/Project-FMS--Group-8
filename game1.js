var input;
var h5;
var sen;
var countCorrect;
var disp1;
var game1Per;
var dispsc1;
var i1 = j1 = k1 = n1 = 1;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

const sentences = ["Fish and visitors stink after three days", 
  "My wallet is like an onion, opening it makes me cry", 
  "Friends buy you food. Best friends eat your food", 
  "My windows aren't dirty, my dog is painting", 
  "Every day is a gift, that's why they call it a present", 
  "I love my job only when I am on vacation",
  "Don't give up your dreams so soon, sleep longer", 
  "I'm not lazy, I'm on power saving mode",
  "If you can’t beat them, arrange to have them beaten",
  "He who wakes up early, yawns all day long"];

function start1() {
  background('pink');

  //Buttons
  mainMenuButton();
  startButton();
  aboutButton();
  settingsButton();
  highScore();
}

function game1() {
  background('pink');

  //Buttons
  submitButton();

  fill('#BBF291');
  rect(270, 120, 700, 60, 20);
  textFont('ABeeZee');
  fill('black');
  textSize(32);
  text("Type the following sentence:", 440, 160);

  callsen();
  callin();
}

function callsen() {
  while (i1 == 1) {
    let t = Math.floor(Math.random() * 10);
    sen = sentences[t];
    h5 = createElement('h2', sen);
    h5.position(360, 250);
    i1 = 2;
  }
}

function callin() {
  while (j1 == 1) {
    input = createInput('');
    input.position(390, 380);
    input.style('color','black');
    input.size(400, 20);
    j1 = 2;
  } 
}

function dispScore1() {
  while (k1 == 1) {
    countCorrect = 0;
    game1Per = 0;
    const string = input.value();
    var l = 0;
    var m = 0;

    var senList1 = sen.split(" ");
    var sentList1 = sen.split(" ");
    var inpList1 = string.split(" ");
    for (l = 0; l < inpList1.length; l++) {
      for (m = 0; m < senList1.length; m++) {
        if (inpList1[l] == senList1[m]) {
          inpList1.splice(l,1);
          countCorrect++;
        }
      }
    }
    game1Per = Number(((countCorrect / sentList1.length) * 100).toFixed(2));
    while (n1 == 1) {
      if (game1Per == 100) {
        displ1 = createElement('h1', "Congratulations");
        displ1.position(495, 200);
      }
      else if (game1Per == 0) {
        displ1 = createElement('h1', "Don't worry. You tried");
        displ1.position(455, 200);
      }
      else {
        displ1 = createElement('h1', "You did well");
        displ1.position(515, 200);
      }
      n1 = 2;
    }
    game1Per.toString();
    dispsc1 = "Your score: " + game1Per;
    disp1 = createElement('h2', dispsc1);
    disp1.position(525, 280);
    k1 = 2;
  }
}

function result1() {
  background('pink');

  //Buttons
  mainMenuButton();
  aboutButton();
  settingsButton();
  highScore();
  tryAgainButton();
  dispScore1();
} 

