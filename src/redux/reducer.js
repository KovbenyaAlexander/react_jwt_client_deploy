import {
  SET_USER,
  SET_AUTH,
  SET_LOADING_STATUS,
  SET_USERS_DATA,
} from "./actions/actionsTypes";

const initialState = {
  isAuth: null,
  user: null,
  isLoading: false,
  usersData: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, isAuth: action.payload };

    case SET_USER:
      return { ...state, user: action.payload };

    case SET_LOADING_STATUS:
      return { ...state, isLoading: action.payload };

    case SET_USERS_DATA:
      return { ...state, usersData: action.payload };
    default:
      return state;
  }
}
