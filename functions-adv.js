/*

Fucntions are called as first class citizens in JS because:
1. Functions can be assigned to variables
2. Functions can be passed as arguments to other functions
3. They can be returned from functions
4. They can also be stored in data structures.

*/

function add(a, b) {
    return a + b;
}

console.log(add);
console.log(add(2,3));

//Memory is allocated for function in the above case

let sum = function (a,b) {
    return a + b;
}

console.log(sum);
console.log(sum(2,3));

// Sum is not available in global as it stored as let so it is found in 'script' mostly

// Memory is allocated for the variable in the above case

// when the sum function is executed it create a 'local' which holds a and b, but it also holds this.window which is a reference to the outside window

let diff = function(a,b) {
    return a-b;
}


function operate(operatinFunc, a , b) {
    return operatinFunc(a, b);
}

console.log(operate(sum, 4, 4));
console.log(operate(diff, 5, 3));

// The above can be achieved even if we decalred the functions in the normal manner instead of storing them in a varibale

// Higher Order Functions
// A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.

