/*

Javascript is single threaded, everything is happening synchronously but isn't that very inefficent?
Because isn't that a very common use case that we want to fetch data from one server and data from other service, now all of this takes time, we don't have it in our hands that how much time is another server going to take to return the data + it is on network, there might be some error, it is going to take a lot of time, am I going to stop and wait over there? Am I going to get blocked? Because it is synchronous and single threaded, right?
No. There are amazing ways in JS to have this non blocking behavior or we can have asynchronous operations. Basically we can do some things under the hood, we can just get that data and when that getting of data is completed, we can handle it.
So basically what is happening is - we are going to say - okay get this data from the server or read this file and while that is happening we can continue the operations and when we get the data there should be something that tells us we got the data and now you can handle it or do some operations on it, so there are provisions for that.
One of the earliest ways to handle that is callbacks.

*/ 

/*
function fetchData() {
    setTimeout(() => {
        console.log('fetched data');
    }, 5000);
};

fetchData();

*/

// CALLBACK is nothing but a function that is passed as an argument to another function , it is called after some operation is succesfully executed.
// Example, the handleData callback is called when the setTimeout is occured after 5 seconds.


function fetchData(callback) {
    setTimeout(() => {
        let data = 'fetched data';
        callback(data, null);
    }, 5000);
};

function handleData(data, error) {
    if(error) {
        console.error(error);
    } else {
        console.log(data);
    }
}

console.log('start');
fetchData(handleData);

/*
Initially, there is fetchData in global and after 5 seconds data, error and this: window is available in the in the local scope.

So, where was this data stored for those 5 seconds? Where is it going?

*/