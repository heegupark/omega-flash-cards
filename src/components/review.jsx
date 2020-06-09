import React, { Component } from 'react'

function Carousel(props) {
  const { cards, active, isClicked, prevCard, nextCard, handleClick } = props
  return (
    props.cards.map((card,index) => {
      return props.active === index
        ? (
          <div key={index}>
            {
            isClicked
            ? (
              <div className="carousel-item active w-100 mt-5 text-center bg-secondary content" onClick={handleClick}>
                <p>{card.answer}</p>
              </div>
              )
              : (
              <div className="carousel-item active w-100 mt-5 text-center bg-dark content" onClick={handleClick}>
                <p>{card.question}</p>
              </div>
              )
            }
            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev" onClick={prevCard}>
              <span className="carousel-control-prev-icon" aria-hidden="true"><i className="fas fa-chevron-left"></i></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel" role="button" data-slide="next" onClick={nextCard}>
              <span className="carousel-control-next-icon" aria-hidden="true"><i className="fas fa-chevron-right"></i></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        )
        : (
          <div key={index}>
            <div className="carousel-item ">
            </div>
          </div>
        )
    })
  )
}

class Review extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0,
      isClicked: false
    }
    this.prevCard = this.prevCard.bind(this)
    this.nextCard = this.nextCard.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  prevCard() {
    this.setState(state => ({
      active: this.state.active > 0
        ? this.state.active - 1
        : this.props.cards.length -1
    }));
  }

  nextCard() {
    this.setState(state => ({
      active: this.state.active < this.props.cards.length - 1
        ? this.state.active + 1
        : 0
    }));
  }

  handleClick() {
    this.setState({isClicked: !this.state.isClicked})
  }

  componentDidMount() {
    this.props.setActiveCard(this.state.active)
  }

  render() {
    return (
      <div className="container col-sm-10">
        <div className="row">
          <div className="col-sm">
            <h1 className="text-center">Review Cards</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div id="carousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <Carousel
                  active={this.state.active}
                  cards={this.props.cards}
                  isClicked={this.state.isClicked}
                  prevCard={this.prevCard}
                  nextCard={this.nextCard}
                  handleClick={this.handleClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review
