function newCall(age, weight) {
    return `My name is ${this.firstName} ${this.lastName}, and my weight is ${weight} age:${age}`;
}
let obj = {
    firstName: 'Nikhil',
    lastName: 'chawla'
}

let str = newCall.bind(obj, 75, 22);
console.log(str());
