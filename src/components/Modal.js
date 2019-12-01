import React from 'react';
import { connect } from 'react-redux';

import '../styles/css/modal.css';

const Modal = ({formStage, children}) => {
  const setClassNameForPoint = (step) => {
    let pointClassName = `progressLine__point progressLine__point--${step}`;
    switch (step) {
      case "contacts" :
        pointClassName = pointClassName + ' progressLine__point--completed';
        break;

      case "address" :
        if ( formStage > 2 ) pointClassName = pointClassName + ' progressLine__point--completed';
        break;

      case "categories" :
        if ( formStage > 3 ) pointClassName = pointClassName + ' progressLine__point--completed';
        break;
    }

    return pointClassName;
  }

  return (
    <div className="overlay">
      <div className="overlay__logoWrapper">
        <div className="logo logo--rotate45" />
      </div>

      <div className="formWindow">
        <div className="formWindow__formHeader">
          <div className="formHeader">
            <div className="formHeader__progressLine progressLine">
              <div className={setClassNameForPoint("contacts")} />
              <div className={setClassNameForPoint("address")} />
              <div className={setClassNameForPoint("categories")} />
              <div className={setClassNameForPoint("success")} />
              <div
                className="progressLine__marker"
                style={formStage === 1
                  ? {}
                  : formStage === 2
                    ? {animation: "markerToAddress 500ms linear forwards"}
                    : formStage === 3
                      ? {animation: "markerToCategories 500ms linear forwards"}
                      : {animation: "markerToSuccess 500ms linear forwards"}
                }
              />
              <div className="progressLine__subscription progressLine__subscription--contacts">Contacts</div>
              <div
                className="progressLine__subscription progressLine__subscription--address"
                style={formStage >= 2 ? {color: '#bc8041'} : {}}
              >
                Address
              </div>
              <div
                className="progressLine__subscription progressLine__subscription--categories"
                style={formStage >= 3 ? {color: '#bc8041'} : {}}
              >
                Categories
              </div>
              <div
                className="progressLine__subscription progressLine__subscription--success"
                style={formStage >= 4 ? {color: '#bc8041'} : {}}
              >
                Success
              </div>
            </div>
            <div
              className="formHeader__doneLine"
              style={formStage === 1
                ? {}
                : formStage === 2
                  ? {animation: "doneLineToAddress 500ms linear forwards"}
                  : formStage === 3
                    ? {animation: "doneLineToCategories 500ms linear forwards"}
                    : {animation: "doneLineToSuccess 500ms linear forwards"}
              }
            />
          </div>
        </div>

        <div className="formWindow__main">
          {children}
        </div>

        <div className="formWindow__logoWrapper formWindow__logoWrapper--left">
          <div className="logo logo--rotate315" />
        </div>

        <div className="formWindow__logoWrapper formWindow__logoWrapper--bottom">
          <div className="logo logo--rotate45" />
        </div>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return { formStage: state.modalReducer.stage }
}

export default connect(mapStateToProps)(Modal);
