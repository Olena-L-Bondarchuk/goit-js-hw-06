const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingregientsList = document.querySelector('#ingredients');

const addItems = ingredients.map((el) => {

  const ingredientEl = document.createElement("li");
  ingredientEl.classList.add("item");
  ingredientEl.textContent = el;
  return ingredientEl;
});
// console.log(addItems);

ingregientsList.append(...addItems);