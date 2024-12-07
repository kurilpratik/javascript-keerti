// ES6 Functions
// Function + Lexical Scope = Closure

let summ = (a,b) => {
    return a+b;
}

// If single line then

let sum = (a,b) => a+b;
let diff = (a,b) => a-b;


let a = 10;

function outer() {
    a = 100;
    function inner() {
        console.log(a);
    }
    return inner;
}



let returnedFuncVar = outer();

a = 20;

console.log(returnedFuncVar);
// The function is logged, not called (note)

returnedFuncVar();
//20

// This gives output as 20 and not 100 even though that is the closest in the scope because inside of outer fnc an inner fnc is stored and a reference to a is stored.
// So when a is updated outside of it, it still updates it to 20 and prints that because it has reference to the a! 



function outer2() {
    let count = 0;
    function inner1() {
        count++;
        console.log(count);
    }
    return inner1;
}

let incrementCounter = outer2();

incrementCounter();
incrementCounter();
incrementCounter();

//1 2 3

// So what is closure? A function with its lexical scopes - basically you keep references to all the variables outside.

// Creating too many of these functions will result in overconsumption of memory and you will end up having memory leaks.
// Hence use closures only when absolutely needed.

// Revision @ 1:00:00
