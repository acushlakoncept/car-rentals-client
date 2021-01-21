import { combineReducers } from 'redux';
import carItemReducer from './carItem/carItemReducer';
import carReducer from './cars/carReducer';
import userReducer from './users/userReducer';
import userRegisterReducer from './users/userRegisterReducer';

const rootReducer = combineReducers({
  cars: carReducer,
  carItem: carItemReducer,
  user: userReducer,
  signup: userRegisterReducer,
});

export default rootReducer;
