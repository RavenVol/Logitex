import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { controlMail, controlPassword, controlConfirm,
  checkMail, checkPassword, checkConfirm } from '../actions/contactFormActions';
import { setStage } from '../actions/modalActions';

import '../styles/css/form.css';

const FormContacts = ({contacts, stage, setStage,
  controlMail, controlPassword, controlConfirm,
  checkMail, checkPassword, checkConfirm, history }) => {

  const { mail, password, confirm, mailStatus, passwordStatus, confirmStatus } = contacts;

  stage !== 1 && setStage(1);

  return (
    <form className="form">
      <label className="form__label" htmlFor="email">
        email
      </label>
      <input
        id="email"
        className="form__input"
        type="email"
        placeholder="somebody@example.com"
        value={mail}
        autoFocus
        required
        onChange={(event) => controlMail(event.target.value)}
        onFocus={() => checkMail(true)}
        onBlur={() => checkMail()}
      />

      <label className="form__label" htmlFor="pwd">
        password
      </label>
      <input
        id="password"
        className="form__input"
        type="password"
        placeholder="6 symbols minimum"
        value={password}
        required
        onChange={(event) => controlPassword(event.target.value)}
        onFocus={() => checkPassword(true)}
        onBlur={() => checkPassword()}
      />

      <label className="form__label" htmlFor="confpwd">
        password confirm
      </label>
      <input
        id="confpwd"
        className="form__input"
        type="password"
        placeholder="Retype your password"
        value={confirm}
        required
        onChange={(event) => {controlConfirm(event.target.value); checkConfirm(); }}
        onFocus={() => checkConfirm(true)}
        onBlur={() => checkConfirm()}
      />

      {mailStatus !== 200 || passwordStatus !== 200 || confirmStatus !== 200
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
            onClick={() => history.push('/address')}
          />
      }
    </form>
  )
}

function mapStateToProps (state) {
  return {
    contacts: state.contactsReducer,
    stage: state.modalReducer.stage,
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({
    controlMail: controlMail,
    controlPassword: controlPassword,
    controlConfirm: controlConfirm,
    checkMail: checkMail,
    checkPassword: checkPassword,
    checkConfirm: checkConfirm,

    setStage: setStage,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FormContacts);
