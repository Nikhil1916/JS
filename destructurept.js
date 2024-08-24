let arr = ['nihkil', 'smridhi'];
var [name1, name2] = arr;
console.log(name1, name2);


let str = 'john smith iV';
var [name1, , name2] = str.split(' ');
console.log(name1, name2);

let [one, two, three, ...rest] = "1234567";
console.log(one, two, three, rest);


// swap

let a = 'a';
let b = 'b';
[b, a] = [a, b];
console.log(a, b);
