import { LOGIN_USER, SIGN_OUT_USER } from "../constants/auth";
import api from "../api/api";
import setAuthorizationHeader from "../helpers/utils/setAuthorizationHeader";

export const login = user => {
  return {
    type: LOGIN_USER,
    payload: {
      user
    }
  };
};

export const startLogin = credentials => {
  return dispatch => {
    return api.user.login(credentials).then(response => {
      localStorage.immocuesJWT = response.token;
      setAuthorizationHeader(response.token);
      dispatch(login(response.user));
    });
  };
};

const signOut = () => {
  return { type: SIGN_OUT_USER };
};

export const startSignOut = () => {
  return dispatch => {
    localStorage.removeItem("immocuesJWT");
    setAuthorizationHeader();
    dispatch(signOut());
  };
};

export const validateToken = () => {
  return () => {
    return api.user
      .validateToken(localStorage.getItem("immocuesJWT"))
      .then(response => response);
  };
};
