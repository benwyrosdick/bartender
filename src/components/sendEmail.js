const emailRecipe = async (drink) => {
  console.log({ drink, token: process.env.ENVELOOP_API_TOKEN })
  if (!process.env.REACT_APP_ENVELOOP_API_TOKEN) return

  const authToken = `Token ${process.env.REACT_APP_ENVELOOP_API_TOKEN}`

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

  await fetch('https://staging-api.enveloop.net/templates/recipe', {
    headers: {
      Authorization: authToken,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  })

  alert('email sent')
}

export {
  emailRecipe,
}
