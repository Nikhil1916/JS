// // we have an array with the name and surname
// let arr = ["John", "Smith"]

// // destructuring assignment
// // sets firstName = arr[0]
// // and surname = arr[1]
// let [firstName, surname] = "John Smith".split(' ');
// console.log(firstName); // John
// console.log(surname);  // Smith

// second element is not needed
// let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// console.log( title ); // Consul

let [a,b,c]="abc";
console.log(a,b,c);

let [name1, name2, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// now titles = ["Consul", "of the Roman Republic"] 
console.log(titles);

// let [firstName, surname] = [];

// alert(firstName); // undefined
// alert(surname); // undefined

// default values
// let [name = "Guest", surname = "Anonymous"] = ["Julius"];

// alert(name);    // Julius (from array)
// alert(surname); // Anonymous (default used)


// let title, width, height;

// error in this line
// {title, width, height} = {title: "Menu", width: 200, height: 100};

// {
//     // a code block
//     let message = "Hello";
//     // ...
//     console.log( message );
//   }

//   let user = {
//     name: "John",
//     age: 30
//   };
// console.log(Object.entries(user));  
// for(const [key,value] of Object.entries(user)){
//   console.log(key,value);
// }

let options = {
  title: "Menu",
  height: 200,
  width: 100
};

// title = property named title
// rest = object with the rest of properties
let { title, ...rest} = options;
console.log(title, rest);
let arr = {...rest};
console.log(arr);