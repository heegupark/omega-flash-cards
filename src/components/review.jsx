import React, { Component } from 'react'

function Progress(props) {
  return (
    <div className="progress progress-custom mt-5">
      <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{ width: `${props.progress}%` }} aria-valuenow={props.progress} aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  )
}

function Carousel(props) {
  const { cards, active, isClicked, prevCard, nextCard, handleClick } = props
  return (
    cards.map((card,index) => {
      const text = isClicked ? card.answer : card.question
      const bgClass = isClicked ? 'bg-secondary' : 'bg-dark'
      return active === index
        ? (
          <div key={index}>
            <div className={`carousel-item active w-100 mt-5 text-center ${bgClass} content`} onClick={handleClick}>
              <p>{text}</p>
            </div>
            <a className="carousel-control-prev prev-custom" href="#carousel" role="button" data-slide="prev" onClick={prevCard}>
              <i className="fas fa-chevron-left"></i>
            </a>
            <a className="carousel-control-next next-custom" href="#carousel" role="button" data-slide="next" onClick={nextCard}>
              <i className="fas fa-chevron-right"></i>
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
      isClicked: false,
      progress: 0
    }
    this.prevCard = this.prevCard.bind(this)
    this.nextCard = this.nextCard.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.calculateProgress = this.calculateProgress.bind(this)
  }

  prevCard() {
    const prev = this.state.active > 0
      ? this.state.active - 1
      : this.props.cards.length - 1
    this.setState(state => ({
      active: prev,
      isClicked: false
    }));
    this.calculateProgress(prev)

  }

  nextCard() {
    const next = this.state.active < this.props.cards.length - 1
      ? this.state.active + 1
      : 0
    this.setState(state => ({
      active: next,
      isClicked: false
    }));
    this.calculateProgress(next)
  }

  handleClick() {
    this.setState({isClicked: !this.state.isClicked})
    this.calculateProgress(this.state.active+1)
  }

  componentDidMount() {
    this.props.setActiveCard(this.state.active)
  }

  calculateProgress(page) {
    const {active, isClicked, progress} = this.state
    let newProgress = Math.floor((page) / Number(this.props.cards.length) * 100)
    this.setState({ progress: newProgress})
  }

  render() {
    const {cards} = this.props
    const {active, isClicked, progress } = this.state
    const {prevCard, nextCard, handleClick } = this
    return (
      <div className="container col-sm-10">
        <div className="row">
          <div className="col-sm">
            <h1 className="text-center">Review Cards</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-sm p-0">
            <div id="carousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <Progress progress={progress} />

                <Carousel
                  active={active}
                  cards={cards}
                  isClicked={isClicked}
                  prevCard={prevCard}
                  nextCard={nextCard}
                  handleClick={handleClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review
