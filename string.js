var str = "hello";
console.log(str);
console.log(str[4]);

console.log(str.slice(0, 4)); //hell
console.log(str.slice(1)); //ello prints from 1 st index to last
console.log(str.substring(0, 4)); //hell

let small = "small"
console.log(small.toUpperCase()); // SMALL

let large = "LARGE"
console.log(large.toLowerCase()); //large

let substr = small.concat(" ", large);
console.log(substr); // small LARGE


//split
str = "hello 1234 hi";
console.log(str.split(" ")); // hello 1234 hi
console.log(str.split("2")); // hello 1 34hi

str = "   hhh   yyyy";
console.log(str.split(""));
console.log(str.split("  "));

//trim
str = "      hello    world  "
console.log(str); //        hello      world
console.log(str.trim()); // hello    world


