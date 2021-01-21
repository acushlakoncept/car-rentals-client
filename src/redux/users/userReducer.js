import {
  LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,
  REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS,
} from './userTypes';

const initialState = {
  loading: false,
  user: {},
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST || REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS || REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: '',
      };
    case LOGIN_FAILURE || REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        user: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
