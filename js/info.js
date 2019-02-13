let prevTime, currTime, deltaTime;
prevTime = new Date();

// update world status
function updateWorldStatus(status) {
  worldStatus = status;
  worldStatus_text.innerHTML = 'Climate status:<br>' + status;

  if(status == "Broken") world.src = 'images/world/Broken.gif';
  else world.src = 'images/world/' + status + '.png';
}

// update year display
function updateYear() {
  year_text.innerHTML = 'Year:<br>' + year;
  time += year*2.13;
}

// update time display
function displayTime() {
  requestAnimationFrame(displayTime);
  // if time isn't broken and there isn't a timer playing
  if(!broken && !timer) {
    currTime = new Date();
    deltaTime = currTime - prevTime;
    prevTime = new Date();
    time += deltaTime / 100;

    time_text.innerHTML = 'World existance time:<br>' + Math.floor(time);
  }
  // if time is broken give random values
  else if(broken){
    time = Math.random()*Math.random()*12387*Math.random()*-23671*-Math.random();
    if(Math.random() <=.2) time = -time;
    time_text.innerHTML = 'World existance time: <br>' + time;

    year = Math.random()*09836*-Math.random()/239*Math.random()*213;
    if(Math.random() > .2) year = -year;
    updateYear();
  }

}
