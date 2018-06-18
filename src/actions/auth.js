import {
  LOGIN_USER,
  SIGN_OUT_USER,
  SIGN_UP_USER,
  FETCH_ALL_USERS,
  DELETE_USER
} from "../constants/auth";
import api from "../api/api";
import setAuthorizationHeader from "../helpers/utils/setAuthorizationHeader";
import { unsetCustomers, startFetchAllCustomers } from "./customers";

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
      dispatch(startFetchAllCustomers());
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
    dispatch(unsetCustomers());
  };
};

export const validateToken = () => {
  return () => {
    return api.user
      .validateToken(localStorage.getItem("immocuesJWT"))
      .then(response => response);
  };
};

const signUp = user => {
  return {
    type: SIGN_UP_USER,
    payload: {
      user
    }
  };
};

export const startSignUp = user => {
  return dispatch => {
    return api.user.signUp(user).then(response => {
      dispatch(signUp(response.user));
    });
  };
};

export const deleteCustomer = userId => {
  return { type: DELETE_CUSTOMER, payload: { userId } };
};

const fetchAllUsers = users => {
  return { type: FETCH_ALL_USERS, payload: { users } };
};

export const startFetchAllUsers = () => {
  return dispatch => {
    return api.users.fetchAll().then(usersData => {
      const users = [];
      usersData.forEach(user => {
        users.push(user);
      });
      dispatch(fetchAllUsers(users));
    });
  };
};
