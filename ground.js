class Ground{
    constructor(x,y,width,height){
        var option = {
            isStatic : true
        }
     this.image=loadImage("images/ground.png")  
    this.body = Bodies.rectangle(x,y,width,height,option);
    this.width= width;
    this.height= height;

    World.add(world,this.body,);
    }
    display(){
       
        
        image(this.image,0,760,this.width,this.height);
    }
    

}