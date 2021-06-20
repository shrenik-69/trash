class Ground 
{
    constructor (x,y,w,h) {
    var options = {
      isStatic: true

    }

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    World.add(world, this.body);
}

    show() {
        let gg = this.body.position;

    push();
    translate(gg.x,gg.y)
    rectMode(CENTER);
    stroke("white");
    fill("white");
    rect(0,0, this.w, this.h);
    pop();
  }
    
} 