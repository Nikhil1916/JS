function expensiveFnc() {
  console.log("expensive");
}

const betterFnc = throttling(expensiveFnc, 1000);
console.log(betterFnc);

function throttling(expensiveFnc, delay) {
  let flag = true;
  return function () {
    let context = this;
    let arg = arguments;
    if (flag) {
      flag = false;
      expensiveFnc.apply(context, arg);
      setTimeout(() => {
        flag = true;
      }, delay)
    }
  }
}