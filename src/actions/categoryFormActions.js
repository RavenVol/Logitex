import * as types from '../data/actionTypes';

export function controlCategory(category, value) {
  return {
    type: types.CONTROL_CATEGORY,
    category,
    value,
  };
}
