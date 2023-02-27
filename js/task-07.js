const inputControlEl = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");

inputControlEl.addEventListener("input", (event) => {
 spanTextEl.style.fontSize = `${event.currentTarget.value}px`;
});


