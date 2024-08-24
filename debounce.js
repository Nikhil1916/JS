let counter = 0;
function getData() {
  // calls an api and get data
  console.log("fetching data", counter++);
}

function doSomeMagic(fn, d) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d)
  }
}

const betterFnc = doSomeMagic(getData, 300);