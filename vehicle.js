

function Vehicle(x, y) {
    this.pos = new p5.Vector(x, y)
    this.vel = p5.Vector.random2D()
    this.acc = new p5.Vector(0, 0)
    this.r = 2
    this.target = new p5.Vector(x, y)
    this.maxspeed = 5
    this.maxforce = 0.1
}


Vehicle.prototype.show = function(){
    fill(210, 50, 100)
    circle(this.pos.x, this.pos.y, this.r*2)
}


