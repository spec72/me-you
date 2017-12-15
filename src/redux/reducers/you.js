'use strict';

import { createReducer } from 'reduxsauce';
import Types from '@actions/actionTypes';

const initialState = {
  image: "",
};

const imageSet = (state= initialState, action) => ({
  ...state,
  image: action.payload.image,
});

const affirmationSet = (state = initialState, action) => ({
  ...state,
  affirmation: action.payload.affirmation,
});

const actionHandlers = {
  [Types.IMAGE_SET]: imageSet,
  [Types.AFFIRMATION_SET]: affirmationSet
};

export default createReducer(initialState, actionHandlers);

