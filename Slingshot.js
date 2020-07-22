class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.1,
            length:100
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.slingshot=Constraint.create(options);
        World.add(world,this.slingshot);
    }
    display(){

        strokeWeight(5);
        stroke("blue");
        line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y) 
    }
}