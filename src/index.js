import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './containers/app';
import './style.css';
import store from './redux/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
