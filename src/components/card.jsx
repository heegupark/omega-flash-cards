import React, { Component } from 'react'
import Modal from './modal'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isUpdate: false,
      isDelete: false,
      selectedID: null,
      question: props.question,
      answer: props.answer
    }
    this.handleConfirmUpdate = this.handleConfirmUpdate.bind(this)
    this.handleUpdateStart = this.handleUpdateStart.bind(this)
    this.handleUpdateCancel = this.handleUpdateCancel.bind(this)
    this.handleConfirmDelete = this.handleConfirmDelete.bind(this)
    this.handleDeleteStart = this.handleDeleteStart.bind(this)
    this.handleDeleteCancel = this.handleDeleteCancel.bind(this)
    this.handleQuestionChange = this.handleQuestionChange.bind(this)
    this.handleAnswerChange = this.handleAnswerChange.bind(this)
  }

  handleConfirmUpdate() {
    event.preventDefault()
    const update = {
      question: this.state.question,
      answer: this.state.answer
    }
    this.props.handleUpdateCard(this.state.selectedID, update);
    this.setState({
      isDelete: false,
      isUpdate: false,
      selectedID: null
    })
  }

  handleUpdateStart(event) {
    event.preventDefault()
    this.setState({
      isDelete: false,
      isUpdate: true,
      selectedID: event.target.id,
      question: this.props.question,
      answer: this.props.answer
    })
  }

  handleConfirmDelete() {
    event.preventDefault()
    this.props.handleDeleteCard(this.state.selectedID)
    this.setState({
      isDelete: false,
      isUpdate: false,
      selectedID: null
    })
  }

  handleUpdateCancel(event) {
    event.preventDefault()
    this.setState({
      isDelete: false,
      isUpdate: false,
      selectedID: null,
      question: this.props.question,
      answer: this.props.answer
    })
  }

  handleDeleteStart(event) {
    event.preventDefault()
    this.setState({
      isDelete: true,
      isUpdate: false,
      selectedID: event.target.id
    })
  }

  handleDeleteCancel(event) {
    event.preventDefault()
    this.setState({
      isDelete: false,
      isUpdate: false,
      selectedID: null
    })
  }

  handleQuestionChange(event) {
    event.preventDefault()
    this.setState({
      question: event.target.value
    })
  }

  handleAnswerChange(event) {
    event.preventDefault()
    this.setState({
      answer: event.target.value
    })
  }

  setValue() {
    this.setState({
      question: this.props.question,
      answer: this.props.answer
    })
  }

  render() {
    const { id } = this.props
    const { isUpdate, isDelete, selectedID, answer, question } = this.state
    const {
      handleConfirmUpdate,
      handleUpdateStart,
      handleUpdateCancel,
      handleConfirmDelete,
      handleDeleteStart,
      handleDeleteCancel,
      handleQuestionChange,
      handleAnswerChange } = this
    return (
      <div className="col mb-4">
        <div className="card">
          <div className="card-body bg-dark" >
            <h5 className="card-title title-custom">Question:</h5>
            <p className="card-text text-white">{this.props.question}</p>
          </div>
          <div className="card-body bg-secondary">
            <h5 className="card-title title-custom">Answer:</h5>
            <p className="card-text text-white">{this.props.answer}</p>
          </div>
          <div className="card-footer bg-dark text-center">
            <i className="fas fa-pen text-white btn" onClick={handleUpdateStart} id={id}></i>
            <i className="far fa-trash-alt text-white btn" onClick={handleDeleteStart} id={id}></i>
          </div>
        </div>
        <div>
          {
            isUpdate
              ? (
                <Modal
                  element={(
                    <div className="col-sm">
                      <p className="font-weight-bold mb-2">Update Card</p>
                      <hr className="text-white border-bottom"></hr>
                      <label className="w-100 text-left font-weight-bold text-info">Question:</label>
                      <textarea
                        autoFocus
                        required
                        className="w-100 textarea-custom"
                        rows="3"
                        value={question}
                        onChange={this.handleQuestionChange} />
                      <label className="w-100 text-left font-weight-bold text-warning mt-3">Answer:</label>
                      <textarea
                        required
                        className="w-100 textarea-custom"
                        rows="3"
                        value={answer}
                        onChange={this.handleAnswerChange} />
                      <hr className="text-white border-bottom"></hr>
                    </div>
                  )}
                  btn1={handleConfirmUpdate}
                  btn1Text='Update'
                  btn2={handleUpdateCancel}
                  btn2Text='Cancel' />
              )
              : ''
          }
        </div>
        <div>
          {
            isDelete
              ? <Modal
                element={(
                  <div className="col-sm">
                    <p className="font-weight-bold mb-2">Do you really want to delete this card?</p>
                    <hr className="text-white border-bottom"></hr>
                    <p><span className="font-weight-bold text-info">Q:</span> {question}</p>
                    <p><span className="font-weight-bold text-warning">A:</span> {answer}</p>
                    <hr className="text-white border-bottom"></hr>
                  </div>
                )}
                btn1={handleConfirmDelete}
                btn1Text='Delete'
                btn2={this.handleDeleteCancel}
                btn2Text='Cancel' />
              : ''
          }
        </div>
      </div>
    )
  }
}

export default Card
