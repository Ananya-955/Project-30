class Polygon extends BaseClass {
    constructor (x,y){
        //var options={
            /*isStatic:false,
            restitution:0.8,
            friction:1, 
            density: 1.2 */
            super(x,y, 30,30)

        //}
        //this.body = Bodies.circle(x, y, radius, options);
        //this.radius = radius;
        this.image=loadImage("paper.png");
    

        
        
        World.add(world, this.body);
      }
      display(){
        if (this.body.speed<3){
          super.display();
        }
        else {
          World.remove(world,this.body);
          push();
          this.Visibility=this.Visibility-5;
          tint(255,this.Visibility);
          image(this.image, this.body.position.x, this.body.position.y, 50,50);
          pop();
      }
    }
  }
