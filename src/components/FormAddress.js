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
    <form className="form"
      // action=""
      // method="POST"
      // encType="text/plain"
    >
      <label className="form__label" htmlFor="country">
        country
      </label>
      <div className="form__inputWrap">
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

        {countryStatus === 200
          && <img className="form__statusImg" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBTdmcgVmVjdG9yIElj%0D%0Ab25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiAtLT4KPCFET0NUWVBFIHN2%0D%0AZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3Jh%0D%0AcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJo%0D%0AdHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3Jn%0D%0ALzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBlbmFi%0D%0AbGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZp%0D%0AbGw9IiMwMGZmMDAiPgo8bWV0YWRhdGE+IFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9u%0D%0AbGluZXdlYmZvbnRzLmNvbS9pY29uIDwvbWV0YWRhdGE+CjxnPjxwYXRoIGQ9Ik01MDAsMTBDMjI5%0D%0ALjMsMTAsMTAsMjI5LjQsMTAsNTAwYzAsMjcwLjYsMjE5LjQsNDkwLDQ5MCw0OTBjMjcwLjYsMCw0%0D%0AOTAtMjE5LjQsNDkwLTQ5MEM5OTAsMjI5LjQsNzcwLjYsMTAsNTAwLDEweiBNODM4LjEsMzg2LjZM%0D%0ANDYwLjEsNzU0LjhjLTkuNSw5LjItMjQuOSw5LjItMzQuNCwwbC03LjYtNy41bDAsMGwtOC4yLThs%0D%0ALTM1LjctMzQuN2MtMC4zLTAuMi0wLjMtMC41LTAuNS0wLjhMMjEwLjMsNTQzLjRjLTkuNS05LjMt%0D%0AOS41LTI0LjIsMC0zMy41bDUxLjUtNTAuMmM5LjUtOS4zLDI0LjktOS4zLDM0LjQsMGwxNDcsMTQ0%0D%0ALjNsMzA5LTMwMS4xYzkuNS05LjMsMjQuOS05LjMsMzQuNCwwbDUxLjYsNTAuMkM4NDcuNiwzNjIu%0D%0AMyw4NDcuNiwzNzcuMyw4MzguMSwzODYuNnoiLz48L2c+Cjwvc3ZnPgo=" alt=""/>}

        {countryStatus === 400
          && <img className="form__statusImg" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBTdmcgVmVjdG9yIElj%0D%0Ab25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiAtLT4KPCFET0NUWVBFIHN2%0D%0AZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3Jh%0D%0AcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJo%0D%0AdHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3Jn%0D%0ALzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBlbmFi%0D%0AbGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZp%0D%0AbGw9IiNmZjAwMDAiPgo8bWV0YWRhdGE+IFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9u%0D%0AbGluZXdlYmZvbnRzLmNvbS9pY29uIDwvbWV0YWRhdGE+CjxnPjxwYXRoIGQ9Ik01MDAsMTBDMjI5%0D%0ALjMsMTAsMTAsMjI5LjUsMTAsNTAwYzAsMjcwLjcsMjE5LjQsNDkwLDQ5MCw0OTBzNDkwLTIxOS40%0D%0ALDQ5MC00OTBTNzcwLjYsMTAsNTAwLDEweiBNNjAwLjgsNTAwbDE3OC42LDE3OC42TDY3OC42LDc3%0D%0AOS40TDUwMCw2MDAuOEwzMjEuNCw3NzkuNEwyMjAuNyw2NzguNkwzOTkuMiw1MDBMMjIwLjcsMzIx%0D%0ALjVsMTAwLjgtMTAwLjhMNTAwLDM5OS4ybDE3OC42LTE3OC41bDEwMC44LDEwMC44TDYwMC44LDUw%0D%0AMHoiLz48L2c+Cjwvc3ZnPgo=" alt=""/>}
      </div>

      <label className="form__label" htmlFor="city">
        city
      </label>
      <div className="form__inputWrap">
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

        {cityStatus === 200
          && <img className="form__statusImg" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBTdmcgVmVjdG9yIElj%0D%0Ab25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiAtLT4KPCFET0NUWVBFIHN2%0D%0AZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3Jh%0D%0AcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJo%0D%0AdHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3Jn%0D%0ALzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBlbmFi%0D%0AbGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZp%0D%0AbGw9IiMwMGZmMDAiPgo8bWV0YWRhdGE+IFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9u%0D%0AbGluZXdlYmZvbnRzLmNvbS9pY29uIDwvbWV0YWRhdGE+CjxnPjxwYXRoIGQ9Ik01MDAsMTBDMjI5%0D%0ALjMsMTAsMTAsMjI5LjQsMTAsNTAwYzAsMjcwLjYsMjE5LjQsNDkwLDQ5MCw0OTBjMjcwLjYsMCw0%0D%0AOTAtMjE5LjQsNDkwLTQ5MEM5OTAsMjI5LjQsNzcwLjYsMTAsNTAwLDEweiBNODM4LjEsMzg2LjZM%0D%0ANDYwLjEsNzU0LjhjLTkuNSw5LjItMjQuOSw5LjItMzQuNCwwbC03LjYtNy41bDAsMGwtOC4yLThs%0D%0ALTM1LjctMzQuN2MtMC4zLTAuMi0wLjMtMC41LTAuNS0wLjhMMjEwLjMsNTQzLjRjLTkuNS05LjMt%0D%0AOS41LTI0LjIsMC0zMy41bDUxLjUtNTAuMmM5LjUtOS4zLDI0LjktOS4zLDM0LjQsMGwxNDcsMTQ0%0D%0ALjNsMzA5LTMwMS4xYzkuNS05LjMsMjQuOS05LjMsMzQuNCwwbDUxLjYsNTAuMkM4NDcuNiwzNjIu%0D%0AMyw4NDcuNiwzNzcuMyw4MzguMSwzODYuNnoiLz48L2c+Cjwvc3ZnPgo=" alt=""/>}

        {cityStatus === 400
          && <img className="form__statusImg" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBTdmcgVmVjdG9yIElj%0D%0Ab25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiAtLT4KPCFET0NUWVBFIHN2%0D%0AZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3Jh%0D%0AcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJo%0D%0AdHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3Jn%0D%0ALzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBlbmFi%0D%0AbGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZp%0D%0AbGw9IiNmZjAwMDAiPgo8bWV0YWRhdGE+IFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9u%0D%0AbGluZXdlYmZvbnRzLmNvbS9pY29uIDwvbWV0YWRhdGE+CjxnPjxwYXRoIGQ9Ik01MDAsMTBDMjI5%0D%0ALjMsMTAsMTAsMjI5LjUsMTAsNTAwYzAsMjcwLjcsMjE5LjQsNDkwLDQ5MCw0OTBzNDkwLTIxOS40%0D%0ALDQ5MC00OTBTNzcwLjYsMTAsNTAwLDEweiBNNjAwLjgsNTAwbDE3OC42LDE3OC42TDY3OC42LDc3%0D%0AOS40TDUwMCw2MDAuOEwzMjEuNCw3NzkuNEwyMjAuNyw2NzguNkwzOTkuMiw1MDBMMjIwLjcsMzIx%0D%0ALjVsMTAwLjgtMTAwLjhMNTAwLDM5OS4ybDE3OC42LTE3OC41bDEwMC44LDEwMC44TDYwMC44LDUw%0D%0AMHoiLz48L2c+Cjwvc3ZnPgo=" alt=""/>}
      </div>

      <label className="form__label" htmlFor="address">
        address
      </label>
      <div className="form__inputWrap">
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

        {addressStatus === 200
          && <img className="form__statusImg" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBTdmcgVmVjdG9yIElj%0D%0Ab25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiAtLT4KPCFET0NUWVBFIHN2%0D%0AZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3Jh%0D%0AcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJo%0D%0AdHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3Jn%0D%0ALzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBlbmFi%0D%0AbGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZp%0D%0AbGw9IiMwMGZmMDAiPgo8bWV0YWRhdGE+IFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9u%0D%0AbGluZXdlYmZvbnRzLmNvbS9pY29uIDwvbWV0YWRhdGE+CjxnPjxwYXRoIGQ9Ik01MDAsMTBDMjI5%0D%0ALjMsMTAsMTAsMjI5LjQsMTAsNTAwYzAsMjcwLjYsMjE5LjQsNDkwLDQ5MCw0OTBjMjcwLjYsMCw0%0D%0AOTAtMjE5LjQsNDkwLTQ5MEM5OTAsMjI5LjQsNzcwLjYsMTAsNTAwLDEweiBNODM4LjEsMzg2LjZM%0D%0ANDYwLjEsNzU0LjhjLTkuNSw5LjItMjQuOSw5LjItMzQuNCwwbC03LjYtNy41bDAsMGwtOC4yLThs%0D%0ALTM1LjctMzQuN2MtMC4zLTAuMi0wLjMtMC41LTAuNS0wLjhMMjEwLjMsNTQzLjRjLTkuNS05LjMt%0D%0AOS41LTI0LjIsMC0zMy41bDUxLjUtNTAuMmM5LjUtOS4zLDI0LjktOS4zLDM0LjQsMGwxNDcsMTQ0%0D%0ALjNsMzA5LTMwMS4xYzkuNS05LjMsMjQuOS05LjMsMzQuNCwwbDUxLjYsNTAuMkM4NDcuNiwzNjIu%0D%0AMyw4NDcuNiwzNzcuMyw4MzguMSwzODYuNnoiLz48L2c+Cjwvc3ZnPgo=" alt=""/>}

        {addressStatus === 400
          && <img className="form__statusImg" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBTdmcgVmVjdG9yIElj%0D%0Ab25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiAtLT4KPCFET0NUWVBFIHN2%0D%0AZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3Jh%0D%0AcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJo%0D%0AdHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3Jn%0D%0ALzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBlbmFi%0D%0AbGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZp%0D%0AbGw9IiNmZjAwMDAiPgo8bWV0YWRhdGE+IFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9u%0D%0AbGluZXdlYmZvbnRzLmNvbS9pY29uIDwvbWV0YWRhdGE+CjxnPjxwYXRoIGQ9Ik01MDAsMTBDMjI5%0D%0ALjMsMTAsMTAsMjI5LjUsMTAsNTAwYzAsMjcwLjcsMjE5LjQsNDkwLDQ5MCw0OTBzNDkwLTIxOS40%0D%0ALDQ5MC00OTBTNzcwLjYsMTAsNTAwLDEweiBNNjAwLjgsNTAwbDE3OC42LDE3OC42TDY3OC42LDc3%0D%0AOS40TDUwMCw2MDAuOEwzMjEuNCw3NzkuNEwyMjAuNyw2NzguNkwzOTkuMiw1MDBMMjIwLjcsMzIx%0D%0ALjVsMTAwLjgtMTAwLjhMNTAwLDM5OS4ybDE3OC42LTE3OC41bDEwMC44LDEwMC44TDYwMC44LDUw%0D%0AMHoiLz48L2c+Cjwvc3ZnPgo=" alt=""/>}
      </div>

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
