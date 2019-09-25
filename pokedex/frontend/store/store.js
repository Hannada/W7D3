import { createStore } from 'redux';
import reducer from "../reducers/root_reducer";
import applyMiddleware from "redux";
import logger from "redux-logger";

const configureStore = createStore(reducer, applyMiddleware(logger));


export default configureStore; 