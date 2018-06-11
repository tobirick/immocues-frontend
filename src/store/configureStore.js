import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import objectsReducer from '../reducers/objects';
import customersReducer from '../reducers/customers';

export default () => {
    const store = createStore(
        combineReducers({
            objects: objectsReducer,
            customers: customersReducer
        }),
        compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
    );

    return store;
};
