//Pass by value

let a = 5;
let b = a;

/*a will = b because it COPIES it's value 
If a is changed, b stays the same.

*/


//Pass by reference

let array1 = [1,2,3,4,5,6];
let array2 = array1;

/*array2 will POINT to the location of array1 in the
MEMORY. If one is changed, the other one is changed too.

Pass by reference only exists in arrays and objects
*/

array2 = array1.concat([]);
array2.push(23232323);

console.log(array1);
console.log(array2);


let obj = {
    a: "a",
    b: "b",
    c: {
        deep: "you can never change me bruh"
    }
}

let clone = {...obj};
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = "hahahahahah";
console.log(obj);
console.log(clone);
console.log(superClone);