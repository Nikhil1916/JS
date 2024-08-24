let cricketer = {
  firstName: 'kapil',
  lastName: 'Dev',
  // welcome: function () {
  //   console.log(`welcome ${this.firstName} ${this.lastName}`);
  // }
}


let welcome = function (email, mobileNumber, location) {
  console.log(`Welcome ${this.firstName} ${this.lastName}
          thank u for signing up! Your email id is ${email},
          Your rigestered number is ${mobileNumber},
          Your location is ${location}
  `);
}

// cricketer.welcome();


let cricketer2 = {
  firstName: "Ravi",
  lastName: "Shastri"
}

// cricketer2.welcome()
// call method

welcome.call(cricketer, '@gmail.com', '81467', 'india');


// bind
let car = {
  name: 'thar',
  brand: 'mahindra'
}

var carFunction = function (year, kms) {
  console.log(`my car is ${this.name} ${this.brand} ,i bought it in ${year} and it has run ${kms}`);
}

var bindFnc = carFunction.bind(car, 2020, 2000);
console.log(bindFnc());

Function.prototype.myCall = function (...args) {
  let currFnc = this;
  let obj = args[0];
  let params = args.slice(1);
  obj.fn = currFnc;
  return obj.fn(...params);
}

carFunction.myCall(car, 2000, 4000);



Function.prototype.myBind = function (...args) {
  let currFnc = this;
  let obj = args[0];
  let param = args.splice(1);
  return function () {
    currFnc.apply(obj, param);
  }
}