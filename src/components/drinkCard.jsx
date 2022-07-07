import React from 'react'
import PropTypes from 'prop-types'

import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Card from 'react-bootstrap/Card'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import { emailRecipe } from './sendEmail'

const sendDrink = (drink) => {
  emailRecipe(drink)
}

const DrinkCard = ({ drink, link }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={drink.img} />
    <Card.Body>
      <Card.Title>{drink.name}</Card.Title>
    </Card.Body>
    <Card.Body>
      <Tabs defaultActiveKey="ingredients" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="ingredients" title="Ingredients">
          <Stack>
            {drink.ingredients.map((ingredient, idx) => (
              <div key={idx.toString()}>
                <span className="text-muted">
                  {ingredient.measure}
                  {' '}
                </span>
                {ingredient.ingredient}
              </div>
            ))}
          </Stack>
        </Tab>
        <Tab eventKey="instructions" title="Instructions">
          <Card.Text>
            {drink.instructions}
          </Card.Text>
        </Tab>
      </Tabs>
    </Card.Body>
    <Card.Body>
      <Button variant="primary" size="sm" onClick={() => sendDrink(drink)}>Send Recipe</Button>
    </Card.Body>
  </Card>
)

DrinkCard.propTypes = {
  drink: PropTypes.object.isRequired,
  link: PropTypes.bool,
}

DrinkCard.defaultProps = {
  link: false,
}

export { DrinkCard }
