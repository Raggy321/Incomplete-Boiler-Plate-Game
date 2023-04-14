class Ground {
    constuctor(x, y, width, height){
        this.options ={
            isStatic:true
        }
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        console.log(this.x)
        this.body = Matter.Bodies.rectangle(this.x,this.y,this.width,this.height)
        console.log(this.body)
        World.add(world,this.body)
    }
    display(){
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}