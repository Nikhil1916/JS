
// ex1
// function outer() {
//     var a = 7;
//     function inner() {
//         console.log(a);
//     }
//     inner();
// }

// outer();

//in js we can also return a function

// ex2
function outer() {
  var a = 7;
  function inner() {
    console.log(a);
  }
  return inner;  //function along with its lexical scope is returned

  // return function inner() {
  //   console.log(a);
  // }
}

var x = outer();
console.log(x); //prints the entire function definition
x(); //function call -> 7


// not define error ex
// function inner() {
//   console.log(a);
// }

// inner();


// ex 3
// function outer() {
//   var a = 7;
//   function inner() {
//     console.log(a);
//   }
//   a = 100;
//   return inner;
// }

// var x = outer();
// x(); //100


// ex4
  // function z() {
  //     var b = 900;
  //     function x() {
  //         var a = 7;
  //         function y() {
  //             console.log(a,b);
  //         }
  //         y();
  //     }
  //     x();
  // }
  // z(); //7,900
