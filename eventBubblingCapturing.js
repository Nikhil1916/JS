// see the order of execution with bubbling and capturing
// both r cyclic first capturing happens then bubbling

// only capture or bubbling deplend on true/false
// document.querySelector("#grandparent").addEventListener("click", () => {
//   console.log("grandparent clicked");
// }, false)
// document.querySelector("#parent").addEventListener("click", () => {
//   console.log("parent clicked");
// }, false)
// document.querySelector("#child").addEventListener("click", () => {
//   console.log("child clicked");
// }, false)



// Q How to control capture and bubbling
// mixed capture & bubbling
// document.querySelector("#grandparent").addEventListener("click", () => {
//   console.log("grandparent clicked");
// }, true)
// document.querySelector("#parent").addEventListener("click", () => {
//   console.log("parent clicked");
// }, false)
// document.querySelector("#child").addEventListener("click", () => {
//   console.log("child clicked");
// }, true)
// o/p grandparent clicked, child clicked, parent clicked
// this order came as parent follow bubling and rest of them follow capturing so capturing happens first so grandparent and child comes then parent


// how to stop these just add e.stoppropagation at that step it will stop means if we click on child in bubbling it will go till child-> parent oly not to grandparent
document.querySelector("#grandparent").addEventListener("click", (e) => {
  console.log("grandparent clicked");
}, false)
document.querySelector("#parent").addEventListener("click", (e) => {
  console.log("parent clicked");
  e.stopPropagation();
}, false)
document.querySelector("#child").addEventListener("click", (e) => {
  console.log("child clicked");
}, false)