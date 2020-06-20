//reference type

var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};

/* 
 object2 referenceli object1-et, ezért mindkettő változik
 ha object1 értéke változik
 object3 egy teljesen más object, akkor is, ha a
 propertije ugyanaz mint object1-nek
*/

//context

/*
    This keyword means the current context you are in
    For example: this.alert("asd"); - window context
*/

const object4 = {
    a: function() {
        console.log(this);
    }
};
const object5 = {
    a: () => this
};

//instantiation

class Player {
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hey I am ${this.name} and I'm a ${this.type}`);
    }
}
//így kell overrideolni. az extends-el öröklődik a Player class mindensége
//a super nélkül nem lehet a sub classokban accesselni a this-t
//kell használni
class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }
    play() {
        console.log(`Ye boi, I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard("Johnny", "DPS");
const wizard2 = new Wizard("Hope", "Dark Spellcaster");