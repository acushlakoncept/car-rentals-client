import axios from 'axios';
import {
  ADD_FAVORITE_REQUEST, ADD_FAVORITE_SUCCESS, ADD_FAVORITE_FAILURE,
} from './favouriteTypes';

export const fetchFavoritesRequest = () => ({
  type: ADD_FAVORITE_REQUEST,
});

export const fetchFavoritesSuccess = message => ({
  type: ADD_FAVORITE_SUCCESS,
  payload: message,
});

export const fetchFavoritesFailure = error => ({
  type: ADD_FAVORITE_FAILURE,
  payload: error,
});

// eslint-disable-next-line func-names
export const addFavourites = data => function (dispatch) {
  dispatch(fetchFavoritesRequest());
  axios
    .post('/favourites', data)
    .then(response => {
      const { data } = response;
      dispatch(fetchFavoritesSuccess(data.message));
    })
    .catch(error => {
      dispatch(fetchFavoritesFailure(error.response.data.error));
    });
};
