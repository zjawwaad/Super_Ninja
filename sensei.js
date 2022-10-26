const Ninja = require('./ninja.js');


class Sensei extends Ninja {
    constructor(name, health){
        super(name, health);
        this.wisdom = 10;
    }
    
    speakWisdom(){
        super.drinkSake();
        console.log(`A coder gon code. My health is ${this.health}`)
        return this;
    }
}

const arlington = new Sensei("AR", 10 );

arlington.speakWisdom()