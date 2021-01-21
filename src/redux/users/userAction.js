import axios from 'axios';
import {
  LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,
  REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS,
} from './userTypes';

export const userLoginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const userLoginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const userLoginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const userRegisterRequest = () => ({
  type: REGISTER_REQUEST,
});

export const userRegisterSuccess = user => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

export const userRegisterFailure = error => ({
  type: REGISTER_FAILURE,
  payload: error,
});

// eslint-disable-next-line func-names
export const loginUser = data => function (dispatch) {
  dispatch(userLoginRequest());
  axios
    .post('/login', data)
    .then(response => {
      const { data } = response;
      dispatch(userLoginSuccess(data));
    })
    .catch(e => {
      dispatch(userLoginFailure(e.error));
    });
};

// eslint-disable-next-line func-names
export const registerUser = data => function (dispatch) {
  dispatch(userRegisterRequest());
  axios
    .post('/register', data)
    .then(response => {
      const { data } = response;
      dispatch(userRegisterSuccess(data));
    })
    .catch(e => {
      dispatch(userRegisterFailure(e.error));
    });
};
