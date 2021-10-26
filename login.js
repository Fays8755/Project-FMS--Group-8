function login() {
    background('pink');
  
    //Main menu button
    mainMenuButton();
  
    //Login Heading
    fill('SandyBrown');
    rect(300, 80, 660, 70, 20);
    textSize(40);
    fill('black');
    text("Login", 580, 127);
  
    //Username
    fill('SandyBrown');
    rect(360, 220, 130, 50);
    textSize(35);
    fill('black');
    text("User:", 385, 256);
    fill('white');
    rect(560, 220, 330, 50);
  
    //Password
    fill('SandyBrown');
    rect(360, 310, 130, 50);
    textSize(35);
    fill('black');
    text("Pass:", 385, 346);
    fill('white');
    rect(560, 310, 330, 50);
  
    //Login button
    fill('SandyBrown');
    rect(560, 410, 100, 30);
    fill('black');
    textSize(25);
    text("Login", 580, 433);
  
    //Registration text
    fill('black');
    textSize(35);
    text("Not Registered?", 500, 520);
    fill('pink');
    strokeWeight(0);
    rect(450, 550, 320, 35)
    fill('black');
    textSize(43);
    text("Create an account!", 450, 580);
    strokeWeight(2);
    line(455, 584, 767, 584);
  }