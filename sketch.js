
var soundfile;
var amp;
var t = 0;
var volArray = [];
var fft
function preload() {
  soundfile = loadSound('mac+.mp3');
}

function setup() {
  createCanvas(500, 500);
  soundfile.loop();
  amp = new p5.Amplitude();
  background(0);
 fft = new p5.FFT(0.1, 1024);
  fft.setInput(soundfile);
}

function draw() {
  background(0);
  let level = amp.getLevel();
  var vol = amp.getLevel();
  volArray.push(vol)
  
  // noStroke(); 
  if(level <0.28) {
  stroke(random(255),random(40), random(100))
  }else{
    stroke(random(255),random(40), random(100))
      var waveform = fft.waveform(); 
  for (let i = 0; i < waveform.length; i++) {
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, 0, 100);
    fill(abs(waveform[i]*1100));
    ellipse(x, y, 10, 1);
    push()
    translate(0,400)
    rect(x, y, 10, 1);
    pop()
  }}
 
    
    
    t += 1;
  beginShape(TESS)
 
for(var i=0; i<volArray.length;i++){
  // fill(volArray[i]*200,volArray[i]*200,volArray[i]*200)
  fill(0)
  
  // rect(i, 100, 10, volArray[i]*height);
  vertex(i,volArray[i]*height*1.5)
}
endShape()
if(volArray.length>width-200){
  volArray.splice(0,1);
}
//   var waveform = fft.waveform(); 
//   for (let i = 0; i < waveform.length; i++) {
//     var x = map(i, 0, waveform.length, 0, width);
//     var y = map(waveform[i], -1, 1, 0, 100);
//     fill(abs(waveform[i]*1100));
//     ellipse(x, y, 10, 1);
//     push()
//     translate(0,400)
//     ellipse(x, y, 10, 1);
//     pop()

//   }
  print(level)
}