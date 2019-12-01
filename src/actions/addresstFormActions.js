import * as types from '../data/actionTypes';

export function controlCountry(value) {
  return {
    type: types.CONTROL_COUNTRY,
    value,
  };
}

export function controlCity(value) {
  return {
    type: types.CONTROL_CITY,
    value,
  };
}

export function controlAddress(value) {
  return {
    type: types.CONTROL_ADDRESS,
    value,
  };
}

export function checkCountry(typing) {
  return {
    type: types.CHECK_COUNTRY,
    typing,
  };
}

export function checkCity(typing) {
  return {
    type: types.CHECK_CITY,
    typing,
  };
}

export function checkAddress(typing) {
  return {
    type: types.CHECK_ADDRESS,
    typing,
  };
}

