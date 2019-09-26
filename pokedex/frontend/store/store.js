import { createStore } from 'redux';
import reducer from "../reducers/root_reducer";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from '../middleware/thunk';

const configureStore = () => {
  return createStore(reducer, applyMiddleware(thunk, logger));
}

export default configureStore; 