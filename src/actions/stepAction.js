export const ADD_STEP = 'ADD_STEP';
export const UPDATE_STEP = 'UPDATE_STEP';

export const addStep = text => dispatch => {
  dispatch({
    type: ADD_STEP,
    text
  })
};

export const updateStep = (stepId, completionLevel) => dispatch => {
  dispatch({
    type: UPDATE_STEP,
    stepId,
    completionLevel
  })
};