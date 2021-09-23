import {Remote} from "https://unpkg.com/@clinth/remote@latest/dist/index.mjs";
import {getMinMaxAvg} from '../util.js';

const r = new Remote({
  ourId:'ktppacj8ei13avongx8'
  // If you're running your sketch locally and connecting to 
  // a Glitch-hosted processor:
  // url: 'wss://your-project.glitch.me/ws'
});

// When data is received from the Remote, do something with it...
r.onData = (d) => {
  const freq = d.freq;
  const wave = d.wave;
  
  // If there's no frequency data, we're not interested
  if (!freq) return;
  
  // Demo: Often useful to figure out the min/max/avg
  const freqMMA = getMinMaxAvg(freq);
  console.log(freqMMA);
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var i = 1;   

for (i = 0, i < 10, i= i+1 ) {
  console.log("1");
}


var myGamePiece = new component(50, 30, "red", 30, 30);


function component(width, height, color, x, y, ){
  this.width = width; 
  this.height  = height; 
  this.color = color; 
  this.x = x; 
  this.y = y; 
  ctx.fillStyle = this.color; 
  ctx.fillRect(this.x, this.y, this.width, this.height); 
}

