let cricketer = {
    firstName: "Kapil",
    lastName: "sharma",
    // welcome:function(){
    //     console.log(`Welcome ${this.firstName} ${this.lastName}`);
    // }
}

let welcome = function (email, mobileNumber, location) {
    console.log(`Welcome ${this.firstName} ${this.lastName}
            thank u for signing up! Your email id is ${email},
            Your rigestered number is ${mobileNumber},
            Your location is ${location}
    `);
}

let cricketer2 = {
    firstName: "Ravi",
    lastName: "Shastri"
}

// first if welcome fnc is outside
// welcome.call(cricketer,"nikhil1916.cse18@chitkara.edu.in",123,"india");

// defination -->   
// function borrow
// calls a method of an object , substituting another object for the current object

// second if welcome functions is in inside a object
// cricketer.welcome.call(cricketer2)

// third with additional arguments
//  cricketer.welcome.call(cricketer,"nikhil1916.cse18@chitkara.edu.in",123,"india");

// here we r calling a method of object cricketer and now substituting anoither object cricketer2 in place of it


//apply
// welcome.apply(cricketer2,["nikhil1916.cse18@chitkara.edu.in",123,"india"]);


//bind
//same as call, but function is called explicitly (this return a function)
// let bind=welcome.bind(cricketer2);
// console.log(bind);
// bind();

// let car={
//     name:"thar",
//     brand:"mahindra"
// }

// var carFunction=function(year,kms){
//     console.log(`my car is ${this.name} ${this.brand} ,i bought it in ${year} and it has run ${kms}   
//     `);
// }

// Function.prototype.myBind=function(...args){
//     let fnObj=this;
//     let param=args.slice(1);
//     console.log(param);
//     return function(){
//         fnObj.apply(args[0],param); //or fnObj.call(args[0],...param)
//     }
// }

// let myAns=carFunction.myBind(car,2022,"two thousands");
// myAns();

// Function.prototype.myApply=function(...args){
//     console.log(args,this);
//     let currFunc=this;
//     let obj=args[0];
//     obj.fn=currFunc;
//     console.log(obj);
//     return obj.fn(...args[1]);
//     // return  
// }
// welcome.myApply(cricketer2,["cricketer.cse18@chitkara.edu.in",123,"india"]);

Function.prototype.myCall = function (...args) {
    let currFunc = this;
    let obj = args[0];
    obj.fn = currFunc;
    let params = args.splice(1);
    console.log(params);
    return obj.fn(...params);
}
welcome.myCall(cricketer2, "cricketer.cse18@chitkara.edu.in", 123, "india");

