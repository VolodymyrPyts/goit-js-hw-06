const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const itemEl = ingredients.map(ingredient => {
  const item = document.createElement("li")
  item.classList = "item"

  const paragraphEl =  document.createElement("p")
  paragraphEl.textContent = `${ingredient}`

  item.append(paragraphEl)
  
  return item
})

const listEl = document.querySelector("#ingredients")
listEl.append(...itemEl)

