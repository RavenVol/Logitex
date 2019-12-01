import * as types from '../data/actionTypes';

const initialState = {
  mail: '',
  password: '',
  confirm: '',
  mailStatus: 100,
  passwordStatus: 100,
  confirmStatus: 100,
};


export default function contactsReducer(state = initialState, action) {
  switch (action.type) {

    case types.CONTROL_MAIL:
      let mail = action.value.replace(/[^.@-\w]/gi, '');
      mail = mail ? mail : "";
      return { ...state, mail: mail };

    case types.CONTROL_PASS:
      return { ...state, password: action.value };

    case types.CONTROL_CONFIRM:
      return { ...state, confirm: action.value };

    case types.CHECK_MAIL:
      if (action.typing) return { ...state, mailStatus: 100 };
      if (state.mail && state.mail.includes('@')
      && state.mail.includes('.')
      && state.mail.length >= 6) {
        return { ...state, mailStatus: 200 };
      } else {
        return { ...state, mailStatus: 400 };
      };

    case types.CHECK_PASS:
      if (action.typing) return { ...state, passwordStatus: 100 };
      if (state.password && state.password.length >= 6) {
        return { ...state, passwordStatus: 200 };
      } else {
        return { ...state, passwordStatus: 400 };
      };

    case types.CHECK_CONFIRM:
        if (action.typing) return { ...state, confirmStatus: 100 };
        if (state.password && state.confirm && state.password === state.confirm) {
          return { ...state, confirmStatus: 200 };
        } else {
          return { ...state, confirmStatus: 400 };
        };

    default:
      return state;
  }
}


