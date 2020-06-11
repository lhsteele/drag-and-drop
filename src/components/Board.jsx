import React, { Component } from 'react'
import Step from './Step';

export default class Board extends Component {
  renderSteps = () => {
    return [...Array(8).keys()].map(idx => {
      return <Step key={idx} step={`Step ${idx + 1}`}/>
    })
  };

  renderColumns = () => {
    return [...Array(5).keys()].map(idx => {
      return (
        <div className="column">
          <div className="column-headers" key={idx}>
            <div>{`Column ${idx + 1}`}</div>
          </div>
        </div>
      )
    })
  };


  render() {
    return (
      <div className="outer-container">
        <div className="column-steps">
          {this.renderSteps()}
        </div>
        <div className="column-group">
          {this.renderColumns()}
        </div>
      </div>
    )
  }
}
