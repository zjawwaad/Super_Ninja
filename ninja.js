class Ninja { 
    constructor(nameParam, health)
    {
        this.name = nameParam;
        this.health = health;
        this.speed = 3; 
        this.strength = 3; 
    }

    sayName(){
        console.log("My name is " + this.name)
    }

    showStats(){
        console.log("My name is " + this.name, "I have " + this.health, "health," + this.speed, "speed, and " + this.strength, "strength ")
    }

    drinkSake(){
        this.health += 10;
        console.log(`My health is now ${this.health}`) 
        return this;
    }
}
let A1 = new Ninja("Zay", 100)

A1.drinkSake()
A1.showStats()

module.exports = Ninja;
