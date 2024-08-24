// //spread operator
// // it is used to spread arr elemnts or object properties 
// //arr
// let nums = [1, 2, 3, 4];
// let newNums = [...nums,5,6,7,8];
// console.log(newNums);
// //obj
// const user = {
//     name: "Hardik",
//     age: 20,
//     residence: {
//         state: "Delhi",
//         city:"New Delhi"
//     }
// }

// it does shallow copy
// //override, new key:value pair 
// const newUser = { ...user, age:23,hobbies: "music" }; 
// console.log(newUser);
// user.residence.state = "Maharashtra";
// console.log(user);
// console.log(newUser);



// //rest operator
// //it is used to merge all of the function arguments into an array 
// function foo(...args) {
//     console.log(args);
//     args.forEach(arg=>console.log(arg))

// }
// foo("hello", "how", "are", 1, 2, 3, 4);

function showName() {
  console.log(arguments);
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);

  // it's iterable
  // for(let arg of arguments) console.log(arg);
}

// shows: 2, Julius, Caesar
showName("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");

function f() {
  let showArg = () => console.log(arguments);
  showArg();
}

f(1); // 1

let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];
console.log(merged);


spreadRest(1, 2, 3, 4);
function spreadRest(...val) {
  console.log(val);
}

// let params={
//   a:1,
//   b:2,
//   c:3
// }

// spreadRest(params);