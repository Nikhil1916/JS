// let promiseReq=new Promise((resolve)=>resolve(1));
// promiseReq.then((res)=>console.log(res));
// async function wait(){
//     return "hi";
// }
// console.log(wait().then((res)=>{
//     console.log(res);
// }));


// let fetchApi=fetch('https://api.github.com/users/iliakan')
// .then((res)=>res.json())
// .then((res)=>console.log(res));

async function call() {
    let response = await fetch('https://api.github.com/users/iliakan');
    console.log(response);
    let data = await response.json();
    console.log(data);
}
call();
console.log('i am fine');