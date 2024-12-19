// Promises

// After talking about hell and pyramid of doom, we need an elegant solution to manage async operations

/*

Just think about it, what if there was a way to somehow represent the state of this operation that is it going to complete, is it pending, it it fullfiled. Now how would we be able to represent this state? 
Using an object. 
That object that is used to represent that okay this asnyc operation is complete, fulfilled, or pending is called Promise.

Promise is nothing but the objec that is representing the state. Note, this object is representing an eventual completion or failure, something is going to happen

It has 3 states: pending, fulfilled, rejected.

*/

function getData() {
    return new Promise((resolve, reject) => {
        // Call your asyncrhonous operations here
        setTimeout(() => {
            resolve('data fetched');
        }, 5000);
    });
}


// function getData() {
//     return new Promise((resolve, reject) => {
//         // Call your asyncrhonous operations here
//         setTimeout(() => {
//             reject('Not found');
//         }, 5000);
//     });
// }

getData()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    })

// Essentially what we are doing here is using 2 handlers and it is very easy to read and manage, we can also keep chaining it - Sequential Asynchronous Operations

// Inside of a promise1() there is one resolve and one reject.

// There is another more elegant way of handling data so that it looks like operations are occuring asynchronously and it is async await which also uses promises under the hood

async function handleData() {
      try {
        const result = await getData();
        console.log(result);
      }  catch(error) {
        console.error(error);
      }
}

handleData();

// We wanted async operations so we came up with callbacks -> Promises : .then .catch -> async await