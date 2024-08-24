// function add( num1,num2){
//     var ans=num1+num2;
//     return ans;
// }
// let res=add(3,4);
// console.log(res);


// function cal(operator, num1,num2){
//     if(operator=="+"){
//         return function(num1,num2){
//             return num1+num2;
//         }
//     }
// }

// var retFun=cal("+",32,4);
// var a=retFun();
// console.log(a);

// var num11=10;
// function cal(operator, num1,num2){
//     // let num11=num1;
//     let num22=num2;
//     if(operator=="+"){
//         return function(){
//             return num11+num22;
//         }
//     }
// }`   

// let retFun=cal("+",32,4);
// let a=retFun();
// console.log(a);

// let funExp=function(){
//     //do
//    return "done";
// }
// console.log(funExp());

// var add=(a,b)=> a+b;
// console.log(add(11,11));
// let checkEmpty=()=> console.log("checking empyy function");
// (checkEmpty());

// let circumference=(radius)=>{
//     let res=2*Math.PI*radius;
//     return res;
// }
// console.log(circumference(8));
// a();
// let a=function(){
    // console.log("hello");
// }
var b=5;
function carry(c){
    console.lof(c);
}
function show(carry){
    console.log()
}


//sir code
// 1) Normal Function 

//function definition
// function nameOfTheFunction(param1, param2) {
//     //do something
// }

//function invocation / function call
// nameOfTheFunction(arg1, arg2);

//write a function to add 2 numbers
function add(num1, num2) {
    var ans = num1 + num2
    // console.log(ans);
    return ans;
}

let res = add(3, 4);
console.log(res);

//functions are treated as first class citizens in JS 
// -> functions can be returned
// -> functions can be passed as parameters/args

// build a calculator
function calculator(operator, num1, num2) {
    if (operator == "add") {
        return function add() {
            // console.log(num1+num2);
            return num1 + num2;
        }
    }

    else if (operator == "-") {
        return function sub() {
            console.log(num1-num2);
        }
    }
}

let retFn = calculator("add", 45, 46);
console.log(retFn);
let sumOfTwoNum = retFn();
console.log(sumOfTwoNum);



// 2) function expression

var variable_name = function (params) {
    //do something
}

variable_name();

var sayHi = function () {
    console.log("hello how r u ?");
}

sayHi();
console.log(sayHi);

// 3) IIFE -> immediately invoked function

function add(a, b) {
    return a + b;
}

var ans = add(2, 3);
console.log(ans);

let additionIIFE = (function (a, b) {
    // console.log(a + b);
    return a + b;
})(20, 30);

console.log(additionIIFE);


//4 arrow functions

function add(a, b) {
    return a+b
};
var add = (a, b) => {
    return a + b;
}
var add = (a, b) => a + b;
var ans = add(4, 7);
console.log(ans);

var square = (num) => num * num;
var ans = square(7);
console.log(ans);

var sayHi = () => {
    console.log("Hello everyone");
}
sayHi();

var circumference = (radius) => {
    let res = 2 * Math.PI * radius;
    // return res;
    console.log(res);
}
// var ans = circumference(8);
// console.log(ans);
circumference(8);