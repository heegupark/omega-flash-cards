import React, { Component } from 'react'

class CreateCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answer: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleQuestionChange = this.handleQuestionChange.bind(this)
    this.handleAnswerChange = this.handleAnswerChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleQuestionChange(event) {
    this.setState({
      question: event.target.value
    })
  }

  handleAnswerChange(event) {
    this.setState({
      answer: event.target.value
    })
  }

  handleCancel(event) {
    event.preventDefault();
    this.setState({
      question: '',
      answer: ''
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const card = {
      question: this.state.question,
      answer: this.state.answer
    }
    this.props.onSubmit(card);
    this.setState({
      question: '',
      answer: ''
    })
  }

  render() {
    const { question, answer } = this.state
    return (
      <div className="container col-sm-8">
        <div className="row mb-2 mt-3">
          <div className="col-sm">
            <h2 className="text-center text-light">Create New Card</h2>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="row mb-2">
            <div className="col-sm">
              <label className="w-100 text-light">Question:</label>
              <textarea
                required
                autoFocus
                className="w-100 bg-dark text-light"
                value={question}
                rows="3"
                onChange={this.handleQuestionChange} />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm">
              <label className="w-100 text-light">Answer:</label>
              <textarea
                required
                className="w-100 bg-dark text-light"
                value={answer}
                rows="3"
                onChange={this.handleAnswerChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <div className="float-right">
                <button type="submit" className="btn btn-primary mr-1 save-btn-custom">Save</button>
                <button type="button" className="btn btn-danger ml-1 save-cancel-btn-custom" onClick={this.handleCancel}>Cancel</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateCard
