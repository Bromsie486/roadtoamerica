const array = [1, 2, 10, 16];

const d = [];
array.forEach((num) => {
   d.push(num * 2);
})

console.log(d);

// map, filter, reduce - ALWAYS USE THESE

const array = [1, 2, 10, 16];
const mapArray = array.map(num => num * 2);
console.log(mapArray);

//filter

const filterArray = array.filter(num => num > 5);

console.log(filterArray);


//reduce
const array = [1, 2, 10, 16];
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0);

console.log("reduce", reduceArray);