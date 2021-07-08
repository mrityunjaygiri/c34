class Ball{
    constructor(x, y, r) {
        var options = {
            'friction':0.5,
            'density':1.0,
        }
        this.body = Bodies.circle(x, y, r, options);
        this.radius = r;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        strokeWeight(3);
        stroke("green")
        fill("red");
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
  }