let user = {
  name: "John",
  age: 30,

  toString() {
    return `{name: "${this.name}", age: ${this.age}}`;
  }
};
console.log(user);
console.log(JSON.stringify(user)); // {name: "John", age: 30}

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null
};

let json = JSON.stringify(user);

console.log(typeof json); // we've got a string!

console.log(JSON.parse(json));

const [y, z, ...a] = [1, 2, 3, 4, 5, 6];
console.log(y, z, a);


//   let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],

//     showList() {
//         let check=false;
//       this.students.forEach(
//           student => console.log(this.title + ': ' + student)
//           );
//           this.students.forEach(()=>console.log(this));
//     }
//   };
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],

//     showList() {
//         console.log(this);
//     //     this.students.forEach(function(student) {
//     //       console.log(this.ayaan);
//     //     // Error: Cannot read property 'title' of undefined
//     //     console.log(this.title + ': ' + student);
//     //   });
//     var a222=10;
//     hi();
//     }

//   };
//   function hi(){
//     console.log(this);
//   }
//   group.showList();

function check() {
  let a1 = 23;
  console.log(this.a1);
}
var a1 = 10;
check();

// a number in JSON is just a number
console.log(JSON.stringify(1)) // 1

// a string in JSON is still a string, but double-quoted
console.log(JSON.stringify('test')) // "test"

console.log(JSON.stringify(true)); // true

console.log(JSON.stringify([1, 2, 3])); // [1,2,3]

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room // meetup references room
// };

// room.occupiedBy = meetup; // room references meetup

// console.log( JSON.stringify(meetup, ['title', 'participants']) );
// {"title":"Conference","participants":[{},{}]}
// console.log(room);
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

console.log(JSON.stringify(meetup, function replacer(key, value) {
  console.log(`${key}: ${value}`);
  return (key == 'occupiedBy') ? undefined : value;
}));

