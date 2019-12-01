import * as types from '../data/actionTypes';

export function controlMail(value) {
  return {
    type: types.CONTROL_MAIL,
    value,
  };
}

export function controlPassword(value) {
  return {
    type: types.CONTROL_PASS,
    value,
  };
}

export function controlConfirm(value) {
  return {
    type: types.CONTROL_CONFIRM,
    value,
  };
}

export function checkMail(typing) {
  return {
    type: types.CHECK_MAIL,
    typing,
  };
}

export function checkPassword(typing) {
  return {
    type: types.CHECK_PASS,
    typing,
  };
}

export function checkConfirm(typing) {
  return {
    type: types.CHECK_CONFIRM,
    typing,
  };
}

