

function Vehicle(x, y) {
    this.pos = new p5.Vector(random(width), random(height))
    this.vel = p5.Vector.random2D()
    this.acc = new p5.Vector()
    this.r = 2
    this.target = new p5.Vector(x, y)
    this.maxspeed = 5
    this.maxforce = 0.1
    this.seekfactor = 1
    this.fleefactor = 0.7
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


Vehicle.prototype.behaviors = function(){
    let seek = this.arrive(this.target)
    let mouse = new p5.Vector(mouseX, mouseY)
    let flee = this.flee(mouse)

    seek.mult(this.seekfactor)
    flee.mult(this.fleefactor)

    this.applyForce(seek)
    if (!mouseIsPressed){
        this.applyForce(flee)
    }
}


Vehicle.prototype.seek = function(target){
    // get a vector from us to our target, the first step to getting the desired
    // velocity
    let desired = p5.Vector.sub(target, this.pos)
    // we want to be traveling at our max speed
    desired.setMag(this.maxspeed)
    // steering force = desired_velocity - current_velocity
    desired.sub(this.vel)
    // let's make sure we aren't applying too much steering force
    return desired.limit(this.maxforce)
}


Vehicle.prototype.arrive = function(target) {
    // get a vector from us to our target, the first step to getting the desired
    // velocity
    let desired = p5.Vector.sub(target, this.pos)
    // we want to be traveling at our max speed except for if we're inside a
    // certain radius, which then we want to slow down
    let speed = this.maxspeed
    if (desired.mag() < 50){
        speed = map(desired.mag(), 0, 50, 0, this.maxspeed)
    }
    desired.setMag(speed)
    // steering force = desired_velocity - current_velocity
    desired.sub(this.vel)
    // let's make sure we aren't applying too much steering force
    return desired.limit(this.maxforce)
}


Vehicle.prototype.flee = function(target){
    // the .mult(-1) is very important so that we actually flee, not seek
    return this.seek(target).mult(-1)
}



Vehicle.prototype.applyForce = function(f){
    // F = a/m, but m = 1 so a = F
    this.acc.add(f)
}

