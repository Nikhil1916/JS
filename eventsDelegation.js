document.querySelector("#category").addEventListener("click", (e) => {
  console.log("container clicked", e);
  if (e.target.tagName == 'LI') {
    location.assign(`./${e.target.id}`)
  }
})