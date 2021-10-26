function result1() {
    background('pink');

    //Buttons
    mainMenuButton();
    aboutButton();
    settingsButton();
    highScore();
    tryAgainButton();
}
var j5;
var count1;
var countCorrect1; //amount that matches the sentence length exactly
var game1Per;
function score1() {
    for (i = 0; i < sen.length; i++) {
        if (sen.charAt(i) == input.charAt(i)) {
            countCorrect1;
        }
    }
    game1Per = (countCorrect1 / sen.length()) * 100;
}