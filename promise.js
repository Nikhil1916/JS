// let promise = new Promise(function(resolve,reject){
//     setTimeout(()=>{reject("hi u fulfilled a promise!!")},2000);
// }).then((res)=>console.log(res))
// .catch((err)=>console.log(err+" err"));
// console.log("Nikhil Chawla");

// // let songPromise=new Promise(function(resolve,reject){
// //     let songObject={
// //         song:"let me down",
// //         album:"english album",
// //         singer:"dont know",
// //         lyrics:"dont let me down"
// //     }
// //     setTimeout(()=>reject(songObject.song),2000);
// // });
// // console.log(songPromise);
// // // songPromise.then((res)=>{
// // //     console.log(res.song);
// // // })
// // songPromise.then(console.log);

// // let customError=new Promise((resolve, reject) => {
// //     setTimeout(()=>{throw new Error("error")},1000)
// //   })
// //     .finally(() => console.log("Promise ready")) // triggers first
// //     .catch(err => console.log(err));

// let songPromise=new Promise(function(resolve,reject){
//     let songObject={
//         song:"let me down",
//         album:"english album",
//         singer:"dont know",
//         lyrics:"dont let me down"
//     }
//     setTimeout(()=>{reject('Singer was not able to deliver')},1000);
// })
// // .then((res)=>console.log(res,'success'))
// // .catch((err)=>console.log(err,'reject'));
// // console.log(songPromise);
// // songPromise.then((res)=>{
// //     console.log(res.song);
// // })
// songPromise.then(res=>console.log(res+" suc")).catch(err=>console.log(err+" rej"));

// let promise = new Promise(function(resolve, reject) {

//     setTimeout(() => resolve(1), 1000);
  
//   }).then(function(result) {
  
//     console.log(result);
//     // console.log(result); // 1
    
//     return new Promise((resolve, reject) => { // (*)
//         setTimeout(() => resolve(result * 2), 1000);
//     });
    
// }).then(function(result) { // (**)
    
//     // console.log(result); // 2
//     console.log(result);
    
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
  
//   });
//   console.log(promise);
//   promise.then((res)=>console.log(res));

// let fetchApi=fetch('https://api.github.com/users/iliakan')
// // .then(response => response.json())
// // .then(user => fetch(`https://api.github.com/users/${user.name}`))
// .then(response => {
//     return response.json();
// })
// .then(githubUser => new Promise(function(resolve, reject) { // (*)
//     console.log(githubUser);
//   let img = document.createElement('img');
//   img.src = githubUser.avatar_url;
//   img.className = "promise-avatar-example";
//   document.body.append(img);

//   setTimeout(() => {
//     img.remove();
//     resolve(githubUser); // (**)
//   }, 3000);
// }))
// // triggers after 3 seconds
// .then(githubUser => console.log(`Finished showing ${githubUser.name}`));

// let promise = Promise.all(iterable);
// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://api.github.com/users/jeresig'
//   ];
  
//   // map every url to the promise of the fetch
//   let requests = urls.map(url => fetch(url));
//   console.log(requests);
// //   Promise.all waits until all jobs are resolved
//   Promise.all(requests)
//     // .then(responses =>{
//     //   return responses;
//     // })
//     .then((responses)=>{
//       console.log(responses);
//       return Promise.all(responses.map((res)=>res.json()))
//     })
//     .then((res)=>console.log(res));

// Promise.any([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then(res=>console.log(res)).catch(res=>console.log(res+" err")); // 1






