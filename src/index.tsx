import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.scss';

import configureStore from "./Store/configureStore";
import AppRouter from './Router/AppRouter';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter/>
  </Provider>,
  document.getElementById('root')
);

