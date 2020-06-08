import React, { Component } from 'react'
import Nav from './nav';
import ViewCards from './view-cards';
import Review from './review';
import CreateCard from './create-card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: 'view-cards'
    }
    this.getView = this.getView.bind(this)
    this.setView = this.setView.bind(this)
  }

  componentDidMount() {
    this.getView()
  }

  getView() {
    console.log(this.state.view)
    switch(this.state.view) {
      case 'create-card':
        return <CreateCard />;
      case 'review-cards':
        return <Review />;
      case 'view-cards':
        return <ViewCards />;
      default:
        return null;
    }
  }

  setView() {
    console.log(event.target.id)
    this.setState({
      view: event.target.id
    })
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
