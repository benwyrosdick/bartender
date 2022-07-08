import React, { useState, useRef } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Layout from './components/layout'

import { DrinkCard } from './components/drinkCard'
import { drinkSearch } from './components/drinkSearch'

const App = () => {
  const [drinks, setDrinks] = useState()
  const q = useRef(null)

  const _handleSearch = async () => {
    if (q.current.value.length) {
      setDrinks(await drinkSearch(q.current.value))
    } else {
      setDrinks(null)
    }
  }

  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') _handleSearch(e)
  }

  const renderDrinks = () => {
    if (drinks) {
      return (
        <>
          <h2>
            {`${drinks.length} drink${drinks.length === 1 ? '' : 's'} found`}
          </h2>
          <Row xs={1} sm={2} lg={3} className="g-4">
            {drinks.map((drink) => (
              <Col key={drink.id}>
                <DrinkCard drink={drink} link />
              </Col>
            ))}
          </Row>
        </>
      )
    }
    return null
  }

  return (
    <Layout>
      <div className="form-inline mb-3">
        <Stack gap={3}>
          <div className="form-group mr-2">
            <input
              type="text"
              ref={q}
              className="form-control"
              placeholder="Drink Name"
              onKeyDown={_handleKeyDown}
            />
          </div>
          <div className="mb-4">
            <Button variant="secondary" onClick={_handleSearch}>Search</Button>
          </div>
        </Stack>
      </div>
      {renderDrinks()}
      <div className="my-5" />
    </Layout>
  )
}

export default App
