import * as types from '../data/actionTypes';

const initialState = {
  category1: "",
  category2: "",
  category3: "",
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {

    case types.CONTROL_CATEGORY:
      return { ...state, [action.category]: action.value };

    default:
      return state;
  }
}
