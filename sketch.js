/*
version comments
. program shell: basic setup, draw. css styling
. load a font, use text
. font.textToPoints » display all points
. vehicle with: pos, vel, acc, r, maxspeed, maxforce, target
  vehicle.update,
  vehicle.applyforce
  vehicle.seek, flee » behaviors
  vehicle.arrive
  textpoints afraid of mouse
  play with optional parameters to textToPoints
*/


let font
let vehicles = []

function preload() {
  font = loadFont('fonts/Meiryo-01.ttf');
}

function setup() {
  createCanvas(600, 300);
  colorMode(HSB, 360, 100, 100, 100);
  background(0, 0, 50)
  textFont(font)

  fill(210, 50, 100)
  stroke(210, 50, 100)
  strokeWeight(3)
  textSize(80)

  let points = font.textToPoints("Trainbow", 10, height/2, 80)
  // text("Trainbow", 10, height/2)

  for (let i = 0; i < points.length; i++){
    let pt = points[i]
    // point(pt.x, pt.y)
    vehicles.push(new Vehicle(pt.x, pt.y))
  }
}

function draw() {
  background(0, 0, 50);
  for (let i = 0; i < vehicles.length; i++) {
    let vh = vehicles[i]
    vh.show()
  }
}