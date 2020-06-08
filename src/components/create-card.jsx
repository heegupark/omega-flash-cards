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
    const {question, answer} = this.state
    return (
      <div className="container col-sm-8">
        <div className="row">
          <div className="col-sm">
            <h1 className="text-center">Create New Card</h1>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="row mb-2">
            <div className="col-sm">
              <label className="w-100">Questions:</label>
              <textarea className="w-100" value={question} required onChange={this.handleQuestionChange} />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm">
              <label className="w-100">Answer:</label>
              <textarea className="w-100" value={answer} required onChange={this.handleAnswerChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <div className="float-right">
                <button type="button" className="btn btn-outline-danger ml-2" onClick={this.handleCancel}>Cancel</button>
                <button type="submit" className="btn btn-outline-primary ml-2">Save Card</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateCard
