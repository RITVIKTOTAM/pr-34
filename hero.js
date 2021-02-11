class Hero{
  constructor(x, y, width,height) {
   
      var options = {
        'isStatic':false,
        'restitution':0.3,
        'friction':15.5,
        'density':30.2
    }
    
    
    this.body = Bodies.rectangle(x, y, width,height, options);
    this.width = width;
    this.height = height;
    this.Image = loadImage("hero.png");

    World.add(world, this.body);
    
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    
    imageMode(CENTER);
    image(this.Image,0, 0, this.width,this.height);
    pop();
  }
};