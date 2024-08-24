// var obj={};
// console.log(obj);

// var person={
//     name:"nikhil", it is stored as string internally
//     age:21,
//     phone:12222222222,
//     "school name":"Dav Public"
// }
// console.log(person);
// console.log(person["school name"]); // if to check with spaces

var captainAmerica = {
  firstname: "Steve",
  lastname: "Rogers",
  friends: ["Bucky", "bruce", "tony"],
  address: {
    state: "Manhattan",
    country: "USA",
    city: "New York"
  },
  sayName: function () {
    console.log(`Hi My Name is ${this.firstname} ${this.lastname}`)
  }
}

console.log(captainAmerica);
captainAmerica.age = 12;
// console.log(captainAmerica["friends"][1]);
// console.log(captainAmerica.address);
captainAmerica.sayName();

// for (let key in captainAmerica) {
//   if (typeof captainAmerica[key] == 'object') {
//     let newObj = captainAmerica[key];
//     for (let nestKey in newObj) {
//       console.log(nestKey + " " + newObj[nestKey]);
//     }
//   } else {
//     console.log(key + " " + captainAmerica[key]);
//   }
// }

// delete captainAmerica.lastname;
// console.log(captainAmerica);

// captainAmerica.lastname="rogers";
// console.log(captainAmerica);

// var users={
//     name : "john",
//     age : 30
// }

// let abc="age";
// console.log(users.abc);
// console.log(users[abc]);

// // let keyName=prompt("Please add the item name");
// // let items={
// //     [keyName]:5,
// // }
// // console.log(items);

// var firstFriend="Rachel";
// var secondFriend="Ross";
// var thirdFriend="Joey";
// var fourthFriend=["Monica","chandler"];
// var friendsAddress={
//     Country:"USA",
//     City:"New York"
// }
// let friends={
//     firstFriend,
//     secondFriend,
//     thirdFriend,
//     fourthFriend,
//     friendsAddress,
//     enemy:undefined
// }
// console.log(friends);

// if(friends.enemy){ // as value is undefined or false
//     console.log("Enemy");
// }else{
//     console.log("All Friends");
// }

// if("enemy" in friends){
//     console.log("Enemy 2");
// }
// let user=makeEnemy("Emily",34);
// function makeEnemy(name,age){
//     return{
//         name,
//         age
//     }
// };
// console.log(user);

// object copy or cloning
// var obj={
//     name:"nikhil",
//     age:12
// }
// let clone={};
// //jiske andr copy krna ho  // jo copy krna ho
// Object.assign(clone,obj,{isMale:true},{favFood:"burger"});
// console.log(clone);
// obj.name="ram";
// console.log(clone);
// console.log(obj);


//nested objects cloning

// var user={
//     name:"pete",
//     sizes:{
//         height:180,
//         width:120
//     }
// }
// var newObj=Object.assign({},user);
// console.log(newObj);

// if we clone like this nested objects r cloned from their memory or refernce
//  so if u change sth in nested obj u can see it on other obj also

// newObj.sizes.height="okk";
// console.log(user); // as u can see in user also change is reflected



// deep cloning


// var user = {
//     name: "pete",
//     sizes: {
//         height: 180,
//         width: 120
//     }
// }

// function deepClone(obj){
//     var clone={};
//     for(let key in obj){
//         if(typeof obj[key] == 'object'){
//             clone[key]=deepClone(obj[key]);
//         } else{
//             clone[key]=obj[key];
//         }
//     }
//     return clone;
// }

// var arr=[1,4,2,3,2,4,1,5,6,1,1];
// var obj=arr.reduce(counter,{});
// function counter(ans,res){
//     if(res in ans){
//         ans[res]=ans[res]+1;
//     } else{
//         ans[res]=1;
//     }
//     return ans;
// }
// console.log(obj);



// var arr=[1,4,2,3,2,4,1,5,6,1,1];
// var obj={};
// for(let i=0;i<arr.length;i++){
//     if(obj[arr[i]]){
//         obj[arr[i]]=obj[arr[i]]+1;
//     } else{
//         obj[arr[i]]=1;
//     }
// }
// console.log(obj);







