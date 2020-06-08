import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-primary bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-group-custom" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item nav-item-custom">
                <a className={this.props.active === 'view-cards' ? "nav-link nav-link-custom" : "nav-link"} href="#" id="view-cards" onClick={this.props.setView}>My Cards</a>
              </li>
              <li className="nav-item nav-item-custom">
                <a className={this.props.active === 'review-cards' ? "nav-link nav-link-custom" : "nav-link"} href="#" id="review-cards" onClick={this.props.setView}>Review Cards</a>
              </li>
              <li className="nav-item nav-item-custom">
                <a className={this.props.active === 'create-card' ? "nav-link nav-link-custom" : "nav-link"} href="#" id="create-card" onClick={this.props.setView}>Create New Card</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav
