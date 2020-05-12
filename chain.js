class Chain{
constructor(bodyA,bodyB){
var options ={
    bodyA:bodyA,
    bodyB:bodyB,
    stiffness:0.04,
    length:10
}
this.chain=Constraint.create(options)
World.add(world,this.chain)
}
diplay(){
    var pos=this.chain.bodyA.position;
    var pos1=this.chain.bodyB.positioin;
    line(pos.x,pos.y,pos1.x,pos1.y)
    

}
}