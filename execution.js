
createCourse("HLD");
// In most of the languages this should not work but in JS it does.
console.log(x);
// This prints undefined but it prints something, we are able to access this vairable even before we have declared it.

//WHY? For this we need to understand how JS works.

function createCourse(course){
    console.log("Creating " + course);
}

var x = 10;
console.log(x);

createCourse("LLD");

/*

How JS works?

The environment where your code is evaluated, executed, the vairables, the functions, the scope - what you can access from where - the entire environment is called execution context.

Excecution Context is nothing but your environment constituing your variables, functions, scopes, etc.

Everytime, you run or execute a JS code, there is an execution context created. So initially there is a Global Execution Context or GEC and now everytime you create a new function, a new function is called a New Excection Context will be created and will be added to the call stack. So there is one GEC and there will be EC added to the call stack everytime you call a function.

This EC had 2 main components or phases - 
The 1st component is actually before running the code, before even running the code the 1st phase happens. In the 1st phase, memory is allocated to the variables and functions, just memory is allocated. That is why this phase is called Memory Phase.
And in the 2nd phase the code is executed line by line so JS is synchronous single threaded language. It is synchronous so one by one in a single thread it starts executing the entire code, that is why this 2nd phase is called Code Phase.

Executions Context :
1. Memory Phase - Since memory is allocated to variables it is also called as variable environment.
2. Code Phase - Code is run line by line so it is called thread of execution.

*/

/* 

What is Hoisting?

Being able to access or extract variables and the functions before initializing them is called hoisting.
Hoisting is nothing just that you are able to access variables and functions before initializing or putting any value in them. 

*/
