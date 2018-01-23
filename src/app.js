import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import './styles/styles.scss';

const store = configureStore();

ReactDOM.render(
   <Provider store={store}>
      <AppRouter />
   </Provider>,
   document.getElementById('app')
);
