// Callback Hell or Pyramid of Doom


asyncOperation1(arg1, (result1) => {
    asyncOperation2(result1, (result2) => {
        asyncOperation3(result2, (result3) => {
            // More nested callbacks
            asyncOperation4(result3, (result4) => {
                // And so on...
            })
        })
    })
})

/*

There are a lot of deeply nested async operations that are happening and this is a very common usecase for example, swiggy or zomato :
Has the paymnet completed? Yes -> Now send the notifcation to restaurant or delivery partner -> Oh they've accepted it -> Send the notif to user, something like this.
This happens and then this and then this...

This code is basically looking like a pyramid and the problem with the callbacks are:
- It looks like a pyramid and you feel like you are stuck in hell
- Not maintainable, error handling is going to be a nightmare
- The control to the next function is given to another function so it is not in our control anymore also k/a inversion of control.

*/