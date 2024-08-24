var str = "Nikhil";
console.log(`Hi my name is  ${str}`);
console.log(`I am  ${1 + 18} years old`);
var learning = "Javascript"
let checkSpace = `I am learing 
${learning} today `;
console.log(checkSpace);
{
  console.log(checkSpace);
}
const a = "ok"; // cannot be redeclared and initialized afterwards or re-initialized 
// const b; we cannot initialze afterwards will give error

var x = 10;
function add() {
  var x = 20;
  var y = 30;
  console.log(x, y);
}
add();
if (true) {
  var z = 2000;
}
console.log(x);
// console.log(y);
console.log(z);

// let is block scope

if (true) {
  let w = 40;
}

// error
// console.log(w);

for (var i = 0; i < 10; i++) {
  let j = 10;
  if (i % 2 == 0) {
    let inif = "inif";
    var inifVar = "var inif";
  }
  // console.log(inif);
  // console.log(inifVar);
}

// error
// console.log(j);
// console.log(inif);

console.log(inifVar);

// let c = 1;
// do {
//   alert(c);
//   c++;
// } while (c < 3);