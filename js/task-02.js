const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector("#ingredients");

console.log(ingredients);
console.log(ingredientsEl);

const ingredientsItem = ingredients.map((ingredient) => {
    const listEl = document.createElement("li");
    listEl.textContent = ingredient;
    listEl.classList.add("item");
    return listEl;
})

console.log(ingredientsItem);

ingredientsEl.append(...ingredientsItem);

