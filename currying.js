

// let multiply = (x, y) => {
//   console.log(x * y);
// }

// let multiplyBy2 = multiply.bind(this, 2);
// multiplyBy2(3);

// let multiplyBy3 = multiply.bind(this, 3);
// multiplyBy3(3);



// otherwise we have to write like this in which we will give 2 arguments but due to currying we divided funtion with more parameters to more functions with one parameter
// multiply(2,3);p


// using closures

let multiply = (x) => {
  return function (y) {
    console.log(x * y);
  }
}

console.log(multiply(2));
multiply(2)(3);
