
const categoryItemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItemsEl.length}`);

categoryItemsEl.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelector('ul').children.length}`);
 })