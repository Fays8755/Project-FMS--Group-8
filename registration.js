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