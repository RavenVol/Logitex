import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { controlCategory } from '../actions/categoryFormActions';
import { setStage } from '../actions/modalActions';
import { categoriesList } from '../data/categoriesList';

import '../styles/css/form.css';

const FormCategories = ({categories, controlCategory, stage, setStage, history }) => {

  const { category1, category2, category3 } = categories;

  stage !== 3 && setStage(3);

  return (
    <form className="form"
      // action=""
      // method="POST"
      // encType="text/plain"
    >
      <label className="form__label" htmlFor="category1">
        category 1
      </label>
      <div className="form__selectWrap">
        <select
          id="category1"
          className="form__select"
          value={category1}
          onChange={(event) => controlCategory("category1", event.target.value)}
        >
          <option value="" hidden disabled>Select category:</option>
          {categoriesList.map(category => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>
      </div>

      <label className="form__label" htmlFor="category2">
        category 2
      </label>
      <div className="form__selectWrap">
        <select
          id="category2"
          className="form__select"
          value={category2}
          onChange={(event) => controlCategory("category2", event.target.value)}
        >
          <option value="" hidden disabled>Select category:</option>
          {categoriesList.map(category => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>
      </div>

      <label className="form__label" htmlFor="category3">
        category 3
      </label>
      <div className="form__selectWrap">
        <select
          id="category3"
          className="form__select"
          value={category3}
          onChange={(event) => controlCategory("category3", event.target.value)}
        >
          <option value="" hidden disabled>Select category:</option>
          {categoriesList.map(category => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>
      </div>

      <input
        className="form__button"
        type="button"
        value="NEXT"
        tabIndex="0"
        onClick={() => history.push('/success')}
      />
    </form>
  )
}

function mapStateToProps (state) {
  return {
    categories: state.categoryReducer,
    stage: state.modalReducer.stage,
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({
    controlCategory: controlCategory,
    setStage: setStage,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FormCategories);
