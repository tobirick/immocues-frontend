import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as FormReducer } from "redux-form";
import thunk from "redux-thunk";
import objectsReducer from "../reducers/objects";
import customersReducer from "../reducers/customers";
import authReducer from "../reducers/auth";

export default () => {
  const store = createStore(
    combineReducers({
      objects: objectsReducer,
      customers: customersReducer,
      auth: authReducer,
      form: FormReducer
    }),
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  return store;
};
