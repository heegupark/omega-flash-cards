import React, { Component } from 'react'
import Card from './card'
import Modal from './modal'

class ViewCards extends Component {
  render() {
    const { cards, handleUpdateCard, handleDeleteCard } = this.props
    return cards
      ? (
        <div className="container col-sm-10">
          <div className="row mb-2">
            <div className="col-sm">
              <h2 className="text-center text-light mt-3 mb-3">My Cards</h2>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3">
            {
              cards.map((card, index) => {
                return <Card
                  key={index}
                  id={index}
                  question={card.question}
                  answer={card.answer}
                  handleUpdateCard={handleUpdateCard}
                  handleDeleteCard={handleDeleteCard} />
              })
            }
          </div>
        </div>
      )
      : (
        <div className="container col-sm-10">
          <div className="row mb-3">
            <div className="col-sm">
              <h1 className="text-center">My Cards</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm text-center">
              No cards are found.
          </div>
          </div>
        </div>
      )

  }
}

export default ViewCards
