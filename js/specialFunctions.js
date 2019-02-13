var specialFunctions;
let elem = document.documentElement;
let clicked = false;

function checkForSpecial(current) {
  switch(current) {
    //case specialFunctions[0]choice:
      // functie(); break;
    //case specialFunctions[1]choice:
      // functie(); break;
    //case specialFunctions[2]choice:
      // functie(); break;
    //case specialFunctions[3]choice:
      // functie(); break;
    case specialFunctions[4].choice, specialFunctions[5].choice:
      breakTime(); break;
  }
}

function breakTime() {
  broken = true;
}

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
