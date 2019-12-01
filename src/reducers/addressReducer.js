import * as types from '../data/actionTypes';

const initialState = {
  country: '',
  city: '',
  address: '',
  countryStatus: 100,
  cityStatus: 100,
  addressStatus: 100,
};


export default function addressReducer(state = initialState, action) {
  switch (action.type) {

    case types.CONTROL_COUNTRY:
      let country = action.value.replace(/[^-\w\s]/gi, '');
      country = country ? country : "";
      return { ...state, country: country };

    case types.CONTROL_CITY:
      let city = action.value.replace(/[^-\w\s]/gi, '');
      city = city ? city : "";
      return { ...state, city: city };

    case types.CONTROL_ADDRESS:
      let address = action.value.replace(/[^,./""-\w\s]/gi, '');
      address = address ? address : "";
      return { ...state, address: address };

    case types.CHECK_COUNTRY:
      if (action.typing) return { ...state, countryStatus: 100 };
      if (state.country && state.country.length >= 2) {
        return { ...state, countryStatus: 200 };
      } else {
        return { ...state, countryStatus: 400 };
      };

    case types.CHECK_CITY:
      if (action.typing) return { ...state, cityStatus: 100 };
      if (state.city && state.city.length >= 2) {
        return { ...state, cityStatus: 200 };
      } else {
        return { ...state, cityStatus: 400 };
      };

    case types.CHECK_ADDRESS:
      if (action.typing) return { ...state, addressStatus: 100 };
      if (state.address && state.address.length >= 6) {
        return { ...state, addressStatus: 200 };
      } else {
        return { ...state, addressStatus: 400 };
      };

    default:
      return state;
  }
}


