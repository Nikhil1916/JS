// function a() {
//   var b = 1;
//   setTimeout(function () {
//     console.log("Timeout fnc");
//   }, 3000);
//   console.log("Hello");
// }
// a();

// Interview Ques
// print number from 1 to 5 with a second gap in each number

function a() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000)
  }
}
a();