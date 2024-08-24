var arr = [2, 5, 7, 12];
// // area of squate where side is array elements // 4 25 49 144
// function areaofsquare(){
//     let ans=[];
//     for(let i=0;i<arr.length;i++){
//         // console.log("area of square with side "+arr[i]+" is "+arr[i]*arr[i]);
//         ans.push(arr[i]*arr[i]);
//     }
//     return ans;
// }
// let area=areaofsquare();
// console.log(area);

// // permiter of a square where side is arr 8,40,28,48
// function perimeterOfSquare(){
//     let ans=[];
//     for(let i=0;i<arr.length;i++){
//         // console.log("perimeter of square with side "+arr[i]+" is "+4*arr[i]);
//         ans.push(arr[i]*4);
//         }
//         return ans;
// }
// let permiter=perimeterOfSquare();
// console.log(permiter);

// // diagnal of square where side is arr 2.8,7.07,9.89,16.97
// function diagnolOfSquare(){
//     let ans=[];
//     for(let i=0;i<arr.length;i++){
//         // console.log("perimeter of square with side "+arr[i]+" is "+arr[i]*Math.sqrt(2));
//         ans.push(arr[i]*Math.sqrt(2));
//     }
//     return ans;
// }
// let diagnal=diagnolOfSquare();
// console.log(diagnal);


// //better way
let area1 = function (side) {
    return side * side;
}
let perimeter1 = function (side) {
    return 4 * side;
}
let diagnol1 = function (side) {
    return Math.sqrt(2) * side;
}

let calculate = function (arr, logic) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(logic(arr[i]));
    }
    return res;
}
console.log(calculate(arr, area1));
console.log(calculate(arr, perimeter1));
console.log(calculate(arr, diagnol1));


//map is hof --> callback function is taken as a argument

var areaofsquare1 = arr.map((res) => res * res);
console.log(areaofsquare1);


// prototype of map
Array.prototype.calculate = function (logic) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        res.push(logic(this[i]));
    }
    return res;
}

let ans = arr.calculate(area1);
console.log(ans);

Array.prototype.myPush = function (val) {
    let length = this.length;
    this[length] = val;
    return this;
}
console.log(arr.myPush(23));

let ans1 = arr.map(function (num) {
    if (num > 7) {
        return num;
    }
})
console.log(ans1);
// let arr=[1,2,3,14,5];
// console.log(arr.reduce((acc,coun)=>{
//     // console.log(coun);
//     return acc>coun ? acc : coun;
// }));
var arr = [1, 2, 3, 4, 5];
console.log(arr.map(largestNum));

function largestNum(acc, counter) {
    console.log(counter);
    return acc > counter ? acc : counter;
}
// console.log(ans2);
const worldCapitals = [{ country: "India", capital: "Delhi", population: 2, }, { country: "America", capital: "Washington DC", population: 6, }, { country: "France", capital: "Paris", population: 5, }, { country: "England", capital: "London", population: 4, }, { country: "Germany", capital: "Berlin", population: 4, },];

console.log(worldCapitals.map(printCountryName));
console.log(worldCapitals.filter(countryPop).map((res) => res.country));
function printCountryName(data) {
    return (data.country + "--> " + data.capital);
}
function countryPop(data) {
    return data.population < 5;
}
// let obj = {};
function getCountryCapital(obj, res) {
    if (obj[res.population]) {
        obj[res.population] = obj[res.population] + 1;
    } else {
        obj[res.population] = 1;
    }
    return obj;
}

// if u pass second parameter then it will be taken as accumulator else 1st element will be accumulator 
// but  in reduce callback fnc first parameter is acc

let obj1 = worldCapitals.reduce(getCountryCapital, {});
console.log(obj1);
