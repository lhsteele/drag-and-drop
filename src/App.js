import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Board from './components/Board';

import configureStore from './store';

import { addStep, updateStep } from './actions/stepAction';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}
const store = configureStore();

console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addStep('Testing step 1'))
store.dispatch(addStep('Testing step two'))
store.dispatch(addStep('Testing step THREE'))
store.dispatch(updateStep(0, 'level 2'))
store.dispatch(updateStep(1, 'level 4'))
store.dispatch(updateStep(2, 'level 5'))
unsubscribe()

export default App;
