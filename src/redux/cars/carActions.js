import axios from 'axios';
import {
  FETCH_CARS_SUCCESS, FETCH_CARS_REQUEST, FETCH_CARS_FAILURE,
} from './carTypes';

export const fetchCarsRequest = () => ({
  type: FETCH_CARS_REQUEST,
});

export const fetchCarsSuccess = cars => ({
  type: FETCH_CARS_SUCCESS,
  payload: cars,
});

export const fetchCarsFailure = error => ({
  type: FETCH_CARS_FAILURE,
  payload: error,
});

// eslint-disable-next-line func-names
export const fetchCars = () => function (dispatch) {
  dispatch(fetchCarsRequest());
  axios
    .get('/cars', { mode: 'cors' })
    .then(response => {
      const { data } = response;
      dispatch(fetchCarsSuccess(data));
    })
    .catch(error => {
      if (!error.status) {
        dispatch(fetchCarsFailure('Error connecting to API Server'));
      } else {
        dispatch(fetchCarsFailure(error.response.data.error));
      }
    });
};
