//Evaluate these:
//#1
[2] === [2] 
false
{} === {} 
false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 5 4
const object2 = object1; 5 4
const object3 = object2; 5 4
const object4 = { a: 5}; 5 5
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class.

class Animal {
    constructor(type, subtype) {
        this.type = type;
        this.subtype = subtype;
    }
    introduce() {
        console.log(`Hi there, I'm a ${this.type} and also a ${this.subtype}`);
    }
}

class Mamal extends Animal {
    constructor(type, subtype, color) {
        super(type, subtype);
        this.color = color;
    }
    mamalSayHi() {
        console.log(`Hi, I'm a Mamal! My type is ${this.type}, my subtype is ${this.subtype} and my color is ${this.color}`);
    }
}
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

const cow1 = new Mamal("mamal", "cow", "green");