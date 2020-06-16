import { ADD_STEP, UPDATE_STEP } from '../actions/stepAction';

const initialState = {
  steps: []
}

export const stepReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case ADD_STEP:
      return Object.assign({}, state, {
        steps: [
          ...state.steps,
          {
            text: action.text,
            completionLevel: 1
          }
        ]
      });
    case UPDATE_STEP:
      const stepToUpdate = state.steps[action.stepId]
      return Object.assign({}, state, { 
        [action.stepId]: { text: stepToUpdate.text, completionLevel: action.completionLevel } 
      });
    default:
      return state
  }
};