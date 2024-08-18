class Drops{
    constructor(x,y){
        var prop={
            friction:0.0001,
            restitution:0.1
        }
        this.x=x;
        this.y=y;

        this.body=Bodies.circle(x,y,5,prop);
        this.radius=5;

        World.add(world,this.body);
    }

    display(){
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }

    reposition(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }
}