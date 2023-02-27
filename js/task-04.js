const buttonIncrementEl = document.querySelector("button[data-action=increment]");
const buttonDecrementEl = document.querySelector("button[data-action=decrement]");
const spanValueEl = document.querySelector("#value");

let counterValue = 0;

buttonIncrementEl.addEventListener("click", () => {
  counterValue += 1;
  spanValueEl.textContent = counterValue;
});

buttonDecrementEl.addEventListener("click", () => {
  counterValue -= 1;
  spanValueEl.textContent = counterValue;
});