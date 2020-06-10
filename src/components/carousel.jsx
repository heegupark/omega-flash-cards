import React, { Component } from 'react'

class Carousel extends Component {
  render() {
    const { cards, active, isClicked, prevCard, nextCard, handleClick } = this.props
    return (
      cards.map((card, index) => {
        const text = isClicked ? card.answer : card.question
        const bgClass = isClicked ? 'bg-secondary text-black' : 'bg-dark text-white'
        return active === index
          ? (
            <div key={index}>
              <div
                className={`carousel-item active w-100 text-center ${bgClass} content`}
                onClick={handleClick}>
                <p>{text}</p>
              </div>
              <a
                className="carousel-control-prev prev-custom"
                href="#carousel"
                role="button"
                data-slide="prev"
                onClick={prevCard}>
                <i className="fas fa-chevron-left text-warning"></i>
              </a>
              <a
                className="carousel-control-next next-custom"
                href="#carousel"
                role="button"
                data-slide="next"
                onClick={nextCard}>
                <i className="fas fa-chevron-right text-warning"></i>
              </a>
            </div>
          )
          : ''
      })
    )
  }
}

export default Carousel
