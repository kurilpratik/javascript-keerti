// Some common Higher ORder Functions

// 1. Map - Transform elements of an array

const nums = [1,2,3,4,5];
console.log(nums);

//HOF means what? Passing another function to a function

const doubledNums = nums.map((num) => 2*num);
console.log(doubledNums);

// 2. Filter - Filter some elements from an array

const evens = nums.filter((num) => num%2 === 0);
console.log(evens);

// 3. Reduce - Reduce the array to a single value

const sum = nums.reduce((accumulator, num) => accumulator + num, 0);
console.log(sum);

const product = nums.reduce((accumulator, num) => accumulator * num, 1);
console.log(product);

// Cam learn more - OOP with JS, classes, constructor functions, factory functions etc
