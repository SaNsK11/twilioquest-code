class Materializer{

    constructor(targetName, activated){
        this.target = targetName;
        this.activated = false;
    }

    

    activate(){
        this.activated = true;
    }
    materialize() {
        if(this.activated == true){
            return this.target;
        }
    }
}