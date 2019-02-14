var specialFunctions;
let elem = document.documentElement;
let clicked = false;

function checkForSpecial(current) {
  switch(current) {
    case specialFunctions[0].choice:
      Chance(specialFunctions[0]); special = true; break; // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    case specialFunctions[1].choice:
      Chance(specialFunctions[1]); special = true; break;
    case specialFunctions[2].choice:
      Chance(specialFunctions[2]); special = true; break;
    case specialFunctions[3].choice:
      Chance(specialFunctions[3]); special = true; break;
    case specialFunctions[4].choice:
      broken = true; special = true; break;
    case specialFunctions[5].choice:
      broken = true; special = true; break;
  }
}

// get a result based on chance.
function Chance(item) {
  if(Math.random()*100 < item.chance) currentChoice = item.options[0].goTo;
  else {
    currentChoice = item.options[1].goTo;
    if(currentChoice == specialFunctions[0].options[1].goTo) {
      let fx = new Audio();
      fx.src = 'audio/fbi.mp3';
      fx.loop = false;
      fx.play();
    }
  }
}

// when you click on the earth, enable or disable fullscreen.
world.addEventListener('click', ()=>{
  if(!clicked) {
    clicked = true;
    openFullscreen();
  }
  else {
    clicked = false;
    closeFullscreen();
  }
});

// view in fullscreen
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

// close fullscreen
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}
