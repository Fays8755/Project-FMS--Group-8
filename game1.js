var input;
var h5;
var sen;
var countCorrect;
var disp1;
var game1Per;
var i1 = 1;
var j1 = 1;
var k1 = 1;


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
  "If you can’t beat them, arrange to have them beaten",
  "He who wakes up early, yawns all day long"];

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

function sentence() {
  let t = Math.floor(Math.random() * 10);
  sen = sentences[t];
  h5 = createElement('h2', sen);
  h5.position(360, 250);
}

function callsen() {
  while (i1 == 1) {
    sentence();
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

function score1() {
  countCorrect = 0;
  game1Per = 0;
  const string = input.value();
  var l = 0;
  var m = 0;

  //Counting and storing words of generated sentence in the list
  var senList1 = sen.split(" ");
  var sentList1 = sen.split(" ");
  var inpList1 = string.split(" ");
  for (l = 0; l < senList1.length; l++) {
    for (m = 0; m < inpList1.length; m++) {
      if (inpList1[l] == senList1[m]) {
        senList1.splice(l,1);
        countCorrect++;
      }
      
    }
  }
  game1Per = Number(((countCorrect / sentList1.length) * 100).toFixed(2));
  disp1 = createElement('h4', game1Per.toString());
  disp1.position(460, 200);
}

function dispScore1() {
  while (k1 == 1) {
    score1();
    k1 = 2;
  }
}

function start1() {
  background('pink');

  //Buttons
  mainMenuButton();
  startButton();
  aboutButton();
  settingsButton();
  highScore();
} 

