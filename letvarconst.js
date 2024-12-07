// let, var and const
// Learn about temporal dead zone, block and function scope, lexical scoping.

console.log(a);
//Reference Error - Cannot access a before initialization
let a;


console.log(b);
//This does give an output (undefined)
var b;

// 3 ways to declare varibales - const, let and var

//Const and let are more strict than var, they don't let you access them before initialization.

// Use const whenever you want your value to be constant.

// Use let, avoid using var - this is the general guideline.

let p = 10;
const q = 20;
var r = 30;

// Only r is found in the Global object with the value of 30 and not p and q. p and q are in some other object.
// Also if we add breakpoint before the code starts the value of r is undefined as we understood it earlier.

// p and q are also hoisted, memory is allocated for them but they are not undefined, they have no value at all.

// Temporal Dead Zone:
// The period between when you created let/const and when you initialized it. 

// Hence it is advised to declare your variables at the top of the code to avoid getting errors like these and temporarl dead zone.

// Const, let are - Block Scoped
// var - function scoped
/*
{
    let x = 10;
    const y = 20;
    var z = 30;
}

console.log(x); //x not defined because the scopr of x is within the above block.
console.log(y); // Same for y
console.log(z); // This gives an output of 30 since var is not block scoped and we are able ot access it outside of that block
*/
function hello() {
    let d = 50;
    console.log(d);
}

hello();
// As soon as hello is called, a local context is created which holds a local window and d.
// And after the function is executed the local context is gone too, it's deleted.


function hello2() {
    //let e= 50;
    console.log(e);
}

let e = 100;

hello2(); 
// This prints 100 because it couldn't find the vairable inside the function scope and hence looks for it in the outer scope and finds it in the global scope and uses it.

// Lexical Scope
// You basically check where it is located and cna we access it or not.


function hello3() {
    let f= 50;
}

console.log(f)

hello3(); 
// This obviously throws an error because we can't access a variable defined inside of a function outside of it.
