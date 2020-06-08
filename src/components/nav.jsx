import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-primary bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ml-2 mr-2">
              <a className={this.props.active === 'view-cards' ? "nav-link btn btn-primary" : "nav-link btn"} href="#" id="view-cards" onClick={this.props.setView}>My Cards</a>
            </li>
            <li className="nav-item ml-2 mr-2">
              <a className={this.props.active === 'review-cards' ? "nav-link btn btn-primary" : "nav-link btn"} href="#" id="review-cards" onClick={this.props.setView}>Review Cards</a>
            </li>
            <li className="nav-item ml-2 mr-2">
              <a className={this.props.active === 'create-card' ? "nav-link btn btn-primary" : "nav-link btn"} href="#" id="create-card" onClick={this.props.setView}>Create New Card</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav
