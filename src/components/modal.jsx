import React, { Component } from 'react'

class Modal extends Component {
  render() {
    const { element, btn1, btn1Text, btn2, btn2Text } = this.props
    return (
      <div id="modal" className="modal">
        <div className="modal-content text-center">
          <div className="row">
            {element}
          </div>
          <div className="row">
            <div className="col-sm text-right">
              <button className="col-sm-2 btn btn-outline-danger ml-2 mb-1" onClick={btn1}>{btn1Text}</button>
              <button className="col-sm-2 btn btn-outline-info ml-2 mb-1" onClick={btn2}>{btn2Text}</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
