import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import objectsReducer from '../reducers/objects';
import customersReducer from '../reducers/customers';

const composeEnhancers =
   window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default () => {
   const store = createStore(
      combineReducers({
         objects: objectsReducer,
         customers: customersReducer
      }),
      composeEnhancers(applyMiddleware(thunk))
   );

   return store;
};
