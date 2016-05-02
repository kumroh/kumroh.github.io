function SuperHuman() {
    this.die = true;
    this.speak = true;
     this.rare = true;
}

SuperHuman.fly = true;
SuperHuman.origin = "Far from Earth";

SuperHuman.getSpecial = function() {
    return this.origin;
};

SuperHuman.prototype.getProps = function() {
    console.log(this.constructor.name, "can this.die", this.die,
        "this.speak", this.speak,
        "this.rare", this.rare,
        "this.constructor.fly", this.constructor.fly, 
        "this.constructor.getSpecial", this.constructor.getSpecial && this.constructor.getSpecial());
}

function Human() {
    this.rare = false;
}

Human.prototype = new SuperHuman();
Human.prototype.constructor = Human;

var hum = new Human();
hum.getProps();

var sHum = new SuperHuman();
sHum.getProps();