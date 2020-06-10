import React, { Component } from 'react'
import Nav from './nav';
import ViewCards from './view-cards';
import Review from './review';
import CreateCard from './create-card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: 'view-cards',
      cards: JSON.parse(localStorage.getItem('flash-cards')) || []
    }
    this.getView = this.getView.bind(this)
    this.setView = this.setView.bind(this)
    this.saveCards = this.saveCards.bind(this)
    this.setActiveCard = this.setActiveCard.bind(this)
    this.handleDeleteCard = this.handleDeleteCard.bind(this)
    this.handleUpdateCard = this.handleUpdateCard.bind(this)
  }

  getView() {
    const { view, cards } = this.state
    const { saveCards, setActiveCard, handleUpdateCard, handleDeleteCard } = this
    switch (view) {
      case 'create-card':
        return <CreateCard onSubmit={saveCards} />;
      case 'review-cards':
        return <Review cards={cards} setActiveCard={setActiveCard} />;
      case 'view-cards':
        return <ViewCards cards={cards} handleUpdateCard={handleUpdateCard} handleDeleteCard={handleDeleteCard} />;
      default:
        return null;
    }
  }

  setView() {
    this.setState({
      view: event.target.id
    })
  }

  saveCards(card) {
    const cardsArr = [...this.state.cards, card]
    this.setState({ cards: cardsArr })
    localStorage.setItem('flash-cards', JSON.stringify(cardsArr))
  }

  setActiveCard(index) {
    const cards = [...this.state.cards]
    return cards.filter((card, i) => i === index)
  }

  handleDeleteCard(id) {
    const cardsArr = [...this.state.cards]
    cardsArr.splice(id, 1)
    localStorage.setItem('flash-cards', JSON.stringify(cardsArr))
    this.setState({ cards: cardsArr })
  }

  handleUpdateCard(id, update) {
    const cardsArr = [...this.state.cards]
    cardsArr.splice(id, 1, update)
    this.setState({ cards: cardsArr })
    localStorage.setItem('flash-cards', JSON.stringify(cardsArr))
  }

  render() {
    return (
      <div>
        <Nav active={this.state.view} setView={this.setView} />
        {this.getView(this.state.view)}
      </div>
    );
  }
}

export default App
