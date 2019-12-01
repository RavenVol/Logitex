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
    <form className="form"
      // action=""
      // method="POST"
      // encType="text/plain"
    >
      <label className="form__label" htmlFor="email">
        email
      </label>
      <div className="form__inputWrap">
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

        {mailStatus === 200
          && <img className="form__statusImg" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBTdmcgVmVjdG9yIElj%0D%0Ab25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiAtLT4KPCFET0NUWVBFIHN2%0D%0AZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3Jh%0D%0AcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJo%0D%0AdHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3Jn%0D%0ALzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBlbmFi%0D%0AbGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZp%0D%0AbGw9IiMwMGZmMDAiPgo8bWV0YWRhdGE+IFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9u%0D%0AbGluZXdlYmZvbnRzLmNvbS9pY29uIDwvbWV0YWRhdGE+CjxnPjxwYXRoIGQ9Ik01MDAsMTBDMjI5%0D%0ALjMsMTAsMTAsMjI5LjQsMTAsNTAwYzAsMjcwLjYsMjE5LjQsNDkwLDQ5MCw0OTBjMjcwLjYsMCw0%0D%0AOTAtMjE5LjQsNDkwLTQ5MEM5OTAsMjI5LjQsNzcwLjYsMTAsNTAwLDEweiBNODM4LjEsMzg2LjZM%0D%0ANDYwLjEsNzU0LjhjLTkuNSw5LjItMjQuOSw5LjItMzQuNCwwbC03LjYtNy41bDAsMGwtOC4yLThs%0D%0ALTM1LjctMzQuN2MtMC4zLTAuMi0wLjMtMC41LTAuNS0wLjhMMjEwLjMsNTQzLjRjLTkuNS05LjMt%0D%0AOS41LTI0LjIsMC0zMy41bDUxLjUtNTAuMmM5LjUtOS4zLDI0LjktOS4zLDM0LjQsMGwxNDcsMTQ0%0D%0ALjNsMzA5LTMwMS4xYzkuNS05LjMsMjQuOS05LjMsMzQuNCwwbDUxLjYsNTAuMkM4NDcuNiwzNjIu%0D%0AMyw4NDcuNiwzNzcuMyw4MzguMSwzODYuNnoiLz48L2c+Cjwvc3ZnPgo=" alt=""/>}

        {mailStatus === 400
          && <img className="form__statusImg" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBTdmcgVmVjdG9yIElj%0D%0Ab25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiAtLT4KPCFET0NUWVBFIHN2%0D%0AZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3Jh%0D%0AcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJo%0D%0AdHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3Jn%0D%0ALzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBlbmFi%0D%0AbGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZp%0D%0AbGw9IiNmZjAwMDAiPgo8bWV0YWRhdGE+IFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9u%0D%0AbGluZXdlYmZvbnRzLmNvbS9pY29uIDwvbWV0YWRhdGE+CjxnPjxwYXRoIGQ9Ik01MDAsMTBDMjI5%0D%0ALjMsMTAsMTAsMjI5LjUsMTAsNTAwYzAsMjcwLjcsMjE5LjQsNDkwLDQ5MCw0OTBzNDkwLTIxOS40%0D%0ALDQ5MC00OTBTNzcwLjYsMTAsNTAwLDEweiBNNjAwLjgsNTAwbDE3OC42LDE3OC42TDY3OC42LDc3%0D%0AOS40TDUwMCw2MDAuOEwzMjEuNCw3NzkuNEwyMjAuNyw2NzguNkwzOTkuMiw1MDBMMjIwLjcsMzIx%0D%0ALjVsMTAwLjgtMTAwLjhMNTAwLDM5OS4ybDE3OC42LTE3OC41bDEwMC44LDEwMC44TDYwMC44LDUw%0D%0AMHoiLz48L2c+Cjwvc3ZnPgo=" alt=""/>}
      </div>

      <label className="form__label" htmlFor="pwd">
        password
      </label>
      <div className="form__inputWrap">
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

        {passwordStatus === 200
          && <img className="form__statusImg" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBTdmcgVmVjdG9yIElj%0D%0Ab25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiAtLT4KPCFET0NUWVBFIHN2%0D%0AZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3Jh%0D%0AcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJo%0D%0AdHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3Jn%0D%0ALzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBlbmFi%0D%0AbGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZp%0D%0AbGw9IiMwMGZmMDAiPgo8bWV0YWRhdGE+IFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9u%0D%0AbGluZXdlYmZvbnRzLmNvbS9pY29uIDwvbWV0YWRhdGE+CjxnPjxwYXRoIGQ9Ik01MDAsMTBDMjI5%0D%0ALjMsMTAsMTAsMjI5LjQsMTAsNTAwYzAsMjcwLjYsMjE5LjQsNDkwLDQ5MCw0OTBjMjcwLjYsMCw0%0D%0AOTAtMjE5LjQsNDkwLTQ5MEM5OTAsMjI5LjQsNzcwLjYsMTAsNTAwLDEweiBNODM4LjEsMzg2LjZM%0D%0ANDYwLjEsNzU0LjhjLTkuNSw5LjItMjQuOSw5LjItMzQuNCwwbC03LjYtNy41bDAsMGwtOC4yLThs%0D%0ALTM1LjctMzQuN2MtMC4zLTAuMi0wLjMtMC41LTAuNS0wLjhMMjEwLjMsNTQzLjRjLTkuNS05LjMt%0D%0AOS41LTI0LjIsMC0zMy41bDUxLjUtNTAuMmM5LjUtOS4zLDI0LjktOS4zLDM0LjQsMGwxNDcsMTQ0%0D%0ALjNsMzA5LTMwMS4xYzkuNS05LjMsMjQuOS05LjMsMzQuNCwwbDUxLjYsNTAuMkM4NDcuNiwzNjIu%0D%0AMyw4NDcuNiwzNzcuMyw4MzguMSwzODYuNnoiLz48L2c+Cjwvc3ZnPgo=" alt=""/>}

        {passwordStatus === 400
          && <img className="form__statusImg" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBTdmcgVmVjdG9yIElj%0D%0Ab25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiAtLT4KPCFET0NUWVBFIHN2%0D%0AZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3Jh%0D%0AcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJo%0D%0AdHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3Jn%0D%0ALzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBlbmFi%0D%0AbGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZp%0D%0AbGw9IiNmZjAwMDAiPgo8bWV0YWRhdGE+IFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9u%0D%0AbGluZXdlYmZvbnRzLmNvbS9pY29uIDwvbWV0YWRhdGE+CjxnPjxwYXRoIGQ9Ik01MDAsMTBDMjI5%0D%0ALjMsMTAsMTAsMjI5LjUsMTAsNTAwYzAsMjcwLjcsMjE5LjQsNDkwLDQ5MCw0OTBzNDkwLTIxOS40%0D%0ALDQ5MC00OTBTNzcwLjYsMTAsNTAwLDEweiBNNjAwLjgsNTAwbDE3OC42LDE3OC42TDY3OC42LDc3%0D%0AOS40TDUwMCw2MDAuOEwzMjEuNCw3NzkuNEwyMjAuNyw2NzguNkwzOTkuMiw1MDBMMjIwLjcsMzIx%0D%0ALjVsMTAwLjgtMTAwLjhMNTAwLDM5OS4ybDE3OC42LTE3OC41bDEwMC44LDEwMC44TDYwMC44LDUw%0D%0AMHoiLz48L2c+Cjwvc3ZnPgo=" alt=""/>}
      </div>

      <label className="form__label" htmlFor="confpwd">
        password confirm
      </label>
      <div className="form__inputWrap">
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

        {confirmStatus === 200
          && <img className="form__statusImg" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBTdmcgVmVjdG9yIElj%0D%0Ab25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiAtLT4KPCFET0NUWVBFIHN2%0D%0AZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3Jh%0D%0AcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJo%0D%0AdHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3Jn%0D%0ALzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBlbmFi%0D%0AbGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZp%0D%0AbGw9IiMwMGZmMDAiPgo8bWV0YWRhdGE+IFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9u%0D%0AbGluZXdlYmZvbnRzLmNvbS9pY29uIDwvbWV0YWRhdGE+CjxnPjxwYXRoIGQ9Ik01MDAsMTBDMjI5%0D%0ALjMsMTAsMTAsMjI5LjQsMTAsNTAwYzAsMjcwLjYsMjE5LjQsNDkwLDQ5MCw0OTBjMjcwLjYsMCw0%0D%0AOTAtMjE5LjQsNDkwLTQ5MEM5OTAsMjI5LjQsNzcwLjYsMTAsNTAwLDEweiBNODM4LjEsMzg2LjZM%0D%0ANDYwLjEsNzU0LjhjLTkuNSw5LjItMjQuOSw5LjItMzQuNCwwbC03LjYtNy41bDAsMGwtOC4yLThs%0D%0ALTM1LjctMzQuN2MtMC4zLTAuMi0wLjMtMC41LTAuNS0wLjhMMjEwLjMsNTQzLjRjLTkuNS05LjMt%0D%0AOS41LTI0LjIsMC0zMy41bDUxLjUtNTAuMmM5LjUtOS4zLDI0LjktOS4zLDM0LjQsMGwxNDcsMTQ0%0D%0ALjNsMzA5LTMwMS4xYzkuNS05LjMsMjQuOS05LjMsMzQuNCwwbDUxLjYsNTAuMkM4NDcuNiwzNjIu%0D%0AMyw4NDcuNiwzNzcuMyw4MzguMSwzODYuNnoiLz48L2c+Cjwvc3ZnPgo=" alt=""/>}

        {confirmStatus === 400
          && <img className="form__statusImg" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBTdmcgVmVjdG9yIElj%0D%0Ab25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiAtLT4KPCFET0NUWVBFIHN2%0D%0AZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3Jh%0D%0AcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJo%0D%0AdHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3Jn%0D%0ALzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBlbmFi%0D%0AbGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZp%0D%0AbGw9IiNmZjAwMDAiPgo8bWV0YWRhdGE+IFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9u%0D%0AbGluZXdlYmZvbnRzLmNvbS9pY29uIDwvbWV0YWRhdGE+CjxnPjxwYXRoIGQ9Ik01MDAsMTBDMjI5%0D%0ALjMsMTAsMTAsMjI5LjUsMTAsNTAwYzAsMjcwLjcsMjE5LjQsNDkwLDQ5MCw0OTBzNDkwLTIxOS40%0D%0ALDQ5MC00OTBTNzcwLjYsMTAsNTAwLDEweiBNNjAwLjgsNTAwbDE3OC42LDE3OC42TDY3OC42LDc3%0D%0AOS40TDUwMCw2MDAuOEwzMjEuNCw3NzkuNEwyMjAuNyw2NzguNkwzOTkuMiw1MDBMMjIwLjcsMzIx%0D%0ALjVsMTAwLjgtMTAwLjhMNTAwLDM5OS4ybDE3OC42LTE3OC41bDEwMC44LDEwMC44TDYwMC44LDUw%0D%0AMHoiLz48L2c+Cjwvc3ZnPgo=" alt=""/>}
      </div>

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
