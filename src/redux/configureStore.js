'use strict';

import { createStore } from "redux";
import createReducers from "@reducers";

const configureStore = () => {
  const store = createStore(createReducers());
  return store;
}

export { configureStore };