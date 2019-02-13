const storyText = document.getElementById('story_element');
const buttonHolder = document.getElementById('button_holder');

const informationHolder = document.getElementById('world_data');
const world = document.getElementById('world');

var choices, currentChoice, currentChoiceID,
    year, time, timer, broken,
    worldStatus,
    music;

setup();
getJson('./json/specialFunctions.json', 'special');
getJson('./json/choices.json', 'choices');

displayTime();

// setup main variables
function setup() {
  // set special enevt timer to false;
  timer = false;
  // configure background music
  music = new Audio();
  music.src = "audio/ThemeSong.ogg";
  music.crossOrigin = 'anonymous';
  music.loop = true;
  music.volume = .7;
  music.play();
}

// start game
function start() {
  currentChoice = "Start";
  timer = false;
  broken = false;
  worldStatus = 'Regular';

  time = new Date();
  time -= new Date('January 1, 0 00:00:01');

  resize();
  updateWorldStatus(worldStatus);
  update(currentChoice);
}

// update interface
function update(nextChoice) {
  removeButtons();
  // update choice
  currentChoice = nextChoice;
  // check if a special function is activated
  checkForSpecial(currentChoice);
  //search currentChoiceID
  for(let i = 0; i < choices.length; i++) {
    if(choices[i].choice == currentChoice) {
      currentChoiceID = i;
      break;
    }
  }
  // set interface text
  storyText.innerHTML = choices[currentChoiceID].narrative;
  // set world status
  if(choices[currentChoiceID].buttons.length == 1) updateWorldStatus(choices[currentChoiceID].status);
  // set current year
  year = choices[currentChoiceID].year;
  updateYear(year);
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
    let button = new Button(buttonHolder, choices[currentChoiceID].buttons[i].choiceText, choices[currentChoiceID].buttons[i].goTo);
  }
}

// remove buttons in button section
function removeButtons() {
  while (buttonHolder.firstChild) {
    buttonHolder.removeChild(buttonHolder.firstChild);
  }
}

// when the window resizes
function resize() {
  world.width = informationHolder.clientWidth;
  world.height = informationHolder.clientWidth;
}
