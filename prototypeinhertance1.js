let arr = [1, 2, 3];
console.log(arr.__proto__);

// same as

console.log(Array.prototype);

// arr protope also has prototype
console.log(arr.__proto__.__proto__);

// same as object protoype

console.log(Object.__proto__.__proto__);


let obj1 = {
  name: 'nikhil'
}

let obj2 = {};

obj2.__proto__ = obj1;
console.log(obj2.__proto__.__proto__, obj1.__proto__);