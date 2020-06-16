import React, { Component } from 'react'
import Step from './Step';
import Completion from './Completion';
import { connect } from 'react-redux';
import { addStep } from '../actions/stepAction';

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newStep: ''
    }
  }


  renderSteps = () => {
    if (this.props.steps.steps.length > 0) {
      return this.props.steps.steps.map((step, idx) => {
        return <Step id={`step-${idx}`} draggable={true} key={idx} step={step.text} />
      })
    }
  };

  renderColumns = () => {
    const levels = ["Research", "Planning", "In Progress", "In review", "Complete"]
    return levels.map((level, idx) => {
      return (
        <div className="column" key={idx}>
          <Completion id={`level-${idx}`} level={level}/>
        </div>
      )
    })
  };

  handleStepInput = e => {
    this.setState({ newStep: e.target.value })
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addStep(this.state.newStep)
    this.setState({ newStep: '' })
  }

  render() {
    return (
      <div className="outer-container">
        <div className="column-steps">
          {this.renderSteps()}
        </div>
        <div className="column-group">
          {this.renderColumns()}
        </div>
        <div className="add-step-container">
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text"
              value={this.state.newStep}
              onChange={this.handleStepInput}
              className="add-step-input"
            />
            <input 
              type="submit"
              value="Add new step"
              className="add-step-button"
            />
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  steps: state.steps
});

const mapDispatchToProps = dispatch => ({
  addStep: text => dispatch(addStep(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Board)