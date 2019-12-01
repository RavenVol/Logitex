import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setStage } from '../actions/modalActions';

import '../styles/css/success.css';

const FormSuccess = ({stage, setStage }) => {

  stage !== 4 && setStage(4);

  return (
    <div className="success">
      <h2 className="success__header">Success!</h2>
      <p className="success__message">Your account was successfuly regestered.</p>
      <p className="success__message">Please wait for account approval.</p>
      <p className="success__message">It can take up to 24 hours.</p>
      <p className="success__info m15">Have questions?</p>
      <p className="success__info">
        Contact&nbsp;
        <a className="success__link" href="mailto:info@site.com">info@site.com</a>
      </p>
      <input
        className="success__button"
        type="button"
        value="DONE"
        tabIndex="0"
      />
    </div>
  )
}

function mapStateToProps (state) {
  return {
    stage: state.modalReducer.stage,
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({
    setStage: setStage,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FormSuccess);
