class SlingShot{
    
    constructor(bodyA,pointB){
        var options ={
            bodyA : bodyA,  
            pointB : pointB, 
            length : 20,
            stiffness : 0.05
        };
        this.pointB=pointB;
        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot);
    
    }
    display(){
        var pointA = this.slingshot.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(3);
        stroke("brown");
        line(pointA.x,pointA.y,pointB.x,pointB.y);

     }


}

