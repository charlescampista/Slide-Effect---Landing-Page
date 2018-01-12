const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");



/* EVENTS FOR THE LEFT CLASS */
left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});



/* EVENTS FOR THE RIGHT CLASS */
right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () =>{
  container.classList.remove("hover-right");
});
