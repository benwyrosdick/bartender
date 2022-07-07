const drinkSearch = async (str) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${str}`)
  const results = await response.json()
  const drinks = results.drinks || []
  return drinks.map((drink) => formatDrink(drink))
}

const drinkLookup = async (id) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
  const results = await response.json()
  const [drink] = results.drinks || []
  return formatDrink(drink)
}

const parseIngredients = (drink) => Array.from(Array(15).keys()).map((idx) => {
  const n = idx + 1
  if (drink[`strIngredient${n}`] && drink[`strIngredient${n}`].length) {
    return { measure: drink[`strMeasure${n}`], ingredient: drink[`strIngredient${n}`] }
  }
  return null
}).filter((ingredient) => ingredient)

const formatDrink = (drink) => {
  if (!drink) return null

  return {
    id: drink.idDrink,
    name: drink.strDrink,
    img: drink.strDrinkThumb,
    ingredients: parseIngredients(drink),
    instructions: drink.strInstructions,
  }
}

export { 
  drinkSearch,
  drinkLookup,
}
