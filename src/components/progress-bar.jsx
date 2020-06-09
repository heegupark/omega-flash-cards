import React, { Component } from 'react'

class ProgressBar extends Component {
  render() {
    const { progress } = this.props
    return (
      <div className="progress progress-custom">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-info"
          role="progressbar"
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"></div>
      </div>
    )
  }
}

export default ProgressBar
