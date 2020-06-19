//Currying

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplayBy5 = curriedMultiply(5);

multiply(3,4);
curriedMultiply(3)(4);

//Compose

const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

//Avoid side effects, go for FUNCTIONAL PURITY

var a = 1
function b() {
    a = 2;
}

//You get the same result everytime you run this function