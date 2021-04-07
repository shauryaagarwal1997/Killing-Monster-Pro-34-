class Hero{
    constructor(x,y,width,height){
        this.width=width;
        this.height=height;
    this.hero=Bodies.rectangle(x,y,width,height);
    World.add(world,this.hero);

    this.image=loadImage("superhero.png")

    }
    display(){
        push()
        imageMode(CENTER)
        image(this.image,this.hero.position.x,this.hero.position.y,this.width,this.height)
        pop();

    }
}