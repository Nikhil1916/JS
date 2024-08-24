var arr = [2, 5, 7, 12];
// calculate area of squares where side is arr
// expected output [4,5,49,144]

let calculateAreaOfSquare = (arr) => {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    ans.push(arr[i] * arr[i]);
  }
  return ans;
}
console.log(calculateAreaOfSquare(arr))


function calculatePerimiterOfSquare(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    ans.push(arr[i] * 4);
  }
  return ans;
}
console.log(calculatePerimiterOfSquare(arr))


function calculateDiagonalOfSquare(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    ans.push(arr[i] * Math.sqrt(2));
  }
  return ans;
}
console.log(calculateDiagonalOfSquare(arr))


let area = (res) => res * res;

var ans = arr.map(area);
console.log(ans);

// implement own calculate method like map
Array.prototype.calculate = function (logic) {
  const ans = [];
  for (let i = 0; i < this.length; i++) {
    ans.push(logic(this[i]));
  }
  return ans;
}
let square = (res) => res ** 2;
var newArr = [2, 3, 4, 5, 6, 7]
var protoSum = newArr.calculate(square);
console.log(protoSum);

// own push method
Array.prototype.myPush = function (val) {
  this[this.length] = val;
  return this;
}

let push_test = [1, 2, 3, 4, 7, 12];
push_test.myPush(5);
console.log(push_test);


function greaterThan3(val) {
  if (val > 3) return val;
  else return 'not greater';
}
console.log(push_test.calculate(greaterThan3));

// filter
var ans = push_test.filter(greaterThan4);
function greaterThan4(val) {
  if (val > 4) return val;
}
console.log(ans);
var arr1 = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
var ans = arr1.filter(lessThan4);
function lessThan4(val) {
  return val < 4;
}
console.log(ans);

var arr = [1, 2, 3, 4, 5];
const sumFnc = function (acc, currP) {
  acc = acc + currP;
  return acc;
}

var sum = arr.reduce(sumFnc);
console.log(sum);


// here by mistake i have added acc as first parameter, in javascript  built in acc is second parameter 
Array.prototype.myReduce = function (acc, logic) {
  let ans = acc;
  for (let i = 0; i < this.length; i++) {
    ans = logic(ans, this[i]);
  }
  return ans;
}

var myReduceSum = arr.myReduce(0, sumFnc);
console.log(myReduceSum);



// collect all keys
var arr = [{ name: "nik1" }, { name2: "nik2" }, { name3: "nik3" }, { name4: "nik4" }];
var combineKeysAns = arr.myReduce({}, combineKeys);
function combineKeys(acc, curr) {
  acc = { ...acc, ...curr };
  return acc;
}
console.log(combineKeysAns);


// largest value

var arr = [11, 2, 43, 4, 225];
largValue = (acc, curr) => {
  return Math.max(acc, curr);
}
console.log(arr.myReduce(0, largValue));

const worldCapitals = [
  { country: "India", capital: "Delhi", population: 5, },
  { country: "America", capital: "Washington DC", population: 6, },
  { country: "France", capital: "Paris", population: 5, },
  { country: "England", capital: "London", population: 4, },
  { country: "Germany", capital: "Berlin", population: 4, }
];


// Q1
worldCapitals.forEach(printCountryName);
function printCountryName(val) {
  console.log(val.country, val.capital);
}

// Q2

console.log(worldCapitals.reduce(mapCountryPop, {}));

// in reduce callback fnc first parameter is acc
function mapCountryPop(acc, currV) {
  if (currV.population in acc) {
    acc[currV['population']] = acc[currV['population']] + 1;
  } else {
    acc[currV['population']] = 1;
  }
  // console.log(currV.population, acc)
  return acc;
}


// Q3

function populationLessThan5cr(val) {
  return val.population < 5
}
console.log(worldCapitals.filter(populationLessThan5cr).map(res => res.country))


// do Q3 with reduce

function populationLessThan5cr2(acc, currV) {
  if (currV.population < 5) {
    acc.push(currV.country);
  }
  return acc;
}

console.log(worldCapitals.reduce(populationLessThan5cr2, []));

// practice
var arr = [1, 4, 2, 3, 2, 4, 1, 5, 6, 1, 1];
// output --> {1:4,2:2,3:1,4:2,5:1,6:1};

var mapValues = function (acc, currV) {
  if (currV in acc) {
    acc[currV] = acc[currV] + 1;
  } else {
    acc[currV] = 1;
  }
  return acc;
}

console.log(arr.reduce(this.mapValues, {}));


// my practice
Array.prototype.myMap = function (logic) {
  let ans = [];
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    ans.push(logic(arr[i]));
  }
  return ans;
}
var arr = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
]
console.log(arr.myMap(getId));
function getId(val) {
  return val.id;
}


Array.prototype.myFilter = function (logic) {
  let ans = [];
  for (let i = 0; i < this.length; i++) {
    if (logic(arr[i])) {
      ans.push(arr[i]);
    }
  }
  return ans;
}

console.log(arr.myFilter((res) => res.id > 2));
