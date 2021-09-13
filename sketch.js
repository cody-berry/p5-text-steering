/*
version comments
. program shell: basic setup, draw. css styling
. load a font, use text
  font.textToPoints » display all points
  vehicle with: pos, vel, acc, r, maxspeed, maxforce, target
  vehicle.show, .update,
  vehicle.applyforce
  vehicle.seek, flee » behaviors
  vehicle.arrive
  textpoints afraid of mouse
  play with optional parameters to textToPoints
*/


let font
let vehicles

function preload() {
  font = loadFont('fonts/Meiryo-01.ttf');
}

function setup() {
  createCanvas(600, 300);
  colorMode(HSB, 360, 100, 100, 100);

  let points = font.textToPoints("Trainbow", 10, height/2, 80)
}

function draw() {
  background(0, 0, 50);
}