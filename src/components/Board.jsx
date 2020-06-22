import React, { Component } from 'react'
import Step from './Step';
import Completion from './Completion';
import { connect } from 'react-redux';
import { addStep, updateStep } from '../actions/stepAction';

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newStep: ''
    }
    this.levels = ["Research", "Planning", "In Progress", "Complete"]
    this.colors = ["#ff7d7e", "#e8ead2", "#af9619", "#ffc833"]
  }


  renderSteps = () => {
    const steps = this.props.steps.steps
    if (steps.length) {
      return this.props.steps.steps.map((step, idx) => {
        return <Step 
                  id={idx} 
                  draggable={true} 
                  key={idx} 
                  step={step.text} 
                  color={this.colors[idx % this.colors.length]}
                />
      })
    }
  };

  handleLevelUpdate = (step_id, level) => {
    this.props.updateStep(step_id, level)
  };

  renderColumns = () => {
    return this.levels.map((level, idx) => {
      return (
        <div className="column" key={idx}>
          <Completion id={level} level={level} handleLevelUpdate={this.handleLevelUpdate}/>
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
    console.log(this.props.steps)
    return (
      <div className="outer-container">
        <div className="step-col-container">
          <div className="column-steps">
            {this.renderSteps()}
          </div>
          <div className="column-group">
            {this.renderColumns()}
          </div>
        </div>
        <div className="add-step-container">
          <form onSubmit={this.handleSubmit} className="add-step">
            <input 
              type="text"
              value={this.state.newStep}
              onChange={this.handleStepInput}
              className="add-step-input"
            />
            <input 
              type="submit"
              value="Add step"
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
  addStep: text => dispatch(addStep(text)),
  updateStep: (stepId, completionLevel) => dispatch(updateStep(stepId, completionLevel))
})

export default connect(mapStateToProps, mapDispatchToProps)(Board)