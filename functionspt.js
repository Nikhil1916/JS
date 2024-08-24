function calculator(operator, num1, num2) {
  let n1 = num1;
  let n2 = num2;
  if (operator == '+') {
    return function (num1, num2) {
      return num1 + num2;
    }
  } else if (operator == '-') {
    return function (num1, num2) {
      return num1 - num2;
    }
  }
}


let add = calculator('+', 1, 2);
console.log(add);
console.log(add(1, 2));

// function expression
let retFn = function (a, b) {
  return a + b;
}
console.log(retFn(2, 3));

// IIFE
let additionIIFE = (function (a, b) {
  return a + b;
})(20, 30);
console.log(additionIIFE);

var addArrow = (a, b) => {
  return a + b;
}
console.log(addArrow(1, 2));
var addArrow = (a, b) => a + b;
console.log(addArrow(20, 400));