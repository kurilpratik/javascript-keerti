// Reference type vs Primitive / Value type

let a = "Hello";
let b = a;
a = "Pratik";

console.log(a);
console.log(b);

/*
Output:
Pratik
Hello

The b still prints "Hello" even though a was updated to "Pratik" because the VALUES were copied.
*/

let p = {name: "Pratik"};
let q = p;
p.name = "Kartik";

console.log(p);
console.log(q);

/*
Output:
Kartik
Kartik

The value of q is updated to Kartik as the refernce of p is copied and not just the value, since object is a reference type.