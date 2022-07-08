const emailRecipe = async (drink) => {
  const { 
    REACT_APP_ENVELOOP_API_TOKEN: apiToken,
    REACT_APP_ENVELOOP_API_URL: apiUrl = 'https://staging-api.enveloop.net',
  } = process.env

  console.log({ drink, apiToken })
  if (!apiToken) return

  const authToken = `Token ${apiToken}`

  const data = {
    to: 'ben.wyrosdick@gmail.com',
    from: 'recipe@enveloop.net',
    subject: `Your recipe for ${drink.name}`,
    userVariables: {
      drinkName: drink.name,
      drinkImage: drink.img,
      ingredients: drink.ingredients.map((ingredient) => `${ingredient.measure} ${ingredient.ingredient}`),
      instructions: drink.instructions,
      drinkId: drink.id,
    },
  }

  const res = await fetch(`${apiUrl}/templates/recipe`, {
    headers: {
      Authorization: authToken,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  })

  return res
}

export {
  emailRecipe,
}
