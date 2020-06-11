import React, { Component } from 'react'
import Step from './Step';
import Completion from './Completion';

export default class Board extends Component {
  renderSteps = () => {
    return [...Array(8).keys()].map(idx => {
      return <Step id={`step-${idx}`} draggable={true} key={idx} step={`Step ${idx + 1}`}/>
    })
  };

  renderColumns = () => {
    const levels = ["Research", "Planning", "In Progress", "In review", "Complete"]
    return levels.map((level, idx) => {
      return (
        <div className="column">
          <Completion id={`level-${idx}`} key={idx} level={level}/>
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
