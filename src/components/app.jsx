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
      cards: []
    }
    this.getView = this.getView.bind(this)
    this.setView = this.setView.bind(this)
    this.saveCards = this.saveCards.bind(this)
  }

  componentDidMount() {
    this.getView()
  }

  getView() {
    switch(this.state.view) {
      case 'create-card':
        return <CreateCard onSubmit={this.saveCards} />;
      case 'review-cards':
        return <Review />;
      case 'view-cards':
        return <ViewCards />;
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
    let storage = window.localStorage
    const cardsArr = [...this.state.cards, card]
    this.setState({ cards: cardsArr })
    storage.setItem('flash-cards', JSON.stringify(cardsArr))
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
