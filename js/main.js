const storyText = document.getElementById('story_element');
const buttonHolder = document.getElementById('button_holder');

var year = 1980;

function start() {

}

function restart() {
  year = 1980;
  
  removeButtons();
  start();
}

function removeButtons() {
  while (buttonHolder.firstChild) {
    buttonHolder.removeChild(buttonHolder.firstChild);
  }
}









//
