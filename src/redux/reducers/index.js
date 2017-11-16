'use strict';

import { combineReducers } from "redux";

import users from "./users";
import { createReducer } from "reduxsauce";

const appReducer = {
  users,
};

const createReducers = () => (combineReducers(appReducer));

export default createReducers;