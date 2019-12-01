import * as types from '../data/actionTypes';

const initialState = {
  stage: 1,
};

export default function modalReducer (state = initialState, action) {
  switch (action.type) {

    case types.ADD_STAGE :
      return state.stage < 4
        ? { ...state, stage: state.stage + 1, }
        : state;

    case types.SUBSTRACT_STAGE :
      return state.stage > 1
        ? { ...state, stage: state.stage - 1, }
        : state;

    case types.SET_STAGE :
      return { ...state, stage: action.value };

    default:
      return state;
  }
}

