const inputEl = document.querySelector("#name-input");
const spanInformation = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  spanInformation.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    spanInformation.textContent = "Anonymous";
  }
});