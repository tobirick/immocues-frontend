import {
  LOGIN_USER,
  SIGN_OUT_USER,
  SIGN_UP_USER,
  DELETE_USER,
  FETCH_ALL_USERS
} from "../constants/auth";
import { createReducer } from "../helpers/utils/reducerUtil";

const initialState = {
  currentUser: {},
  authenticated: false,
  users: []
};

export const loginUser = (state, payload) => {
  return {
    ...state,
    authenticated: true,
    currentUser: payload.user
  };
};

export const signOutUser = (state, payload) => {
  return {
    ...state,
    authenticated: false,
    currentUser: {}
  };
};

export const signUpUser = (state, payload) => {
  return {
    ...state,
    users: [...state.users, Object.assign({}, payload.user)]
  };
};

export const fetchAllUsers = (state, payload) => {
  return { ...state, users: payload.users };
};

export const deleteUser = (state, payload) => {
  return {
    ...state,
    users: [...state.users.filter(user => user._id !== payload.userId)]
  };
};

export const unsetUsers = (state, playoad) => {
  return {
    ...state,
    users: []
  };
};

export default createReducer(initialState, {
  [LOGIN_USER]: loginUser,
  [SIGN_OUT_USER]: signOutUser,
  [SIGN_UP_USER]: signUpUser,
  [FETCH_ALL_USERS]: fetchAllUsers,
  [DELETE_USER]: deleteUser
});
