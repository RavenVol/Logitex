import * as types from '../data/actionTypes';

export function addStage() {
  return {
    type: types.ADD_STAGE,
  };
}

export function substractStage() {
  return {
    type: types.SUBSTRACT_STAGE,
  };
}

export function setStage(value) {
  return {
    type: types.SET_STAGE,
    value,
  };
}

