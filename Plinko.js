class Plinko{
    constructor(x,y){
        this.randomColor = random();
      var options = {
         isStatic: true
      }
      this.body = Bodies.circle(x,y,10,options);
      this.radius = this.body.circleRadius;
      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill(255,255,0)
        fill(this.randomColor, 255,255)
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}
