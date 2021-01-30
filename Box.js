class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image=loadImage('wood1.png')
  this.visibility=255;
  }
  
display(){
  if(this.body.speed<3){
    super.display();

  }
  else{
    World.remove(world,this.body);
    this.visibility=this.visibility - 5;
    tint(255,this.visibility)
    image(this.image,this.body.position.x,this.body.position.y);
  }
}
score(){
  if(this.visibility<0 && this.visibility>-100){
    score++;

  }
}
};