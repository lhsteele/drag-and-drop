import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Board from './components/Board';

import { simpleAction } from './actions/simpleAction';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
        {/* <pre>
          {JSON.stringify(this.props)}
        </pre>
        <button onClick={ev => this.props.simpleAction()}>test redux action</button> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
