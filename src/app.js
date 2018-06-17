import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import decode from "jwt-decode";
import { login, validateToken } from "./actions/auth";
import setAuthorizationHeader from "./helpers/utils/setAuthorizationHeader";

import "./styles/styles.scss";

const store = configureStore();

if (localStorage.immocuesJWT) {
  store.dispatch(validateToken(localStorage.immocuesJWT)).then(() => {
    const payload = decode(localStorage.immocuesJWT);
    const user = { _id: payload._id, email: payload.email };
    setAuthorizationHeader(localStorage.immocuesJWT);
    store.dispatch(login(user));
  });
}

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("app")
);
