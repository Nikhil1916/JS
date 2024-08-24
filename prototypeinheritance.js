// let animal = {
//     eats: true,
//     walk() {
//         console.log("Animal walk");
//       }
//   };
//   let rabbit = {
//     jumps: true
//   };
  
//   rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
//   console.log(rabbit.walk());

// let animal = {
//     eats: true,
//     walk() {
//       console.log("Animal walk");
//     }
//   };
  
//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };
  
//   let longEar = {
//     earLength: 10,
// };
// longEar.__proto__= rabbit
// // longEar.new=rabbit,
  
//   // walk is taken from the prototype chain
//   longEar.walk(); // Animal walk
//   console.log(longEar); // true (from rabbit)

// let animal = {
//     eats: true
//   };
  
//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };
  
//   // Object.keys only returns own keys
//   console.log(Object.keys(rabbit)); // jumps
  
//   // for..in loops over both own and inherited keys
//   for(let prop in rabbit) console.log(prop); // jumps, then eats
let animal = {
    walk() {
      if (!this.isSleeping) {
        console.log(`I walk`);
      }
    },
    sleep() {
      this.isSleeping = true;
    }
  };
  
  let rabbit = {
    name: "White Rabbit",
    __proto__: animal
  };
  
  // modifies rabbit.isSleeping
  rabbit.sleep();
  
  console.log(rabbit.isSleeping); // true
  animal.sleep();
  console.log(animal.isSleeping);