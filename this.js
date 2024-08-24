// RULES

// 1. the value of 'this'  is evaluated during the run time.
// 2. value of 'this' depends from where it is called
// 3. 'this' points to that object from where the function is being called
// 4. arr,obj,functions are all passed by reference

// 1.
// function type1() {
//   console.log(this.name);
// }
// var name = "javascript";
// type1();
// when function is called globally , this always points   to window obj
// ans is javascript as this is currently pointing to window object

// 2.
// function type2() {
//   console.log(this.lname); //singh
// }    
// var lname = "tiwari";
// var obj = {
//   lname: "singh",
//   type2,
// }
// obj.type2();
// in this cas as type 2 is called by obj2 refernce so it is called in obj object so this points to obj so singh is printed if 
//  we remove this.lname and add lname it will print tiwari as it will check its parent component 

// 3.
// var food = "pizza";
// var obj = { 
//   food: "pasta",
//   eat: function () {
//     console.log(this.food); //pizza
//   }
// }
// var foo = obj.eat;
// foo();

// in this as eat function defination is there in foo variable or foo is pointing to the reference of eat function and foo is called 
// in window object so this will point to window object and ans is pizza
// if we change line 36 to foo=obj.eat() means if we call the function like this then 'this' will point to obj and print pasta


// var length=4;
// function square(){
//     let length=10;
//     let cb=function(){
//         console.log(length);
//     }
//     setTimeout(cb, 2000);
//     cb();
// }
// var obj={
//     length:3,
//     square
// }
// obj.square();

// var length=1;
// function square(){
//     let cb=function(){
//         console.log(this.length*this.length); //1
//     }
//     setTimeout(cb,2000);
// }
// var obj={
//     length:3,
//     square
// }
// obj.square();

//  explanation written in notebook this is happening as after settimeout the global execution context gets destroyed so this now refers to the window
// object so 1*1=1



//5
function Name(fName, lName) {
  this.firstName = fName,
    this.lastName = lName

  // return this, this is return this in inbuilt  this works as a constructor
}
var obj = new Name("ram", "khanna");
console.log(obj);


//for arrow function this is undefined


//this in case of arrow functions 

// var group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],

//     showList() {
//         this.students.forEach(
//             (student) => {
//                 console.log(this.title + ": " + student)
//             }
//         );
//       },
//   };
//in arrow fn does not have its own 'this' , it points to 'this' outside itself.
//   group.showList(); //our group:john , our group:pete  our group:alice

//   let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],

//     showList() {
//         this.students.forEach(
//             function (student) {
//                 console.log(this.title + ": " + student) //this here is undefined , error -> cannot access title of undefined 
//             }
//         );
//       },
//   };

//   group.showList(); //our group:john , our group:pete  our group:alice

// let user = { name: "John" };
// let admin = { name: "Admin" };

//   function sayHi() {
//     console.log( this.name );
//   }

// use the same function in two objects
//   user.f = sayHi;
// {
//     name: "John",
//         f:function sayHi() {
//   console.log( this.name );
// }
// };
//   admin.f = sayHi;
// {
//     name: "Admin",
//         f:function sayHi() {
//   console.log( this.name );
// }

// these calls have different this
// "this" inside the function is the object "before the dot"
//   user.f(); // John  (this == user)
//   admin.f(); // Admin  (this == admin)

//   admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

//   let user = {
//     firstName: "Ilya",
//     sayHi() {
//       let arrow = () => console.log(this.firstName);
//       arrow();
//     }
//   };
//   user.sayHi(); // Ilya


let user = {
  firstName: "Ilya",
  sayHi() {
    function arrow() {
      console.log("hello", this);
      console.log(this.firstName) //this points to window 
    };
    arrow();
  }
};
user.sayHi(); // undefined



let firstName = "Ilya";
function sayHi() {
  function arrow() {
    console.log(firstName)
  };
  arrow();
}
sayHi(); // Ilya


//this is true example of this getting destroyed made yourself
// var length=4;
// function square(){
//     // let length=10;
//     let ob={
//         length  :3,
//      cb:function(){
//         console.log(this.length);
//     }
// }
//     setTimeout(ob.cb, 2000);
//     ob.cb();
// }
// var obj={
//     length:3,
//     square
// }
// obj.square();


//self questions
var obj = {
  who: "world",
  sayHi() {
    farewell = () => {
      console.log(`goodbye ${this.who}`);
    }
    return farewell;
  }
}
who = "nikhil";
console.log(obj.sayHi())
obj.sayHi()();


var obj = {
  who: "world",
  sayHi() {
    function farewell() {
      console.log(`goodbye ${this.who}`);
    }
    return farewell;
  }
}
who = "nikhil";
console.log(obj.sayHi())
obj.sayHi()();



let length = 1;
function square() {
  let cb = function () {
    console.log(this.length * this.length); //1
  }
  setTimeout(cb, 2000);
}
var obj = {
  length: 3,
  square
}
obj.square();