import { combineReducers } from 'redux';
import carItemReducer from './carItem/carItemReducer';
import carReducer from './cars/carReducer';
import userReducer from './users/userReducer';

const rootReducer = combineReducers({
  cars: carReducer,
  carItem: carItemReducer,
  user: userReducer,
});

export default rootReducer;
