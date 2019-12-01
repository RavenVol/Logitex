import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { controlCountry, controlCity, controlAddress,
  checkCountry, checkCity, checkAddress } from '../actions/addresstFormActions';
import { setStage } from '../actions/modalActions';

import '../styles/css/form.css';

const FormAddress = ({postal, stage, setStage,
  controlCountry, controlCity, controlAddress,
  checkCountry, checkCity, checkAddress, history }) => {

  const { country, city, address, countryStatus, cityStatus, addressStatus } = postal;

  stage !== 2 && setStage(2);

  return (
    <form className="form">
      <label className="form__label" htmlFor="country">
        country
      </label>
      <input
        id="country"
        className="form__input"
        type="text"
        placeholder=""
        value={country}
        autoFocus
        required
        onChange={(event) => controlCountry(event.target.value)}
        onFocus={() => checkCountry(true)}
        onBlur={() => checkCountry()}
      />

      <label className="form__label" htmlFor="city">
        city
      </label>
      <input
        id="city"
        className="form__input"
        type="text"
        placeholder=""
        value={city}
        required
        onChange={(event) => controlCity(event.target.value)}
        onFocus={() => checkCity(true)}
        onBlur={() => checkCity()}
      />

      <label className="form__label" htmlFor="address">
        address
      </label>
      <input
        id="address"
        className="form__input"
        type="text"
        placeholder=""
        value={address}
        required
        onChange={(event) => {controlAddress(event.target.value); checkAddress(); }}
        onFocus={() => checkAddress(true)}
        onBlur={() => checkAddress()}
      />

      {countryStatus !== 200 || cityStatus !== 200 || addressStatus !== 200
        ? <input
            className="form__button"
            type="button"
            value="NEXT"
            disabled
          />
        : <input
            className="form__button"
            type="button"
            value="NEXT"
            tabIndex="0"
            onClick={() => history.push('/categories')}
          />
      }
    </form>
  )
}

function mapStateToProps (state) {
  return {
    postal: state.addressReducer,
    stage: state.modalReducer.stage,
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({
    controlCountry: controlCountry,
    controlCity: controlCity,
    controlAddress: controlAddress,
    checkCountry: checkCountry,
    checkCity: checkCity,
    checkAddress: checkAddress,

    setStage: setStage,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FormAddress);
