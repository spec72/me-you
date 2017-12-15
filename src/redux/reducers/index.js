'use strict';

import { combineReducers } from "redux";

import usersReducer from "./users";
import youReducer from "./you";
import { createReducer } from "reduxsauce";

const createReducers = () => (combineReducers({
  usersReducer,
  youReducer,
}));

export default createReducers;