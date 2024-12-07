// Window and this


console.log(a);
console.log(this.a);
console.log(window.a);

var a = 10;

console.log(a);
console.log(this.a);
//The this is referring to the Global object.
console.log(window.a);
//this and window are the same thing. They are both referring to the Gloabl object of the browser in which the variable a is stored.

console.log(window);
console.log(this === window); 
// Return true because they are the same thing