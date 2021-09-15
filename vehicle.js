

function Vehicle(x, y) {
    this.pos = new p5.Vector(x, y)
    this.vel = p5.Vector.random2D()
    this.acc = new p5.Vector()
    this.r = 2
    this.target = new p5.Vector(x, y)
    this.maxspeed = 5
    this.maxforce = 0.1
}


Vehicle.prototype.show = function(){
    fill(210, 50, 100)
    circle(this.pos.x, this.pos.y, this.r*2)
}


Vehicle.prototype.update = function(){
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.mult(0)
}


Vehicle.prototype.applyForce = function(f){
    // F = a/m, but m = 1 so a = F
    this.acc.add(f)
}

