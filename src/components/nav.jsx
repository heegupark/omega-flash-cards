import React, { Component } from 'react'

class Nav extends Component {
  render() {
    const { active, setView } = this.props

    return (
      <nav className="navbar navbar-expand-lg navbar-primary bg-secondary">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span><i className="fas fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse flex-row-reverse" id="navbar">
          <ul className="navbar-nav">
            <li className="nav-item ml-2 mr-2">
              <a className={active === 'view-cards' ? "nav-link btn btn-dark" : "nav-link btn"} href="#" id="view-cards" onClick={setView}>My Cards</a>
            </li>
            <li className="nav-item ml-2 mr-2">
              <a className={active === 'review-cards' ? "nav-link btn btn-dark" : "nav-link btn"} href="#" id="review-cards" onClick={setView}>Review Cards</a>
            </li>
            <li className="nav-item ml-2 mr-2">
              <a className={active === 'create-card' ? "nav-link btn btn-dark" : "nav-link btn"} href="#" id="create-card" onClick={setView}>Create New Card</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav
