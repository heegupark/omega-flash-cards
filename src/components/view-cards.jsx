import React, { Component } from 'react'

function Card(props) {
  return (
    props.cards.map((card, index) => {
      return (
        <div className="col mb-4" key={index}>
          <div className="card">
            <div className="card-body bg-dark">
              <h5 className="card-title title-custom">Question:</h5>
              <p className="card-text text-white">{card.question}</p>
            </div>
            <div className="card-body bg-secondary">
              <h5 className="card-title title-custom">Answer:</h5>
              <p className="card-text text-white">{card.answer}</p>
            </div>
          </div>
        </div>
      )
    })
  )
}

class ViewCards extends Component {
  render() {
    const element = this.props.cards
    ? (
        <div className="container col-sm-10">
          <div className="row mb-3">
            <div className="col-sm">
              <h1 className="text-center">My Cards</h1>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3">
            {
              <Card cards={this.props.cards} />
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
    return element

  }
}

export default ViewCards
