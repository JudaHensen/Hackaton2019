const storyText = document.getElementById('story_element');
const buttonHolder = document.getElementById('button_holder');

var year, jsonFile, choices, currentChoice, currentChoiceID, music, buttonImg;

setup();
getJson(jsonFile);

// setup main variables
function setup() {
  // link to json file
  jsonFile = './json/choices.json';

  // configure background music
  music = new Audio();
  music.src = "audio/ThemeSong.ogg";
  music.loop = true;
  music.volume = .5;
  music.play();

  // assign button image
  buttonImg = new Image();
  buttonImg.src = "images/button.png"
}

// start game
function start() {
  currentChoice = "Start";
  update(currentChoice);
}

// update interface
function update(nextChoice) {
  removeButtons();

  // update choice
  currentChoice = nextChoice;

  //search currentChoiceID
  for(let i = 0; i < choices.length; i++) {
    if(choices[i].choice == currentChoice) {
      currentChoiceID = i;
      break;
    }
  }

  // set interface text
  storyText.innerHTML = choices[currentChoiceID].narrative;

  // set current year
  year = choices[currentChoiceID].year;

  // create buttons
  createButtons();
}

// restart game
function restart() {
  removeButtons();
  start();
}

// create buttons
function createButtons() {
  for(let i = 0; i < choices[currentChoiceID].buttons.length; i++) {
    let button = new Button(buttonHolder, buttonImg, choices[currentChoiceID].buttons[i].choiceText, choices[currentChoiceID].buttons[i].goTo);
  }
}

// remove buttons in button section
function removeButtons() {
  while (buttonHolder.firstChild) {
    buttonHolder.removeChild(buttonHolder.firstChild);
  }
}









//
