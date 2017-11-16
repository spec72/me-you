'use strict';

import { createReducer } from 'reduxsauce';
import Types from '@actions/actionTypes';

const initialState = {
  users: null,
};

const profileCreated = (state= initialState, action) => ({
  ...state,
  user: action.payload.user
});

const actionHandlers = {
  [Types.PROFILE_CREATED]: profileCreated,
};

export default createReducer(initialState, actionHandlers);

