console.log("here now");

const btn = document.querySelector("button");
const modal = document.querySelector(".modal");

btn.addEventListener("click", (event) => {
  console.log(event);
  console.log("You cicked");
  console.log(modal.classList);
  modal.classList.remove("hide");
  console.log(modal.classList);
});

modal.addEventListener("click", () => {
  modal.classList.add("hide");
});
document.querySelector(".modal div").addEventListener("click", (e) => {
  e.stopPropagation();
});
