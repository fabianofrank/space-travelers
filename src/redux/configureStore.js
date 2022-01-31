import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import Rockets from './rockets/rockets';
import Missions from './missions/missions';

const reducer = combineReducers({
  Rockets,
  Missions,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
