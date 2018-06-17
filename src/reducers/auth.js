import { LOGIN_USER, SIGN_OUT_USER } from "../constants/auth";
import { createReducer } from "../helpers/utils/reducerUtil";

const initialState = {
  currentUser: {},
  authenticated: false
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

export default createReducer(initialState, {
  [LOGIN_USER]: loginUser,
  [SIGN_OUT_USER]: signOutUser
});
