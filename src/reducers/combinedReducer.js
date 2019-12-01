import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import contactsReducer from './contactsReducer';
import addressReducer from './addressReducer';
import categoryReducer from './categoryReducer';

const combinedReducer = combineReducers({
  modalReducer,
  contactsReducer,
  addressReducer,
  categoryReducer,
})

export default combinedReducer;

