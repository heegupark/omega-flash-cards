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
  }

  componentDidMount() {
    this.getView()
  }

  getView() {
    const cards = JSON.parse(localStorage.getItem('flash-cards'))

    switch(this.state.view) {
      case 'create-card':
        return <CreateCard onSubmit={this.saveCards} />;
      case 'review-cards':
        return <Review cards={cards} setActiveCard={this.setActiveCard} />;
      case 'view-cards':
        return <ViewCards cards={cards} />;
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
    return cards.filter((card,i) => i === index)
  }

  render() {
    console.log('Create From App:', this.state.cards)
    return (
      <div>
        <Nav active={this.state.view} setView={this.setView} />
        {this.getView(this.state.view)}
      </div>
    );
  }
}

export default App
