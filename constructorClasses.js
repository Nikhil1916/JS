// function User() {
//     let a=1;
//     console.log(new.target);
//   }
  
//   // without "new":
//   User(); // undefined
  
//   // with "new":
//   new User(); // function User { ... }

// class User {
//     constructor(name){
//     this.name = name;
//     }
//     sayHi = function() {
//       console.log( "My name is: " + this.name );
//     };
//   }
  
//   let john = new User("John");
  
//   john.sayHi(); // My name is: John
// class User {
//     constructor(name) { this.name = name; }
//     sayHi() { console.log(this.name); }
//   }
  
//   // proof: User is a function
//   console.log( new User("ram").sayHi()); // function
//   let user = new User("nikhil");
//   console.log(user);

// class User {
//     constructor(name) { this.name = name; }
//     sayHi() { console.log(this.name); }
//   }
  
//   // proof: User is a function
//   console.log(User); // function
// class User {

//     constructor(name) {
//       // invokes the setter
//       this.name = name;
//     }
  
//     get name() {
//       return this._name;
//     }
  
//     set name(value) {
//         console.log(value);
//       if (value.length < 4) {
//         console.log("Name is too short.");
//         return;
//       }
//       this._name = value;
//     }
  
//   }
  
//   let user = new User("John");
//   console.log(user); // John
  
//   user = new User(""); // Name is too short.

// class Animal {
//     constructor(name) {
//       this.speed = 0;
//       this.name = name;
//     }
//     run(speed) {
//       this.speed = speed;
//       console.log(`${this.name} runs with speed ${this.speed}.`);
//     }
//     stop() {
//       this.speed = 0;
//       console.log(`${this.name} stands still.`);
//     }
//   }
  
//   let animal = new Animal("My animal");
//   console.log(animal);

//   class Rabbit extends Animal {
//     constructor(name){
//         super();
//         this.name=name;
//         }
//     hide() {
//       console.log(`${this.name} hides!`);
//     }
//     // run(speed){
//     //     this.speed=speed;
//     //     console.log(`${this.speed} is fast`)
//     // }
//   }
  
//   let rabbit = new Rabbit("White Rabbit");
//   console.log(rabbit);
//   rabbit.run(5); // White Rabbit runs with speed 5.
//   rabbit.hide(); // White Rabbit hides!

class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }
  
    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
    }
  
  }
  
  class Rabbit extends Animal {
    hide() {
      console.log(`${this.name} hides!`);
    }
  
    stop() {
        function a(){
            // console.log(super());
            super.stop();
        }
        a();
      }
  }
  
  let rabbit = new Rabbit("White Rabbit");
  
  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.stop(); // White Rabbit stands still. White Rabbit hides!