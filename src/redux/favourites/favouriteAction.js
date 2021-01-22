import axios from 'axios';
import {
  ADD_FAVORITE_REQUEST, ADD_FAVORITE_SUCCESS, ADD_FAVORITE_FAILURE,
} from './favouriteTypes';

export const addFavoritesRequest = () => ({
  type: ADD_FAVORITE_REQUEST,
});

export const addFavoritesSuccess = message => ({
  type: ADD_FAVORITE_SUCCESS,
  payload: message,
});

export const addFavoritesFailure = error => ({
  type: ADD_FAVORITE_FAILURE,
  payload: error,
});

// eslint-disable-next-line func-names
export const addFavourites = data => function (dispatch) {
  dispatch(addFavoritesRequest());
  axios
    .post('/favourites', data)
    .then(response => {
      const { data } = response;
      dispatch(addFavoritesSuccess(data.message));
    })
    .catch(error => {
      dispatch(addFavoritesFailure(error.response.data.error));
    });
};
