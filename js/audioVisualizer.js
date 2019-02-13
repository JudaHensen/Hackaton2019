const visualizer = document.getElementById('visualizer');
const ctx = visualizer.getContext('2d');
visualizer.height = visualizer.width/4;

let audioCtx,
    analyser,
    source,
    bufferLength,
    dataArray;

function visualizerSetup(audio) {
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  analyser = audioCtx.createAnalyser();
  source = audioCtx.createMediaElementSource(audio);

  source.connect(analyser);
  analyser.connect(audioCtx.destination);
  analyser.fftSize = 64;
  analyser.smoothingTimeContant = .1;
  bufferLength = analyser.frequencyBinCount;
  dataArray = new Uint8Array(bufferLength);

  animateVisualizer();
}

function animateVisualizer() {
  requestAnimationFrame(animateVisualizer);
  ctx.clearRect(0, 0, visualizer.width, visualizer.height);
  analyser.getByteFrequencyData(dataArray);

  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.filter = 'blur(.5px)';
  for(let i = 0; i < dataArray.length/2; i++) {
    let height = dataArray[i]/200 * visualizer.height;
    let width = visualizer.width / ((dataArray.length/2) * 1.25);
    let x = (visualizer.width/dataArray.length/4) + (visualizer.width/(dataArray.length/2)*i);
    ctx.fillRect(x, visualizer.height, width, -height);
  }
  ctx.closePath();
}











///
