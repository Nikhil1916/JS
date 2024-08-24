// PROMISE . ALL

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("P1");
    }, 3000);
});

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("P2");
    }, 2000);
});

const promise3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("Error in P3");
    }, 1000);
});

const promise4 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("P4");
    }, 4000);
});

// Promise.myAll = function(values) {
//     console.log(values);
//     const myPromise = new Promise(function(resolve,reject) {
//         const result = [];
//         values.forEach(element => {
//             // writing promise.resolve as 
//             Promise.resolve(element).then((d)=>{
//                 result.push(d);
//                 if(result.length == values.length) {
//                     resolve(result);
//                 }
//             }).catch((e)=>{
//                 resolve(e);
//             })
//         });
//     })
//     return myPromise;
// }

// Promise.myAll([promise1,promise2,promise3,promise4])
// .then((d)=>{
//     console.log(d);
// });


// promise allSettled 
Promise.myAllSettled = function(promises) {
    const wrappedPromises = promises.map(element => {
        return Promise.resolve(element).then((value)=>{
           return { 'status': 'fulfilled',
            value
           }
        })
        .catch((error)=>{
           return {
                'status': 'rejected',
                reason: error,
            }
        });
    });
    return Promise.all(wrappedPromises);
}

// Promise.myAllSettled([promise1,promise2,promise3,promise4]).then((d)=>{
//     console.log(d);
// })

Promise.myRace = function(values) {
        const myPromise = new Promise(function(resolve,reject) {
            values.forEach(element => {
                // writing promise.resolve as 
                Promise.resolve(element).then((d)=>{
                    resolve(d);                    
                }).catch((e)=>{
                    reject(e);
                })
            });
        })
        return myPromise;
    }

     Promise.myRace([promise1,promise2,promise3,promise4]).then((d)=>{
        console.log(d);
      }).catch((e)=>{
        console.log(e);
      })
      ;

    // /promise. any
    // same sa race just reolve not do anything in reject 