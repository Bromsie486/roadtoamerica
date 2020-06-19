//********** */ let + const *****************

const player = "Bobby"
let experience = 100;
let wizardLevel = false;

if(experience > 90) {
    wizardLevel = true;
}

player = "Valentine"; // can't change consts
/* making an object const doesn't prevent a user from
changing it's property */

const obj = {
    player: "Andrew",
    experience: 60,
    wizardLevel: false
}

/* const player = obj.player;
const experience = obj.experience; */
/* let wizardLevel = obj.wizardLevel; */

const { player, experience } = obj; //shorthand
let { wizardLevel } = obj; //shorthand

// *************Object Properties *************

const name = "John Snow";

const obj = {
    [name]: "hello",
    ["Ray" + "Smith"]: "hihi"
} // dymamic property settings

const a = "Simon;"
const b = true;
const c = {};

const obj = {
    /* a: a,
    b: b,
    c: c */
    a,
    b,
    c //shorthand
}

//***************Template String ****************** */

//old way:
const greet = "Hi " + name + ", you look like you are " + age + " and I see you have a cute " + pet;

//new way:
const name = "Mercy";
const age = "30";
const pet = "cat";

const greetBest = `Hi ${name} you look like you are ${age-10} and I see you have a cute ${pet}`;

// ********************Default Arguments*****************

function greet(name = "", age = "25", pet = "cat") { //default parameters
    return `Hi ${name} you look like you are ${age-10} and I see you have a cute ${pet}`;
}

// ****************Symbol**************

var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");

// *******************************ARROW FUNCTIONS*********************

function add(a, b) {
    return a + b;
}

const add = (a, b) => a + b; //shorthand for a single return