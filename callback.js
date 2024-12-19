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

/*

Event Queue
Event Loop

So basically what happens is there can be a lot of callbacks that are registered, a lot of things that are happening asynchronously, maybe we're getting data from 10 different servers so there are suppose 10 different callbacks that are suppose been registered so you are waiting for too 10 different datas at different times, so now you need to wait as all these operations are running right now and as these operations are completed you need to handle them or you need to call the callback function.
So because there can be many operations that can be running so event queue and event loop are there in JS environment, what happens is whenever you register a callback, the operation is put into event queue, now as soon as this operation is finished your event loop is going to keep checking if this task is finsihed and as it is finished it is going to take it from the event queue and put it inot callstack or to your scope, then it is called.
Logically, what might also happen is if we have put timeout for 10 different requests / 10 different operations, so maybe we're handling those operations as well, so now there is a big event queue, although what might happen is if those 5seconds are completed and now that callback function should be called but because there are things in the queue that are yet to be processed and event loop is going to pick then up one by one, it is possible that your callabck (your handledata) is not called exaclty 5 seconds later, it will be called at least 5 seconds later but it can be more than that (6s, 7s later...) 
So while you are expecting for your callback to be executed 5seconds later, it may not because there are a lot of things happening and what event loop is picking up is first something else and your callback is picked up later. 

*/