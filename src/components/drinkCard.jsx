import React from 'react'

import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Card from 'react-bootstrap/Card'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import { emailRecipe } from './sendEmail'

const DrinkCard = ({ drink, link }) => {
  const sendLabels = {
    active: 'Send Recipe',
    sending: 'Sending ...',
    sent: 'Email Sent',
    failed: 'Failed to Send!'
  }

  const [sendLabel, setSendLabel] = React.useState(sendLabels.active)

  const sendDrink = async (drink) => {
    setSendLabel(sendLabels.sending)
    const res = await emailRecipe(drink)

    console.log({ res })
    
    if (res?.status === 200) {
      setSendLabel(sendLabels.sent)
    } else {
      setSendLabel(sendLabels.failed)
    }

    setTimeout(() => {
      setSendLabel(sendLabels.active)
    }, 3000)
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={drink.img} />
      <Card.Body>
        <Card.Title>{drink.name}</Card.Title>
      </Card.Body>
      <Card.Body height={500}>
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
        <Button variant={sendLabel === sendLabels.failed ? 'danger' : 'primary'} size="sm" onClick={() => sendDrink(drink)} disabled={sendLabel !== sendLabels.active}>{sendLabel}</Button>
      </Card.Body>
    </Card>
  )
}

export { DrinkCard }
