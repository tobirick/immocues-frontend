import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import decode from "jwt-decode";
import { login, validateToken, startSignOut } from "./actions/auth";
import setAuthorizationHeader from "./helpers/utils/setAuthorizationHeader";

import { startFetchAllCustomers, unsetCustomers } from "./actions/customers";
import { startFetchAllUsers, unsetUsers } from "./actions/auth";

import "./styles/styles.scss";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

if (localStorage.immocuesJWT) {
  store
    .dispatch(validateToken(localStorage.immocuesJWT))
    .then(() => {
      const payload = decode(localStorage.immocuesJWT);
      const user = {
        userId: payload.userId,
        email: payload.email,
        isAdmin: payload.isAdmin,
        firstName: payload.firstName,
        lastName: payload.lastName
      };
      setAuthorizationHeader(localStorage.immocuesJWT);
      store.dispatch(login(user));
      store.dispatch(startFetchAllCustomers());
      if (user.isAdmin) {
        store.dispatch(startFetchAllUsers());
      }
      renderApp();
    })
    .catch(() => {
      store.dispatch(startSignOut());
      store.dispatch(unsetCustomers());
      store.dispatch(unsetUsers());
      renderApp();
    });
} else {
  store.dispatch(startSignOut());
  store.dispatch(unsetCustomers());
  store.dispatch(unsetUsers());
  renderApp();
}
