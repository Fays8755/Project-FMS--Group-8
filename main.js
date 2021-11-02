function mainMenu() {
  background('pink');
  
  //Buttons
  settingsButton();
  aboutButton();
  
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

  //Registration button
  fill('Violet');
  rect(535, 450, 175, 100, 20);

  fill('black');
  textSize(32);
  text("Login/", 575, 490);
  text("Registration", 545, 530);
}