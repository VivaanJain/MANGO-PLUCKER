class Stone {
    constructor(x,y,radius){

 var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        
        this.body = Bodies.circle(x,y,radius-15,options);
        World.add(world,this.body);
this.image = loadImage("stone.png");
        this.x = x;
        this.y = y;
        this.radius = radius*2;
    }
attach(){
this.body.position.x = this.x;
        this.body.position.y = this.y;
    }
display(){
        this.x = this.body.position.x;
this.y = this.body.position.y;
imageMode(CENTER);
        image(this.image,this.x,this.y,this.radius,this.radius);
    }
} 