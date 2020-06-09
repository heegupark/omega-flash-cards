import React, { Component } from 'react'

function Modal(props) {
  const { id, cards, cancelDelete, confirmDelete } = props
  return (
    <div id="modal" className="modal">
      <div className="modal-content text-center">
        <div className="row">
          <div className="col-sm">
            <p>Are you sure you want to delete this card?</p>
            <p>Q: {cards[id].question}</p>
            <p>A: {cards[id].answer}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm text-right">
            <button className="col-sm-2 btn btn-outline-info ml-2" onClick={confirmDelete}>Confirm</button>
            <button className="col-sm-2 btn btn-outline-danger ml-2" onClick={cancelDelete}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Card(props) {
  const { cards, deleteHandle } = props
  return (
    cards.map((card, index) => {
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
            <div className="card-footer bg-dark text-center">
              <i className="far fa-trash-alt text-white" onClick={deleteHandle} id={index}></i>
            </div>
          </div>
        </div>
      )
    })
  )
}

class ViewCards extends Component {
  constructor() {
    super()
    this.state= {
      isModelOpen: false,
      deleteCardID: null
    }
    this.deleteHandle = this.deleteHandle.bind(this)
    this.cancelDelete = this.cancelDelete.bind(this)
    this.confirmDelete = this.confirmDelete.bind(this)
  }

  deleteHandle(event) {
    this.setState({
      isModelOpen: !this.state.isModelOpen,
      deleteCardID: event.target.id
    })
  }

  cancelDelete(event) {
    this.setState({
      isModelOpen: !this.state.isModelOpen,
      deleteCardID: null
    })
  }

  confirmDelete() {
    this.props.deleteCard(this.state.deleteCardID)
    this.setState({
      isModelOpen: !this.state.isModelOpen,
      deleteCardID: null
    })
  }

  render() {
    const {isModelOpen} = this.state
    const element = this.props.cards
    ? (
        <div className="container col-sm-10">
          <div className="row mb-3">
            <div className="col-sm">
              <h1 className="text-center">My Cards</h1>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3">
            <Card
              cards={this.props.cards}
              deleteHandle={this.deleteHandle} />
          </div>
          <div>
            {
              isModelOpen
                ? <Modal
                  id={this.state.deleteCardID}
                  cards={this.props.cards}
                  cancelDelete={this.cancelDelete}
                  confirmDelete={this.confirmDelete} />
                : ''
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
